(function($) {
  $(document).ready(function(){
    if ( $('.styleguide-nav').length && $('.styleguide-nav').hasClass('collapse') ) {
      $('.styleguide-nav li.heading').nextUntil('li.heading').hide();
      $('.styleguide-nav li.heading').click(function(){
        $('.styleguide-nav li.heading').nextUntil('li.heading').hide();
        $(this).nextUntil('li.heading').show();
      });
    }
  });
})(jQuery);
