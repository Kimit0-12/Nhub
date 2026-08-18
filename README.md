<p align="center">
  <img src="./assets/banner.svg" alt="NHub — playful productivity" width="100%">
</p>

<p align="center">
  <strong>Focus when it matters. Enjoy the break you earned.</strong><br>
  A productivity app where progress feels visible and Canutín keeps things playful.
</p>

<p align="center">
  <a href="https://nhub-app.pages.dev/"><img src="https://img.shields.io/badge/OPEN_NHUB-LIVE_SITE-f68a30?style=for-the-badge&logo=cloudflare&logoColor=white" alt="Open the live NHub site"></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/Cloudflare_Pages-F38020?style=flat-square&logo=cloudflare&logoColor=white" alt="Cloudflare Pages">
  <img src="https://img.shields.io/badge/Languages-EN_·_ES_·_IT-789844?style=flat-square" alt="English, Spanish and Italian">
</p>

<br>

[![NHub website preview in English](./portada-en.png)](https://nhub-app.pages.dev/)

## The NHub loop

```mermaid
flowchart LR
    A["Choose one goal"] --> B["Start a Focus session"]
    B --> C["Earn Canutimonedas"]
    C --> D["Take a proper Pitipausa"]
    D --> E["Unlock rewards and styles"]
    E --> A
```

## More than a timer

| 🎯 Focus | ☕ Pitipausas |
| --- | --- |
| Make starting easier and keep attention on one clear goal. | Give breaks a real place in the workflow instead of treating them as failure. |
| **🪙 Canutimonedas** | **🌱 Canutín** |
| Turn consistent effort into rewards you can see and use. | Add personality, accessories and a sense of progression to the whole experience. |

## See it in your language

<details>
<summary><strong>🇪🇸 Ver la presentación en español</strong></summary>

[![NHub website preview in Spanish](./portada-es.png)](https://nhub-app.pages.dev/)

</details>

<details>
<summary><strong>🇮🇹 Guarda la presentazione in italiano</strong></summary>

[![NHub website preview in Italian](./portada-it.png)](https://nhub-app.pages.dev/)

</details>

## This repository

This is NHub's **public landing page**, built to present the product without exposing the mobile application's source code.

- Interactive Focus demo
- Tasks, breaks and reward-system previews
- Canutín accessories and visual styles
- Responsive desktop and mobile layouts
- English, Spanish and Italian content

## Run locally

Node.js **22.13 or newer** is recommended.

```bash
npm install
npm run dev
```

Build the static site:

```bash
npm run build
```

The result is written to `dist/` and deployed on Cloudflare Pages.

## Project status

- [x] Public multilingual landing page
- [x] Interactive Focus demo
- [x] Responsive layout
- [ ] Mobile app release

> NHub is in active development. The site evolves alongside the app rather than pretending everything is finished.
