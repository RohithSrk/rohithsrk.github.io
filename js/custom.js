$(function() {
    "use strict";
    var s = $(window);
    $('a[href*="#"]:not([href="#"])').on("click", function() {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") || location.hostname == this.hostname) {
            var a = $(this.hash);
            if ((a = a.length ? a : $("[name=" + this.hash.slice(1) + "]")).length) return $("html,body").animate({
                scrollTop: a.offset().top - 75
            }, 1e3), !1
        }
    }), s.on("scroll", function() {
        var a = s.scrollTop(),
            t = $(".navbar");
        200 < a ? (t.addClass("nav-scroll"), $(".navbar-brand img").attr("src", "img/logo.png")) : (t.removeClass("nav-scroll"), $(".navbar-brand img").attr("src", "img/logo-2.png"))
    }), $(".cover-bg").each(function() {
        var a = $(this).attr("data-image-src");
        void 0 !== a && !1 !== a && $(this).css("background-image", "url(" + a + ")")
    }), s.on("scroll", function() {
        $(".bar span").each(function() {
            var a = $(this).offset().top + $(this).outerHeight(),
                t = $(window).scrollTop() + $(window).height(),
                s = $(this).attr("data-width");
            a < t && $(this).css({
                width: s
            })
        })
    });
    var t = !0;
    s.on("scroll", function() {
        var a = s.scrollTop();
        $(".services").offset().top - 700 <= a && t && ($(".svg-icon").each(function() {
            $(".svg-icon").drawsvg({
                duration: 4e3
            }).drawsvg("animate")
        }), t = !1)
    }), $(".testimonial .carousel-slick").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: !0,
        dots: !0,
        autoplaySpeed: 2e3,
        responsive: [{
            breakpoint: 991,
            settings: {
                arrows: !1,
                centerMode: !0,
                centerPadding: "5px",
                slidesToShow: 1,
                dots: !0
            }
        }]
    }), $(".about .box-text .owl-carousel").owlCarousel({
        loop: !0,
        items: 1,
        margin: 30,
        dots: !1,
        nav: !0,
        navText: ['<span> <i class="jam jam-arrow-left"></i> </span>', '<span> <i class="jam jam-arrow-right"></i> </span>']
    }), $(".services .owl-carousel").owlCarousel({
        loop: !0,
        items: 3,
        margin: 30,
        dots: !1,
        nav: !0,
        navText: ['<span> <i class="jam jam-arrow-left"></i> </span>', '<span> <i class="jam jam-arrow-right"></i> </span>'],
        responsiveClass: !0,
        responsive: {
            0: {
                items: 1
            },
            991: {
                items: 3
            }
        }
    }), $("#contact-form").validator(), $("#contact-form").on("submit", function(a) {
        if (!a.isDefaultPrevented()) {
            return $.ajax({
                type: "POST",
                url: "contact.php",
                data: $(this).serialize(),
                success: function(a) {
                    var t = "alert-" + a.type,
                        s = a.message,
                        o = '<div class="alert ' + t + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + s + "</div>";
                    t && s && ($("#contact-form").find(".messages").html(o), $("#contact-form")[0].reset())
                }
            }), !1
        }
    })
}), $(window).on("load", function() {
    $("#preloader").fadeOut(1000);

    $(function() {

        $("#typed").typed({
            // strings: ["Typed.js is a <strong>jQuery</strong> plugin.", "It <em>types</em> out sentences.", "And then deletes them.", "Try it out!"],
            stringsElement: $('#typed-strings'),
            typeSpeed: 30,
            backDelay: 500,
            loop: true,
            contentType: 'html', // or text
            // defaults to false for infinite loop
            loopCount: false,
            callback: function() {
                foo();
            },
            resetCallback: function() {
                newTyped();
            }
        });

        $(".reset").click(function() {
            $("#typed").typed('reset');
        });

    });

    $(".reset").click(function() {
        $("#typedIcons").typed('reset');
    });


    function newTyped() { /* A new typed object */ }

    function foo() {
        console.log("Callback");
    }

    function newTyped() { /* A new typed object */ }

    var t = $(".gallery").isotope({});
    $(".gallery").isotope({
        itemSelector: ".item-img",
        transitionDuration: "0.5s"
    }), $(".gallery .single-image").fancybox({
        transitionIn: "elastic",
        transitionOut: "elastic",
        speedIn: 600,
        speedOut: 200,
        overlayShow: !1
    }), $(".filtering").on("click", "button", function() {
        var a = $(this).attr("data-filter");
        t.isotope({
            filter: a
        })
    }), $(".filtering").on("click", "button", function() {
        $(this).addClass("active").siblings().removeClass("active")
    })
});
