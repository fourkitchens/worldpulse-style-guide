---
layout: component
title:  "Privacy Icons"
---

{% capture i %}
<ul>
  <li><span class="icon-globe" title="Public">Public</span> &ensp; <em>Public</em></li>
  <li><span class="icon-friends" title="Friends Only">Friends Only</span> &ensp; <em>Friends Only</em></li>
  <li><span class="icon-lock" title="Only Me">Only Me</span> &ensp; <em>Only Me</em></li>
</ul>
{% endcapture %}

### This post is visible to:
{% include sample.html sample=i %}