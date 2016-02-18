/************************************************************************
	GTD Trello (Card Totals)
*************************************************************************/


   // Remove the word "cards" from card totals
   function GTD_CardCounts(){
       $('.list-header-num-cards:contains(" cards")').each(function(){
           $(this).html($(this).html().split(" cards").join(""));
       });

     	$('.list-header-num-cards:contains(" card")').each(function(){
           $(this).html($(this).html().split(" card").join(""));
       });
   }
