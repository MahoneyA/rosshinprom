$(document).ready(function() {
    var animTime = 8000, // Задержка между слайдами
        opacityDelay = 500,
        autoSlideDelay2,
        animTime2,
        autoSlideDelay = 8000; // Начальная задержка


    $(document).ready(function() {
        index = $('.active').index(".slide");
        $('.slide').eq(index).fadeTo(opacityDelay, 1);
        $('.slide').each(function(i, elem) {
            $('.pagi').append('<div class="pagi-elem" data-id="'+i+'"></div>');
            if ($(this).hasClass('active')) { $('.pagi-elem').eq(i).addClass('current') };
        });
        delay();
    });

    $('#next').click(function () {
        index1 = $('.active').index(".slide");
        index2 = index1+1;
        if (index2 == $(".slide").length ) { index2 = 0; }
        clearTimeout(autoSlideDelay2);
        clearInterval(animTime2);
        delay();
        opacity_refresh(index1, index2);
    });

    $('#prev').click(function () {
        index1 = $('.active').index(".slide");
        index2 = index1-1;
        if (index2 == -1 ) { index2 = $(".slide").length-1; }
        clearTimeout(autoSlideDelay2);
        clearInterval(animTime2);
        delay();
        opacity_refresh(index1, index2);
    });

    $('.pagi').on('click', '.pagi-elem', function () {
        index1 = $('.active').index(".slide");
        index2 = $(this).data('id');
        clearTimeout(autoSlideDelay2);
        clearInterval(animTime2);
        delay();
        opacity_refresh(index1, index2);
    });

    function opacity_refresh(index1, index2) {
        $('.pagi-elem').eq(index1).removeClass('current');
        $('.active').fadeTo(opacityDelay, 0);
        $('.active').removeClass('active');
        $('.slide').eq(index2).addClass('active');
        $('.pagi-elem').eq(index2).addClass('current');
        $('.slide').eq(index2).fadeTo(opacityDelay, 1);
        // delay();
    }


    function delay() {
        autoSlideDelay2 = setTimeout(function() {
            animTime2 = setInterval(function() {
                index1 = $('.active').index(".slide");
                index2 = index1+1;
                if (index2 == $(".slide").length ) { index2 = 0; }
                opacity_refresh(index1, index2);
            }, animTime);
        }, autoSlideDelay);
    }
});
