"use strict";
$(document).ready(function(){

  var open = document.querySelector(".main-header__toggle--open");
  var close = document.querySelector(".main-header__toggle--close");
  var create = document.querySelector(".main-nav__btn");
  var menu = document.querySelector(".main-nav");


  if (open) {
    open.addEventListener ("click", function(evt) {
      evt.preventDefault();
      menu.classList.remove("close");
      menu.classList.add("show");
      close.classList.remove("close");
      close.classList.add("show");
      open.classList.remove("show");
      open.classList.add("close");
      create.classList.remove("close");
      create.classList.add("show");
    });
  }

  if (close) {
    close.addEventListener("click", function(evt) {
      evt.preventDefault();
      menu.classList.remove("show");
      menu.classList.add("close");
      close.classList.remove("show");
      close.classList.add("close");
      open.classList.remove("close");
      open.classList.add("show");
      create.classList.remove("show");
      create.classList.add("close");
    });
  }

  if (window) {
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (menu.classList.contains("show")) {
        evt.preventDefault();
        menu.classList.remove("show");
        menu.classList.add("close");
        close.classList.remove("show");
        close.classList.add("close");
        open.classList.remove("close");
        open.classList.add("show");
        create.classList.remove("show");
        create.classList.add("close");
      }
    }
  });
  }

    $(".slide-one").owlCarousel({
      loop: true,
      navText: ['',''],
      responsiveClass:true,
        responsive:{
            0:{
                items:1,
                margin:0,
                dots:true
            },
            600:{
                items:2,
                margin:10,
                dots:true
            },
            992:{
                items:3,
                dots:true
            },
            1170:{
                items:4,
                margin:30,
                dots:true
            },
            1290:{
                items:4,
                margin:30.1,
                dots:true
            },
            1352:{
                items:4,
                margin:30.1,
                dots:false,
                nav:true
            }
        }
    });

    $(".slide-two").owlCarousel({
      loop: true,
      navText: ['',''],
      responsiveClass:true,
        responsive:{
          0:{
              items:1,
              dots:true,
              margin:0
          },
          600:{
              items:2,
              dots:true,
              loop: true,
              margin:10
          },
          992:{
              items:2,
              dots:true,
              margin: 70,
              nav:false
          },
          1170:{
              items:2,
              dots:true,
              margin: 67,
              nav:false,
              stagePadding:15
          },
          1600:{
              items:2,
              dots:false,
              margin: 65,
              nav:true,
              stagePadding:13
          }
        }
    });
});

$( function() {
  $( "#tabs" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
  $( "#tabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
});


$( function() {
  var icons = {
    header: "ui-icon-circle-arrow-e",
    activeHeader: "ui-icon-circle-arrow-s"
  };
  $( "#accordion" ).accordion({
    icons: icons
  });
  $( "#toggle" ).button().on( "click", function() {
    if ( $( "#accordion" ).accordion( "option", "icons" ) ) {
      $( "#accordion" ).accordion( "option", "icons", null );
    } else {
      $( "#accordion" ).accordion( "option", "icons", icons );
    }
  });
});
