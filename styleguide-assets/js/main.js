(function($) {
  $(document).ready(function(){
    $('.styleguide-nav li.heading').nextUntil('li.heading').hide();
    $('.styleguide-nav li.heading').click(function(){
      $('.styleguide-nav li.heading').nextUntil('li.heading').hide();
      $(this).nextUntil('li.heading').show();
    });
  });
})(jQuery);
