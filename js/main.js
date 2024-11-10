$(document).ready(function(){
  $(".slider").owlCarousel({
    items: 1,
    autoplay: false,
  });

  $(".categories-slider").owlCarousel({
    items: 6,
    autoplay: true,
    loop: true,
    margin: 50,
  });

  $(".popular-products-slider").owlCarousel({
    items: 5,
    loop: true,
    autoplay: true,
    margin: 30,
  });

  $(".testimonial-slider").owlCarousel({
    items: 3,
    loop: true,
    autoplay: true,
    margin: 30,
  });

  $(".news-article-slider").owlCarousel({
    items: 4,
    loop: true,
    autoplay: true,
    margin: 25,
  });

  $(".brand-img").owlCarousel({
    items: 7,
    loop: true,
    autoplay: true,
    margin: 50,
  });
});