(function ($, Drupal, window, document, undefined) {

  var wp_icon_tooltip = function () {
    // We use .attr() instead of .data() because we need an actual DOM change.
    if ($(this).text().length) {
      $(this).attr('data-desc', $(this).text()).addClass('show-tooltip');
    }
  };

  Drupal.behaviors.wp_icon_tooltip = {
    attach: function () {
      $('[class*="icon-"]').each(wp_icon_tooltip);
      $('.flag').each(wp_icon_tooltip);
    }
  };

})(jQuery, Drupal, this, this.document);
