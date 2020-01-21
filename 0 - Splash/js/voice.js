/*jslint browser: true*/
/*global $, jQuery*/

jQuery(document).ready(function ($) {
    
    $('nav.menu a p, div.nav').click(function() {
       $('audio').each(function(){
            this.pause();
            this.currentTime = 0;
        }); 
    });
    
});