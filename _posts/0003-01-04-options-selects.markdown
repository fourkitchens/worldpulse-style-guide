---
layout: component
title:  "Select Menus"
---

{% capture m %}
<select name="select" multiple size="4">
  <option value="value1">Value 1</option>
  <option value="value2" selected>Value 2</option>
  <option value="value3">Value 3</option>
  <option value="value3">Value 4</option>
  <option value="value3">Value 5</option>
  <option value="value3">Value 6</option>
  <option value="value3">Value 7</option>
</select>
{% endcapture %}

{% capture s %}
<form action="#">
  <select id="edit-date-month" name="date[month]">
    <option value="6">Jun</option>
    <option value="7">Jul</option>
    <option value="8" selected="selected">Aug</option>
    <option value="9">Sep</option>
    <option value="10">Oct</option>
  </select>
  <select id="edit-date-day" name="date[day]">
    <option value="18">18</option>
    <option value="19">19</option>
    <option value="20" selected="selected">20</option>
    <option value="21">21</option>
    <option value="22">22</option>
  </select>
  <select id="edit-date-year" name="date[year]">
    <option value="1986">1986</option>
    <option value="1987">1987</option>
    <option value="1988" selected="selected">1988</option>
    <option value="1989">1989</option>
    <option value="1990">1990</option>
  </select>
</form>
{% endcapture %}

### Select Menu (Multiple Values)
{% include sample.html sample=m %}

### Select Menus
{% include sample.html sample=s %}
