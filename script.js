$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      nav: true,
      items: 3,
      margin: 20,
      rtl: true,
      
      responsive:{
        0:{
            items:1
        },
        768:{
            items:1
        }
    }
    });
  });

  AOS.init();