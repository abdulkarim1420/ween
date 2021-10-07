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


  $(function() {
    $("li").click(function() {
      // remove classes from all
      $("li").removeClass("current");
      // add class to the one we clicked
      $(this).addClass("current");
    });
  });


// var app = document.getElementById('app');

// var typewriter = new Typewriter(app, {
//   loop: false,
//   delay: 50,
// });

// typewriter
//   .typeString('وين يسهل عليك معرفة وجهتك الجاية من خلال استعراض تفاصيل الفعاليات ومعلوماتها ويمكنك من الحجز والدفع لكل فعالية <strong>بسهولة</strong>.')
//   .start();


$('#typewriteText').typewrite({
  actions: [
      {speed: 15},
      {type: 'وين يسهل عليك معرفة وجهتك الجاية من خلال استعراض تفاصيل الفعاليات ومعلوماتها ويمكنك من الحجز والدفع لكل فعالية <strong>بسهولة</strong>.'}
  ]
});
