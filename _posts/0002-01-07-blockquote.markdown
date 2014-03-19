---
layout: component
title:  "Block Quote"
---

{% capture blockquote %}
<blockquote>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam iaculis,
    velit gravida convallis tincidunt, felis enim venenatis lorem, nec lobortis
    nisl urna et mi. Pellentesque ac dictum ante. Fusce dignissim tempor
    elementum. Ut dignissim convallis eros, viverra luctus lacus consequat ac.
    Sed feugiat velit sed magna aliquam accumsan. Nam vitae porta tortor. Nam
    auctor dui a neque iaculis in aliquam erat viverra. Duis orci nunc, lacinia
    in malesuada et, euismod id turpis. Cras mattis vulputate erat, eget tempor
    magna egestas eu. Vestibulum sit amet massa est.
  </p>
  <cite>
      Placeholder copy of yore
  </cite>
</blockquote>
{% endcapture %}

{% include sample.html sample=blockquote %}
