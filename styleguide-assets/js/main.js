(function($) {
  $(document).ready(function(){
    if ( $('.styleguide-nav').length && $('.styleguide-nav').hasClass('collapse') ) {
      $('.styleguide-nav li.heading').nextUntil('li.heading').not('.current').hide();
      $('.styleguide-nav li.heading').click(function(){
        $('.styleguide-nav li.heading').nextUntil('li.heading').not('.current').hide();
        $(this).nextUntil('li.heading').show();
      });
    }

    $('a[href="#"]').click(function(e){
      // So that when people click sample links, they don't go flying back to the
      // top of the style guide.
      e.preventDefault();
    })

    $('a.icon-abuse').click(function(){
      alert("Thanks for letting us know. The moderators will review this post or comment.");
    });
    $('a.icon-cc').click(function(){
      alert("[[ Information regarding Creative Commons license ]]");
    });
  });
})(jQuery);

// @TODO: These need to be included in the final theme:
(function($) {
  $(document).ready(function(){
    $('[class^="icon-"]').each(function(){
      // We use .attr() instead of .data() because we need an actual DOM change.
      if ($(this).text().length) {
        $(this).attr('data-desc', $(this).text()).addClass('show-tooltip');
      }
    });
  });
})(jQuery);
