---
title: Colección de juegos retro
---

{% assign platforms = site.retrogaming | where: "type", "console" %}
{% assign games = site.retrogaming | where_exp: "item", "item.platform" %}

## Consolas y portátiles

{% for item in platforms %}
  - {{ item.brand }} **{{ item.name }}**
{% endfor %}


## Juegos

{% for item in games %}
  {% assign codename = item.codename %}
  - {{ item.platform }}, **{{ item.title }}** (`{{ codename.platform }}-{{ codename.game }}-{{ codename.region }}`)
{% endfor %}
