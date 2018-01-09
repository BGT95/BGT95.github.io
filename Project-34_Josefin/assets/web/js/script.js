$(document).ready(function () {
    $('#burger').on('click', function () {
        $('.menu').toggleClass('menu-active');
    });

    const $window = $(window);
    $window.on('scroll', onScroll);

    function onScroll() {
        if ($window.scrollTop() >= $window.height()) {
            $('#burger').addClass('black-burger');
        } else {
            $('#burger').removeClass('black-burger');
        }

        if ($window.scrollTop() >= $window.height() * 3) {
            $('.slider-inner').addClass('slider-inner_animate');
        } else {
            $('.slider-inner').removeClass('slider-inner_animate');
        }

    }


    $('.btn-down').on('click', function () {
        $("html, body").animate({
            scrollTop: $window.height()
        }, 500)
    });

    $('.web-design-content').addClass('tab-content_active');

    $('.web-design').on('click', function () {
        $('.web-design-content').addClass('tab-content_active');
        $('.apss-content, .dashboard-content, .branding-content').removeClass('tab-content_active');
    });

    $('.apss').on('click', function () {
        $('.apss-content').addClass('tab-content_active');
        $('.web-design-content, .dashboard-content, .branding-content').removeClass('tab-content_active');
    });

    $('.dashboard').on('click', function () {
        $('.dashboard-content').addClass('tab-content_active');
        $('.web-design-content, .apss-content, .branding-content').removeClass('tab-content_active');
    });

    $('.branding').on('click', function () {
        $('.branding-content').addClass('tab-content_active');
        $('.web-design-content, .dashboard-content, .apss-content').removeClass('tab-content_active');
    });



    $(function () {
        $("a[href^='#']").click(function () {
            var _href = $(this).attr("href");
            $("html, body").animate({
                scrollTop: $(_href).offset().top + "px"
            }, function () {
                $('.menu').removeClass('menu-active');
            });
            return false;
        });
    });

    var anchors = [];
    var currentAnchor = -1;
    var isAnimating = false;

    $(function () {

        function updateAnchors() {
            anchors = [];
            $('.anchor').each(function (i, element) {
                anchors.push($(element).offset().top);
            });
        }

        $('body').on('mousewheel', function (e) {
            e.preventDefault();
            e.stopPropagation();
            if (isAnimating) {
                return false;
            }
            isAnimating = true;
            // Increase or reset current anchor
            if (e.originalEvent.wheelDelta >= 0) {
                currentAnchor--;
            } else {
                currentAnchor++;
            }
            if (currentAnchor > (anchors.length - 1) ||
                currentAnchor < 0) {
                currentAnchor = 0;
            }
            isAnimating = true;
            $('html, body').animate({
                scrollTop: parseInt(anchors[currentAnchor])
            }, 500, 'swing', function () {
                isAnimating = false;
            });
        });

        updateAnchors();

    });

});
