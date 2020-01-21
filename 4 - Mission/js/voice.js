/*jslint browser: true*/
/*global $, jQuery*/

jQuery(document).ready(function ($) {

    var audioPlayed = false; 
    
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
    
    var audio = $('audio');
    $('#page').one('click touchstart mousedown mousewheel', function audioPlay() {
        audio.addClass('active');
        audio[0].oncanplaythrough = $('audio')[0].play();
        if($(audio).hasClass('played')){
            $('#page').off('click touchstart mousedown mousewheel', audioPlay);
        }
    });
    
    $('div.block').on('click', function() {
        $(this).next('.lay').children('.image,a.link').css({'display':'block'});
        $(this).next('.lay').children('.image').addClass('scaleIn');
        setTimeout(function () {
            $('.image').removeClass('scaleIn');
        }, 500);
    });
    
    $('.image').on('click', function() {
        $(this).addClass('scaleOut');
        $('a.link').css({'display':'none'})
        setTimeout(function () {
            $('.image').css({'display':'none'}).removeClass('scaleOut');
        }, 450);
    });
    
    $(document).scroll(function(){

        var currentImgPath = $(".sequencer")[0].src
        var len = currentImgPath.length
        var src = currentImgPath.slice(len-5)
        if (src=="1.jpg"){
            if (audioPlayed==false){
                $('audio')[0].play();
                audioPlayed = true;

            }

        }
        
        
        sectionHeight = $(self).height();
        windowHeight = $(this).height();
        currentScroll = $(this).scrollTop();
        percentageScroll = 100 * currentScroll / (sectionHeight - windowHeight);
        index = Math.abs(Math.round(percentageScroll / 100 * optioncount));

        function moveBox(idName, start, stop, tweak = 50, divs = 1){
            if(index >= start && index <= stop){
                var indexrange = stop - start;
                var percent = (index-start) / indexrange;
                var viewportHeight = $(self).innerHeight()/divs;
                var Ypos = (percent * viewportHeight) - tweak;
                var curvh = (Ypos).toString() + 'px';
                $(idName).css({"top": curvh});
                $(idName).css({"display": "block"});
                $(idName).addClass('fixed');    
            }
            else {
                $(idName).css({"display": "none"});
                $(idName).removeClass('fixed'); 
            }
        }
        
        moveBox('#over_1', 82, 185, 60, 1.02);
        moveBox('#over_2', 190, 305, 95, 1.05);
        moveBox('#over_3', 315, 400, 45, 2);
        
    }).scroll();
    
});