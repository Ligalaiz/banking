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

$(".owl-carousel").owlCarousel({
  loop: true,
  nav:true,
  dots:false,
  items:4,
  navText: ['',''],
  responsiveClass:true,
    responsive:{
        0:{
            items:1,
            margin:0
        },
        780:{
            items:2,
            margin:10
        },
        992:{
            items:3,
        },
        1170:{
            items:4,
            margin:30
        }
    }
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