---
layout: layout.liquid
title: Hello
---

<h1>{{title}}</h1>

<ul>
<li> Pagination set to posts</li>
<li> page in collections.page</li>
</ul>

<section>
  {% for article in collections.page %}
  <article>
   {{ article.title }}
    {{ article.templateContent }} {{ article.date | date: "%Y-%m-%d" }}
  </article>
  {% endfor %}
</section>
