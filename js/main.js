//check width for resize
var navWindowWidth;

//functions not dependent on window size
$(document).ready(function () {
    navWindowWidth = $(window).width();
    nameNav();
    checkSize();
});

function nameNav() {
    $('.main-nav > ul').addClass('primary-nav').children('li').addClass('primary-nav__item');
}

////run resize functions
$(window).resize(function () {
    if (navWindowWidth != $(window).width()) {
        navWindowWidth = $(window).width();
        checkSize();
    }
}).resize();

function checkSize() {
    if (Modernizr.mq('only screen and (min-width: 768px)') || $(window).width() > 768) {
        desktopNav();
    }
    else {
        mobileNav();
    }
}

function desktopNav() {
    $('.nav-wrap').removeClass('nav-open').removeAttr('style');
    $('.nav-launch').removeClass('nav-open').unbind('click');
}


function mobileNav() {
    $('.nav-wrap').removeClass('nav-open').removeAttr('style');
    $(this).removeClass('nav-open');
    $('.nav-launch').removeClass('nav-open').unbind('click').on('click', (function (e) {

        var mobileNavHeight = 0;
        var childrenHeight = $('.main-nav, .utility-nav').children().each(function () {
            mobileNavHeight = $(this).height();
        });

        e.preventDefault();
        e.stopPropagation();

        if ($(this).hasClass("nav-open")) {
            $(this).removeClass('nav-open');
            $('.nav-wrap').css('overflow', 'hidden').stop(true, true).animate({ height: 0 }, 100);
        } else {
            $(this).addClass("nav-open");
            $('.nav-wrap').css('overflow', 'inherit').stop(true, true).animate({ height: mobileNavHeight}, 250);
        }
    })
    );
}
