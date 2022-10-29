$ = jQuery
jQuery(document).ready(function () {


  /* body add-class */
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 150) {
      $("body").addClass("sticky-header");
    } else {
      $("body").removeClass("sticky-header");
    }
  });

  jQuery('.menu-top-menu-container').meanmenu({
    meanMenuContainer: '.main-navigation',
    meanScreenWidth: "991",
    meanRevealPosition: "right",
  });


  /* back-to-top button*/

  $('.back-to-top').hide();
  $('.back-to-top').on("click", function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 'slow');
  });
  $(window).scroll(function () {
    var scrollheight = 900;
    if ($(window).scrollTop() > scrollheight) {
      $('.back-to-top').fadeIn();

    } else {
      $('.back-to-top').fadeOut();
    }
  });



  $(window).scroll(function () {
    var scrollPos = $(document).scrollTop();
    scrollPos = scrollPos + 100;
    $('#site-navigation a').each(function () {
      var currLink = $(this);
      var refElement = currLink.attr("href");
      /*check hash value exist*/
      if (refElement.indexOf('#') == "-1") {
        return;
      }
      refElement = '#' + refElement.substring(refElement.indexOf('#') + 1);
      refElement = $(refElement);
      // var refElement = $(currLink.attr("href"));

      /*check hash id exist*/
      if (!refElement.length) {
        return;
      }
      if (refElement.offset().top <= scrollPos && refElement.offset().top + refElement.outerHeight() > scrollPos) {
        $('#site-navigation ul li a').removeClass("active");
        currLink.closest('li').addClass('active');
      } else {
        currLink.closest('li').removeClass('active');
      }
    });
  });


  $('.navigation ul li a')
    .click(function (e) {

      if (!$(this).is('.mean-expand')) {
        $(".main section")
          .removeClass(" ");
        $(this)
          .parent()
          .parent()
          .parent()
          .removeClass('in');

        if ($(window).width() < 992) {
          $('.meanclose').trigger('click');
        }

        var hashValue = $(this).attr('href').split('#')[1];
        if ((hashValue).length) {
          e.preventDefault();

          if (!$('#' + hashValue).length) {
            window.location.href = $(this).attr('href');
          }

          var topPosition = $('#' + hashValue).offset().top;
          $('html, body').animate({
            scrollTop: topPosition - 35
          }, 800);
        }
      }

    });


});