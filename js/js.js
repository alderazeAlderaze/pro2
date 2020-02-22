/*global $, window*/


$(function () {
    

    

    
    

    'use strict';
    
    $("html").niceScroll(); 
   
    $('.carousel').carousel({
      
        interval: 6000
        
    });
    
    $('.ch').on('click', function () {
        
        
        $(' .rrr').toggle(500);
        
    });
    
 
    var li = $('.box-option ul li');
    
    li
    
        .eq(0).css('backgroundColor', '#f02323').end()
        .eq(1).css('backgroundColor', '#da02d6').end()
        .eq(2).css('backgroundColor', '#2435e8').end()
        .eq(3).css('backgroundColor', '#099a3b');

   
    $('.box-option ul li').on('click', function () {
        
    
        //$('link[href*="rrr"]').attr('href', $(this).attr('data-value'));
        
        $('link[href*="rrr"]').attr('href', $(this).attr('data-value'));
        
        
    });
    

    $('.up').on('click', function () {
        
        $('html,body').animate({
            
            scrollTop: $('body').offset().top
            
        }, 1000);
        
    });
  
    
    $(window).scroll(function () {
        
        if ($(this).scrollTop() >= 735) {
            
            $('#rrr').fadeIn();
            
        } else {$('#rrr').fadeOut(); }
        
       
        
    });
    
    
   
   
    
    
    
    
});

$(window).load(function () {
    
      
    'use strict';
    
       
     
     
    
    $('.over .sk-cube-grid').fadeOut( function () {
       
        $('.over').fadeOut(function () {
            
            $(this).remove();
            
            $('body').css('overflow', 'auto');
        });
        
    });
    
    
     
     
      
    
   
    
    
});




