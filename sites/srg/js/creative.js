/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize WOW.js Scrolling Animations
    new WOW().init();     

    setTimeout(function()
        {
            $('.fixed-phone2').css('visibility', 'visible');
        }, 100);
    
    // On Scroll
    $(window).scroll(function()
        {
            var left1 = $('.navbar-header').offset().left + $('.navbar-header').width(),
                left2 = $('.navbar-nav').offset().left,
                cntr = ((left1 + left2) / 2) - 58;

            if( $(window).scrollTop() >= 450 )
            {
                $('.fixed-phone2').css('left', cntr);
                $('.fixed-phone2').show();                
            }
            else
            {
                $('.fixed-phone2').hide();
            }
        });

    // On Scroll
    $(window).resize(function()
        {
            var left1 = $('.navbar-header').offset().left + $('.navbar-header').width(),
            left2 = $('.navbar-nav').offset().left,
            cntr = ((left1 + left2) / 2) - 58;

            $('.fixed-phone2').css('left', cntr);
        });

    // On Load
    var left1 = $('.navbar-header').offset().left + $('.navbar-header').width(),
    left2 = $('.navbar-nav').offset().left,
    cntr = ((left1 + left2) / 2) - 58;

    $('.fixed-phone2').css('left', cntr);
    
    if( $(window).scrollTop() >= 450 )
    {
        $('.fixed-phone2').css('left', cntr);
        $('.fixed-phone2').show();                
    }
    else
    {
        $('.fixed-phone2').hide();
    }
})(jQuery); // End of use strict
