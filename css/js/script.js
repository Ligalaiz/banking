"use strict";
$('[data-fancybox]').fancybox({
    smallBtn: "false",
    buttons: [
        "close"
      ],
    touch: {
      vertical: false,
      momentum: false
    }
});

$(document).ready(function(){
    $(".slide-one").owlCarousel({
      loop: true,
      dots:false,
      navText: ['',''],
      responsiveClass:true,
        responsive:{
            0:{
                items:1,
                margin:0
            },
            600:{
                items:2,
                margin:10
            },
            992:{
                items:3,
            },
            1170:{
                items:4,
                margin:30
            },
            1290:{
                items:4,
                nav:true
            }
        }
    });

    $(".slide-two").owlCarousel({
      loop: true,
      dots:false,
      navText: ['',''],
      responsiveClass:true,
        responsive:{
          0:{
              items:1,
              margin:0
          },
          600:{
              items:2,
              margin:10
          },
          1170:{
              items:2,
              margin: 70
          },
          1200:{
              items:3,
              margin: 20,
              nav:true
          },
          1476:{
              items:2,
              margin: 70,
              stagePadding: 343,
              nav:true
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
    } );
