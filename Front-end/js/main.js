(function ($) {
    "use strict";
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('nav-sticky');
        } else {
            $('.navbar').removeClass('nav-sticky');
        }
    });
 document.addEventListener("DOMContentLoaded", function () {
  // --- Booking Form ---
  if (window.location.pathname.includes("booking.html")) {
    const form = document.getElementById("bookingForm");

    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();

        const bookingData = {
          name: form.name.value,
          mobile: parseInt(form.mobile.value),
          email: form.email.value,
          date: form.date.value,
          time: form.time.value,
          guests: parseInt(form.guests.value)
        };

        fetch("http://localhost:8080/api/bookings", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(bookingData)
        })
          .then(response => {
            if (!response.ok) {
              throw new Error("Failed to book");
            }
            return response.json();
          })
          .then(() => {
            alert("Booking successful!");
            form.reset();
          })
          .catch(error => {
            console.error("Error:", error);
            alert("Failed to book. Please try again later.");
          });
      });
    }
  }

  // --- Review Form ---
  if (window.location.pathname.includes("contact.html")) {
    const reviewForm = document.getElementById("reviewForm");

    if (reviewForm) {
      reviewForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const reviewData = {
          name: reviewForm.querySelector('[name="name"]').value,
          email: reviewForm.querySelector('[name="email"]').value,
          message: reviewForm.querySelector('[name="message"]').value
        };

        fetch("http://localhost:8080/api/reviews", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(reviewData)
        })
          .then(response => {
            if (!response.ok) {
              throw new Error("Failed to submit review");
            }
            return response.json();
          })
          .then(() => {
            alert("Review submitted successfully!");
            reviewForm.reset();
          })
          .catch(error => {
            console.error("Error:", error);
            alert("Failed to submit review. Please try again later.");
          });
      });
    }
  }
});

    // Load reviews on page load

    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });

    
    // Main carousel
    $(".carousel .owl-carousel").owlCarousel({
        autoplay: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 1,
        smartSpeed: 300,
        dots: false,
        loop: true,
        nav : false
    });
    
    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });
    
    
    // Date and time picker
    $('#date').datetimepicker({
        format: 'L'
    });
    $('#time').datetimepicker({
        format: 'LT'
    });


    // Testimonials carousel
    $(".testimonials-carousel").owlCarousel({
        center: true,
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
    
    // Related post carousel
    $(".related-slider").owlCarousel({
        autoplay: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            }
        }
    });
    
})(jQuery);

