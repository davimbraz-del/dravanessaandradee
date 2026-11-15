/* =========================================================
   Dra. Vanessa Andrade — interações
   ========================================================= */

/* ---------------------------------------------------------
   CONFIGURAÇÃO — edite aqui
   WHATSAPP_NUMERO: DDD + número, só dígitos (ex.: "81999998888").
   O código do Brasil (55) é adicionado automaticamente.
   --------------------------------------------------------- */
const WHATSAPP_NUMERO = "[NÚMERO]";
const WHATSAPP_MENSAGEM = "Olá, Dra. Vanessa! Gostaria de agendar uma consulta.";

document.documentElement.classList.add("js");

(function () {
  "use strict";

  /* ---------- Links do WhatsApp ---------- */
  const digits = WHATSAPP_NUMERO.replace(/\D/g, "");
  const waNumber = digits ? "55" + digits : "55" + WHATSAPP_NUMERO;
  const waUrl = "https://wa.me/" + waNumber + "?text=" + encodeURIComponent(WHATSAPP_MENSAGEM);

  document.querySelectorAll("[data-whatsapp]").forEach((link) => {
    link.setAttribute("href", waUrl);
  });

  // Exibe o número formatado: (81) 99999-8888
  const formatted = digits.length === 11
    ? `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
    : digits.length === 10
      ? `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`
      : WHATSAPP_NUMERO;
  document.querySelectorAll("[data-whatsapp-display]").forEach((el) => {
    el.textContent = formatted;
  });

  /* ---------- Ano no rodapé ---------- */
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });

  /* ---------- Cabeçalho ao rolar ---------- */
  const header = document.querySelector(".site-header");
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 12);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Menu mobile ---------- */
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.getElementById("menu");
  const desktop = window.matchMedia("(min-width: 900px)");

  const setMenu = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    nav.classList.toggle("is-open", open);
    document.body.classList.toggle("menu-open", open);
  };

  toggle.addEventListener("click", () => setMenu(toggle.getAttribute("aria-expanded") !== "true"));
  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("is-open")) {
      setMenu(false);
      toggle.focus();
    }
  });
  document.addEventListener("click", (e) => {
    if (nav.classList.contains("is-open") && !nav.contains(e.target) && !toggle.contains(e.target)) setMenu(false);
  });
  desktop.addEventListener("change", () => setMenu(false));

  /* ---------- Link ativo no menu ---------- */
  const navLinks = [...document.querySelectorAll(".nav-list a")];
  const sections = navLinks
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

  if ("IntersectionObserver" in window) {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          navLinks.forEach((a) => a.classList.toggle("is-active", a.getAttribute("href") === "#" + entry.target.id));
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => spy.observe(s));
  }

  /* ---------- Animações de entrada ---------- */
  const reveals = document.querySelectorAll(".reveal");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Escalonamento dentro de grupos (cards, destaques)
  document.querySelectorAll(".service-grid, .highlights").forEach((group) => {
    [...group.children].forEach((child, i) => child.style.setProperty("--delay", `${i * 90}ms`));
  });

  if (!reduceMotion && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("is-visible"));
  }

  /* ---------- Carrossel de depoimentos ---------- */
  const track = document.querySelector(".carousel-track");
  if (track) {
    const slides = [...track.children];
    const prev = document.querySelector("[data-carousel-prev]");
    const next = document.querySelector("[data-carousel-next]");
    const dotsWrap = document.querySelector(".carousel-dots");

    const dots = slides.map((_, i) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "carousel-dot";
      b.setAttribute("aria-label", `Ir para o depoimento ${i + 1}`);
      b.addEventListener("click", () => goTo(i));
      dotsWrap.appendChild(b);
      return b;
    });

    const slideStep = () => {
      if (slides.length < 2) return track.clientWidth;
      return slides[1].offsetLeft - slides[0].offsetLeft;
    };

    const currentIndex = () => Math.round(track.scrollLeft / slideStep());

    function goTo(i) {
      const max = slides.length - 1;
      const index = Math.max(0, Math.min(max, i));
      track.scrollTo({ left: index * slideStep(), behavior: reduceMotion ? "auto" : "smooth" });
    }

    const update = () => {
      const maxScroll = track.scrollWidth - track.clientWidth - 2;
      const idx = track.scrollLeft >= maxScroll ? slides.length - 1 : currentIndex();
      dots.forEach((d, i) => d.setAttribute("aria-current", i === idx ? "true" : "false"));
      const controls = prev && prev.parentElement;
      if (controls) controls.classList.toggle("is-static", track.scrollWidth <= track.clientWidth + 2);
      if (prev) prev.disabled = track.scrollLeft <= 2;
      if (next) next.disabled = track.scrollLeft >= maxScroll;
    };

    prev && prev.addEventListener("click", () => goTo(currentIndex() - 1));
    next && next.addEventListener("click", () => goTo(currentIndex() + 1));

    track.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") { e.preventDefault(); goTo(currentIndex() + 1); }
      if (e.key === "ArrowLeft") { e.preventDefault(); goTo(currentIndex() - 1); }
    });

    let raf = 0;
    track.addEventListener("scroll", () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    }, { passive: true });
    window.addEventListener("resize", update);
    update();
  }
})();
