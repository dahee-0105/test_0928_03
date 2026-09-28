$(document).ready(function(){ //시작

  $("header .depth2").hide();

  $("header .gnb > li").hover(function(){

    $(this).children(".depth2").stop().slideToggle()

  });

  $(".ham").click(function(){

    $(".mgnb-wrap").animate({"right" : "0"});

  });

  $(".mgnb-close").click(function(){

    $(".mgnb-wrap").animate({"right" : "-100%"});

  });

  $(".mdepth2").hide();

  $(".mgnb > li").click(function(){

    if($(this).children(".mdepth2").css("display") == "none"){

      $(this).children(".mdepth2").slideDown();

      $(this).siblings().children(".mdepth2").slideUp();

    }
    else{

      $(this).children(".mdepth2").slideUp();

    }

  });

  const banner_list = new Swiper('.banner-list',{

    loop : true,

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
  },

    speed : 2000,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },

    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar', // 하단 줄 바
  },

  });

  const menu_list = new Swiper(".menu-list",{

    autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

    loop : true,

    speed : 1000,

    centeredSlides : true, //loop : true 와 사용하면 종종 버그가 날수 있음.

    //모바일
slidesPerView : 1.5,
spaceBetween : 10,

breakpoints: {
  768: { //768이상
    slidesPerView: 2.5,
  },
  1200: { //1200이상
    slidesPerView: 4,
  },
},

  });

  AOS.init();

}); //끝