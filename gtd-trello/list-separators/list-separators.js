/************************************************************************
	GTD Trello (SEPARATOR Layout)
*************************************************************************/

   function GTD_ListSeparators(){

      // Add "right" separator class
      $('h2:contains("SPACE")').parents('.list-wrapper').addClass('gtd-space');
      $('h2:contains("SPACE-R)")').parents('.list-wrapper').addClass('gtd-spaceright');
      $('h2:contains("SPACE-L")').parents('.list-wrapper').addClass('gtd-spaceleft');

      // Remove Text...
      $('h2:contains("SPACE")').each(function(){
         $(this).html($(this).html().split("(SPACE)").join(""));
      });

      $('h2:contains("SPACE-R")').each(function(){
         $(this).html($(this).html().split("(SPACE-R)").join(""));
      });

      $('h2:contains("(SPACE-L)")').each(function(){
         $(this).html($(this).html().split("(SPACE-L)").join(""));
      });

   }
