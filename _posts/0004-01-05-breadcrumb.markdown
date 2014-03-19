---
layout: component
title:  "Breadcrumbs"
---

{% capture bc %}
<h2 class="element-invisible">You are here</h2>
<div class="breadcrumb">
  <a href="#">Home</a> &raquo;
  <a href="#">Administration</a> &raquo;
  <a href="#">Configuration</a> &raquo;
  <a href="#">Content authoring</a> &raquo;
  <a href="#">Text formats</a>
</div>
{% endcapture %}

{% include sample.html sample=bc %}

_Output adapted from admin area of Drupal 7 site in production, markup may need
to be adjusted to match public-facing content._
