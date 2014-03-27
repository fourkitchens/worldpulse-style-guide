Huh?
====

Drupal contains... many... many many style sheets. And while they may be useful
for Drupal core-provided themes, many of them contain a lot of rules we don't
want and would otherwise have to override or sidestep. For World Pulse, we will
disable all stylesheets that aren't part of the theme. So in this directory,
we'll keep our own (modified) copies of Drupal's native stylesheets for use as
Sass partials. Woohoo.

They'll be included after _config and _global, so all of our variables will be
in place.
