(function ($, Drupal, window, document, undefined) {

  var wp_icon_tooltip = function () {
    // We use .attr() instead of .data() because we need an actual DOM change.
    if ($(this).text().length) {
      $(this).attr('data-desc', $(this).text()).addClass('show-tooltip');
    }
  };

  var wpe_media_classes = ['wpe-image-left', 'wpe-image-right', 'wpe_image_left', 'wpe_image_right'];

  Drupal.behaviors.wp_icon_tooltip = {
    attach: function () {
      $('[class*="icon-"]').each(wp_icon_tooltip);
      $('.flag').each(wp_icon_tooltip);

      // We cannot put classes on media containers, only on images, but the
      // whole container needs the class for floated styles. Here, we move
      // those classes from the <img/> to the <div/> container.
      $.each(wpe_media_classes, function (index, value) {
        $('img.' + value).once('format-figure').closest('.media-element-container').addClass(value);
      });

      $('html').once('build-responsive-nav', function () {
        $('<li class="menu-button-wrapper" />').append('<a href="#" class="menu-button">Menu</a>').appendTo('header .row-1 .menu');
        $('.main-menu > .menu').attr('data-breakpoint', 780).flexNav();
      });
    }
  };

})(jQuery, Drupal, this, this.document);
