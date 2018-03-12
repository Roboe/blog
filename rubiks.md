---
title: Colección de cubos de Rubik
---

{% for item in site.rubiks %}
 - {{ item.name }} ({{ item.type }})
{% endfor %}
