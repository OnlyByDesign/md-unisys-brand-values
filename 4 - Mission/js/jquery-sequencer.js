/**
 * jQuery-Sequencer
 * https://github.com/skruf/jQuery-sequencer
 *
 * Created by Thomas Låver
 * http://www.laaver.com
 *
 * Version: 2.0.0
 * Requires: jQuery 1.6+
 *
 */

(function($) {

  $.fn.sequencer = function(options, cb) {

    var self = this,
        paths = [],
        load = 0,
        sectionHeight,
        windowHeight,
        currentScroll,
        percentageScroll,
        index;

    if(options.path.substr(-1) === "/") {
      options.path = options.path.substr(0, options.path.length - 1)
    }

    for (var i = 0; i <= options.count; i++) {
      paths.push(options.path + "/" + i + "." + options.ext);
    }
    
    $("<div class='jquery-sequencer-preload'></div>").appendTo("body").css("display", "none");
    
    $(paths).each(function() {
        $("<img>").attr("src", this).load(function() {
            $(this).appendTo("div.jquery-sequencer-preload");
            load++;
            if (load === paths.length) {
                cb(options.count);
                console.log('after image loads', options.count)
            }
        });
    });
    
    $(window).scroll(function() {
      sectionHeight = $(self).height();
      windowHeight = $(this).height();
      currentScroll = $(this).scrollTop();
      percentageScroll = 100 * currentScroll / (sectionHeight - windowHeight);
      index = Math.round(percentageScroll / 100 * options.count);
      if(index < options.count) {  //actually does the iterations
        $("img.sequencer").attr("src", paths[index]);
      }
        else if(index >= options.count){
            console.log("done with the slideshow");
        }
        if(index <= 1){
            console.log("beginning of the slideshow");
        }
    });

    return this;

  };

}(jQuery));
