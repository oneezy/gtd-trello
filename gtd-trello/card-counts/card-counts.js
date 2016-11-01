/************************************************************************
	GTD Trello (Card Totals)
*************************************************************************/



   function GTD_CardCounts(){

      // Remove the word " cards" and " card" from card totals
       $('.list-header-num-cards:contains(" cards")').each(function(){
           $(this).html($(this).html().split(" cards").join(""));
       });

     	$('.list-header-num-cards:contains(" card")').each(function(){
           $(this).html($(this).html().split(" card").join(""));
       });


      // Delete the card counts
      /*
      $(".gtd-cardcount").remove();
      */

      // Re-write the card counts!

      /*
      $(".gtd-trello .list.gtd-blue .list-card").not(".gtd-separator").each(function(i) {

         $(this).find(".card-short-id").after("<span class='gtd-cardcount'></span>");
         $(this).find(".gtd-cardcount").text(++i);

      });
      */
   }
