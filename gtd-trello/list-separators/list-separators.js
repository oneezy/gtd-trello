/************************************************************************
	GTD Trello (SEPARATOR Layout)
*************************************************************************/

   function GTD_ListSeparators(){

      // Add "right" separator class
      $('h2:contains("SPACE")').parents('.list-wrapper').addClass('gtd-space');
      $('h2:contains("SPACE RIGHT)")').parents('.list-wrapper').addClass('gtd-spaceright');
      $('h2:contains("SPACE LEFT")').parents('.list-wrapper').addClass('gtd-spaceleft');

      // Remove Text...
      $('h2:contains("SPACE")').each(function(){
         $(this).html($(this).html().split("(SPACE)").join(""));
      });

      $('h2:contains("SPACE RIGHT")').each(function(){
         $(this).html($(this).html().split("(SPACE RIGHT)").join(""));
      });

      $('h2:contains("(SPACE LEFT)")').each(function(){
         $(this).html($(this).html().split("(SPACE LEFT)").join(""));
      });

   }
