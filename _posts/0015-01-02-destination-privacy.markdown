---
layout: component
title:  "Post Destination / Privacy"
---

{% capture r %}
<form action="#">
  <div>
    <input type="radio" name="radios" value="a">
    <label>My Journal</label>
  </div>
  <div>
    <input type="radio" name="radios" value="b" checked="checked">
    <label>A Group I Belong To</label>
  </div>
</form>
{% endcapture %}

### Radio Buttons
{% include sample.html sample=r %}

_TODO: Confirm form widget and style as switches?_