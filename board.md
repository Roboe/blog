---
title: Tablón
layout: board # TODO
---

Tapa de portátil digital. Tablón con pegatinas de proyectos, páginas, software, movimientos, etc. (no exclusivamente técnicos). Idea tomada de [la sección lateral Campañas de la página del _podcast_ ](https://autodefensainformatica.radioalmaina.org/#media_image-5) al verla en un móvil.

Posible solución elegante con CSS Grid (_auto-placement algorithm_):

```css
.container {
  display: grid;
  grid-template-columns: 60px 60px 60px 60px 60px;
  grid-template-rows: 30px 30px;
  grid-auto-flow: column;
}
```