

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
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    }


    // Open the full screen search box
    function openSearch() {
      document.getElementById("myOverlay").style.display = "block";
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

  $(document).ready(function(){
    // Add smooth scrolling to all links
    $("#section1").on('click', function(event) {

      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){

          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });
