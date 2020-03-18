---
title: Tablón
layout: board # TODO
resources:
  - name: Campaña ¿Dinero público? ¡Código público!
    src: fsfe_public-money-public-code.jpg
    params:
      url: https://publiccode.eu/es/
  - name: Campaña Defective by Design
    src: fsf_defective-by-design.png
    params:
      url: https://www.defectivebydesign.org/
  - name: Podcast Autodefensa informática
    src: autodefensa_informática.jpg
    params:
      url: https://autodefensainformatica.radioalmaina.org/
  - name: Podcast Post Apocalipsis Nau
    src: do-some-collage.wtf
    params:
      url: https://www.elsaltodiario.com/post-apocalipsis-nau/
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

HUGO: shuffle stickers on each execution: https://gohugo.io/functions/shuffle/
