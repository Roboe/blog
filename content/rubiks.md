---
title: Colección de cubos de Rubik
layout: rubiks # TODO
---

{% for item in site.rubiks %}
 - {{ item.name }} ({{ item.type }})
{% endfor %}
