

$('.owl-carousel').owlCarousel({
dots: false,
  lazyLoad: true,
  lazyLoadEager:true,
  rtl:true,
  nav:true,
  smartSpeed :900,
  navText : ["<i class='fas fa-arrow-right'></i>", "<i class='fas fa-arrow-left'></i>"],
  lazyLoad:true,
  autoHeight: true,
    loop:false,
    margin:10,
    autoplay:false,
  autoplayTimeout:6000,
  autoplayHoverPause:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

// timer

const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let countDown = new Date('Sep 30, 2019 00:00:00').getTime(),
    x = setInterval(function() {

      let now = new Date().getTime(),
          distance = countDown - now;

      document.getElementById('days').innerText = Math.floor(distance / (day)),
        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

      //do something later when date is reached
      //if (distance < 0) {
      //  clearInterval(x);
      //  'IT'S MY BIRTHDAY!;
      //}

    }, second)


// handle clickable cart

    function cartFunc() {
      var x = document.getElementById("carter");

      if (x.style.display !== "block") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    }


    // Open the full screen search box
    function openSearch() {
      document.getElementById("myOverlay").style.display = "block";
      console.log('shit');
    }

    // Close the full screen search box
    function closeSearch() {
      document.getElementById("myOverlay").style.display = "none";
    }


    // hide guide

    $(window).scroll(function() {
    if ($(this).scrollTop() > 1) { //use `this`, not `document`
        $('.fixedelement').css({
            'display': 'none'
        });
    }
});


  // scroller Smooth
  $(".section1").click(function() {
      $('html,body').animate({
          scrollTop: $(".section2").offset().top},
          'slow');
  });


  // scroll to top


  //Get the button:
  mybutton = document.getElementById("scrltp");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  // like button


      function likeColor() {
        var likeb = document.getElementById("likeButt");

        if (likeb.style.color !== "red") {
          likeb.style.color = "red";
        } else {
          likeb.style.color = "black";
        }
      }


      //toggle kanoonbook



document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.querySelector('input[type="checkbox"]');
  document.getElementById('usernamelog').innerHTML = 'نام کاربری';
  document.getElementById('passwordlog').innerHTML='رمز عبور';

  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      document.getElementById('usernamelog').innerHTML='شمارنده کانونی';
      document.getElementById('passwordlog').innerHTML='رمز عبور(کدملی)';

    } else {
      document.getElementById('usernamelog').innerHTML='نام کاربری';
      document.getElementById('passwordlog').innerHTML='رمز عبور';

    }
  });
});
