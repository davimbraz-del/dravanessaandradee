# Dra. Vanessa Andrade — Landing page

Site de uma página em HTML, CSS e JavaScript puro (`index.html`, `style.css`, `script.js`). Não precisa de build: é só publicar a pasta.

## O que preencher antes de publicar

| O quê | Onde |
|---|---|
| **Número do WhatsApp** | `script.js`, constante `WHATSAPP_NUMERO` (só DDD + número, ex.: `"81999998888"`). Todos os botões e o número exibido no rodapé passam a usar esse valor. |
| **Serviços** | `index.html`, seção `#servicos`: troque `[SERVIÇO 1]`…`[SERVIÇO 6]` e as descrições. |
| **Depoimentos** | `index.html`, seção `#depoimentos`: troque os textos de exemplo e `[Nome do paciente]`, e apague as linhas `<span class="placeholder-tag">Exemplo · substituir</span>`. |
| **Endereço, horários, Instagram** | `index.html`, rodapé (`#contato`): `[ENDEREÇO]`, `[HORÁRIOS]`, `[@INSTAGRAM]` e o link `https://instagram.com/` (complete com o @). |
| **Mapa** | `index.html`, no `<iframe>` do rodapé: troque `Recife%2C%20PE` pelo endereço (com `%20` no lugar dos espaços). Faça o mesmo no link "Abrir no Google Maps". |
| **Fotos** | Coloque as fotos em `assets/` (ex.: `dra-vanessa.jpg`, `consultorio.jpg`) e troque o `src` das duas `<img>` em `index.html`. Prefira fotos verticais (proporção 4:5), com até ~300 KB cada. |

## Publicar

- **Netlify**: arraste a pasta em app.netlify.com/drop.
- **Vercel**: `vercel` na pasta, ou importe o repositório (framework: "Other").
- **GitHub Pages**: Settings → Pages → Deploy from branch → raiz (`/`).
