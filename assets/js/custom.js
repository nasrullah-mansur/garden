$(document).ready(function() {
    "use strict";

    // Menu;
    $('.mobile-nav').on('click', function() {
        $('.header .list').slideToggle();
    })

    // Banner design;
    
    let gardenWorksArr = document.querySelectorAll('.banner .slider .slider-item h3, .banner .no-slider h3');
    if(gardenWorksArr.length > 0) {
        Array.from(gardenWorksArr).forEach(element => {
            let zIndex = 999;
            let gardenWorks = [];
            gardenWorksArr = (element.innerText).split('');
            gardenWorksArr.forEach(element => {
                if(element == ' ') {
                    gardenWorks.push(`<span class="space"></span>`);
                } else {
                    gardenWorks.push(`<span style="z-index: ${zIndex--};">${element}</span>`);
                }
            });
            element.innerHTML = gardenWorks.join('');
        })
    }

    $('.banner .slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<button type="button" class="slick-prev"><img src="assets/images/arrow.png" alt="arrow"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="assets/images/arrow.png" alt="arrow"></button>'
      });

    $('.cleaning .cleaning-slide').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="assets/images/arrow.png" alt="arrow"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="assets/images/arrow.png" alt="arrow"></button>'
      });

    $('.service .slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        variableWidth: true
    });

    $('.service .slider .img').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
    });

    $('.latest-work .slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        centerMode: true,
        responsive: [
            {
              breakpoint: 1199.98,
              settings: {
                slidesToShow: 4,
              }
            },
            {
              breakpoint: 991.98,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 767.98,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 575.98,
              settings: {
                slidesToShow: 1,
              }
            }
          ]
    });

    $('.testimonial .slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        variableWidth: true
    });


    if($('.bordered-title').length > 0) {
        let offsetLeft = $('.bordered-title .title h2 > span');

        Array.from(offsetLeft).forEach(element => {

            let leftOffset = element.offsetLeft + element.offsetWidth;
            let borderLine = element.parentElement.parentElement.querySelector('.border-line');
            borderLine.style.cssText = `width: ${leftOffset}px`;
        })
    }


    let allSlickBtns = document.querySelectorAll('.slick-dots button');
    Array.from(allSlickBtns).forEach(element => {
        let text = Number(element.innerText);
        if(text < 9) {
            element.innerHTML = '0' + text;
        }
    })

    $(window).on('scroll', function() {
        let scrollTop = $(this).scrollTop();

        if(scrollTop > 100) {
            $('.header').addClass('fixed');
        } else {
            $('.header').removeClass('fixed');
        }
    })



});