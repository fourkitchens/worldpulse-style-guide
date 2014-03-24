---
layout: component
title:  "Privacy Icons"
---

{% capture i %}
<ul>
  <li><span class="icon-globe">Public</span> &ensp; <em>Public</em></li>
  <li><span class="icon-friends">Friends Only</span> &ensp; <em>Friends Only</em></li>
  <li><span class="icon-lock">Only Me</span> &ensp; <em>Only Me</em></li>
</ul>
{% endcapture %}

### This post is visible to:
{% include sample.html sample=i %}

For more information about icons, see _[Iconography]({% post_url 0005-01-02-icons %}).