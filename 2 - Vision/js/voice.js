/*jslint browser: true*/
/*global $, jQuery*/

jQuery(document).ready(function ($) {
    
    function overBack() {
        if ($('#overlay').is(':visible')) {
            $('.ov_back').css({'display': 'block'});
        } else ($('#overlay').is(':hidden')); {
            $('.ov_back, #holder').fadeOut('slow');
        }
    }
    
    var iframe = $("#valueFrame");
    $('#overlay').click( function () {
        $('#overlay').fadeOut('slow');
        overBack();
        iframe.attr("src", iframe.data("src"));
        $('audio')[0].play();
    });
    
    $(function() {
        if (($("#overlay").offset().top + $("#overlay").height()) >= $(window).height()) {
           $('#overlay').css({'transform':'scale(0.5)','top':'-10vh'})
        }
    });
    
    $('#sub, #close, nav.menu a p').click(function() {
        $('nav.menu').slideToggle('.5s');
    });
    
    $('nav.menu a p, div.nav').click(function() {
       $('audio').each(function(){
            this.pause();
            this.currentTime = 0;
        }); 
    });    
    
});