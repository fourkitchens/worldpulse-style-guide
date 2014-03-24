(function($) {
  $(document).ready(function(){
    if ( $('.styleguide-nav').length && $('.styleguide-nav').hasClass('collapse') ) {
      $('.styleguide-nav li.heading').nextUntil('li.heading').not('.current').hide();
      $('.styleguide-nav li.heading').click(function(){
        $('.styleguide-nav li.heading').nextUntil('li.heading').not('.current').hide();
        $(this).nextUntil('li.heading').show();
      });
    }
  });
})(jQuery);

// @TODO: These need to be included in the final theme:
(function($) {
  $(document).ready(function(){
    $('[class^="icon-"]').each(function(){
      // We use .attr() instead of .data() because we need an actual DOM change.
      $(this).attr('data-desc', $(this).text());
    })
  });
})(jQuery);
