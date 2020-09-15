$(document).ready(function(){
	$(window).scroll(function() {
        $('.block-last').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("animate__lightSpeedInRight");
            }
        });
    });
    $(window).scroll(function() {
        $('.block-mid').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("animate__flipInX");
            }
        });
    });
    $(window).scroll(function() {
        $('.block-first').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("animate__lightSpeedInLeft");
            }
        });
    });
    $(window).scroll(function() {
        $('.title-learn').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("animate__zoomIn");
            }
        });
    });
     $(window).scroll(function() {
        $('.title-tickets').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("animate__zoomIn");
            }
        });
    });
      $(window).scroll(function() {
        $('.input').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("animate__fadeInLeftBig");
            }
        });
    });
       $(window).scroll(function() {
        $('.form-btn').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("animate__zoomIn");
            }
        });
    });
        $(window).scroll(function() {
        $('.footer-text').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("animate__zoomInUp");
            }
        });
    });
});

