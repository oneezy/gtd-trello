/************************************************************************
	GTD Trello (CARD SEPARATORS)
*************************************************************************/

   function GTD_CardSeparators(){

      // Add "right" separator class
      $('.list-card-title:contains("---")').parents('.list-card').addClass('gtd-separator');

      // Remove Text...
      $('.list-card-title:contains("---")').each(function(){
         $(this).html($(this).html().split("---").join(""));
      });

   }
