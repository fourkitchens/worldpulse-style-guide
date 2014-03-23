---
layout: component
title:  "Text Basics"
---

{% capture html %}
  <strong>Strong</strong> text,
  <em>Emphasized</em> text,
  <del>Deleted/Redacted</del> text,
  <u>Underlined</u> text
{% endcapture %}

{% capture html2 %}
  Superscript: 3<sup>rd</sup>, 4<sup>th</sup>, and 5<sup>th</sup> <br />
  Subscript: H<sub>2</sub>O and C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>
{% endcapture %}

{% include sample.html sample=html %}

_Avoid underlined text except for [hyperlinks]({% post_url 0002-01-04-links %})._

{% include sample.html sample=html2 %}
