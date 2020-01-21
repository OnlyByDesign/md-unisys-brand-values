/*jslint browser: true*/
/*global $, jQuery*/

jQuery(document).ready(function ($) {
    
    function overBack() {
        if ($('#overlay').is(':visible')) {
            $('.ov_back').css({'display': 'block'});
        } else ($('#overlay').is(':hidden')); {
            $('.ov_back').fadeOut('slow');
        }
    }
    
    $('#overlay').click( function () {
        $('#overlay').fadeOut('slow');
        $('body').css({'overflow':'auto'});
        overBack();
        $('audio')[0].play();
        setTimeout(function() {
            $('#wrap div').fadeIn('slow');
        }, 2500);
    });
    
    $(function(){
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