---
title: Colección de cubos de Rubik
layout: page
permalink: /rubiks/
---

{% for item in site.rubiks %}
 - {{ item.name }} ({{ item.type }})
{% endfor %}
