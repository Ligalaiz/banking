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
  nav:true,
  dots:false,
  items: 1,
  onChanged: itemCount,
  onChange: itemsCount,
  navText: ['','']
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
