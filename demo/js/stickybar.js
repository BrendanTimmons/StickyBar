(function($){

  $.fn.stickyBar = function(options){
    var selected = this,
        height   = $(selected).outerHeight(),
        settings = $.extend({
          offset:   0,
          position: 'top',
          negOffset: false
        }, options),
        pos      = settings.position[0].toUpperCase() +
                   settings.position.slice(1),
        fixPos   = function(){
          $(selected).css({
            "left": "0",
            "position": "fixed",
          }).css(settings.position, 0);
          $("body").css("padding" + pos, height);
        };

    if (settings.offset > 0) {
      $(window).scroll(function(){
        if ($(window).scrollTop() >= settings.offset){
          fixPos();
        } else {
          $(selected).css("position", "static");
          $("body").css("padding" + pos, 0);
        }

        if (settings.negOffset){
          $(selected).css(settings.position, -settings.offset);
        }
      });
    } else {
      fixPos();
    }
  }

}(jQuery));