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


// var app = document.getElementById('app');

// var typewriter = new Typewriter(app, {
//     loop: false,
//     delay: 50
// });

// typewriter.typeString('وين يسهل عليك معرفة وجهتك الجاية من خلال استعراض تفاصيل الفعاليات ومعلوماتها ويمكنك من الحجز والدفع لكل فعالية <strong>بسهولة</strong>.')
//     .start();

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString('A simple yet powerful native javascript')
  .pauseFor(300)
  .deleteChars(10)
  .typeString('<strong>JS</strong> plugin for a cool typewriter effect and ')
  .typeString('<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>')
  .pauseFor(1000)
  .start();