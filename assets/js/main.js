$(document).ready(function () {


  /*testimonial slider */
  $(".ts-items-bx").slick({
    dots: false,
    infinite: true,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 4,
    centerMode: false,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
    arrows: false,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  /* back to top */
  $("#toTop").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 1200);
  });
});

/*sticky header*/
$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 50) {
    $("header.navbar").addClass("darkHeader");
    $(".btnBacktotop").addClass("active");
  } else {
    $("header.navbar").removeClass("darkHeader");
    $(".btnBacktotop").removeClass("active");
  }
});


