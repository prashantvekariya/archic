$(document).ready(function () {

  $('#slider1').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    items: 1,
    dots: false,
    navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>']

  })
  new WOW().init();
  var owl = $('#slider1');
  owl.owlCarousel();
  // Listen to owl events:
  owl.on('changed.owl.carousel', function (event) {
    new WOW().init();
  })


  $('#slider2').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    items: 3,
    merge: true,
    nav: false,
    dots: false,
    margin: 30,
    responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:3
      }
  }


  })




  // ==mob menu===//

  $(document).ready(function () {
    $('.mob_sub_menu').hide()
    $('.mob_menu').hide()
    $('.mob_peta_menu').hide()

    $('.toggle').click(function () {
      $('.mob_menu').slideToggle()
      $('.toggle i').toggleClass('fa-bars fa-xmark')
    })
    $('.mob_menu li a').click(function () {
      $(this).next('.mob_sub_menu').slideToggle()
      $(this).next('.mob_peta_menu').slideToggle()
    })


    $(window).scroll(function () {
      h = $(window).scrollTop();
      if (h > 200) {
        $('header').addClass('sticky');
        $('.fix_icon').fadeIn(500);
      }
      else {
        $('header').removeClass('sticky');
        $('.fix_icon').fadeOut(100);
      }
    })

    $('.fix_icon').click(function () {
      $('html,body').animate({ scrollTop: 0 }, 1000);
    })
  })
  setInterval(function(){
    $('#loder').fadeOut()
  },1000)

  $('#form').submit(function () {

    var name = $('#name').val();


    if (name == "") {
      $('#name').next('#err').text('please fill out this field').css('color', 'red')
      return false;
    }
    
  })
})
