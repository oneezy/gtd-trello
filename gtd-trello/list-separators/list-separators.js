/************************************************************************
	GTD Trello (SEPARATOR Layout)
*************************************************************************/

   function GTD_ListSeparators(){

      // Add "right" separator class
      $('h2:contains("(SEPARATOR: R)")').parents('.js-list').addClass('gtd-separator-r');

      // Remove Text...
      $('h2:contains("(SEPARATOR: R)")').each(function(){
         $(this).html($(this).html().split(" (SEPARATOR: R)").join(""));
      });
   }
