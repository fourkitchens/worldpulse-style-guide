---
layout: component
title:  "Checkboxes and Radio Buttons"
---

{% capture c %}
<form action="#">
  <div>
    <input type="checkbox" name="checkboxes[a]" value="a">
    <label>Nisl elementum mi</label>
  </div>
  <div>
    <input type="checkbox" name="checkboxes[b]" value="b" checked="checked">
    <label>Nisl elementum mi</label>
  </div>
  <div>
    <input type="checkbox" name="checkboxes[c]" value="c">
    <label>Nisl elementum mi</label>
  </div>
</form>
{% endcapture %}

{% capture r %}
<form action="#">
  <div>
    <input type="radio" name="radios" value="a">
    <label>Nisl elementum mi</label>
  </div>
  <div>
    <input type="radio" name="radios" value="b" checked="checked">
    <label>Nisl elementum mi</label>
  </div>
  <div>
    <input type="radio" name="radios" value="c">
    <label>Nisl elementum mi</label>
  </div>
</form>
{% endcapture %}

### Checkboxes
{% include sample.html sample=c %}

### Radio Buttons
{% include sample.html sample=r %}

_4K Todo: Can styles [like this](http://www.hongkiat.com/blog/css3-checkbox-radio/)
like this be applied?
