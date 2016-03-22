/************************************************************************
	GTD Trello (Card Heights)
*************************************************************************/


   // Add Card Heights
   function GTD_CardHeights() {

      // Add class
      $( 'h2:contains("(HEIGHT)")' ).parents('.list').addClass('gtd-height');

      // Remove Text...
      $( 'h2:contains("(HEIGHT)")' ).each(function(){
         $(this).html($(this).html().split("(HEIGHT)").join(""));
      });

   }
