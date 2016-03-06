/************************************************************************
	GTD Trello (SEPARATOR Layout)
*************************************************************************/

   function GTD_ListSeparators(){

      // Add "right" separator class
      $('h2:contains(" (SEPARATOR)")').parents('.js-list').addClass('gtd-separator');

      // Remove Text...
      $('h2:contains(" (SEPARATOR)")').each(function(){
         $(this).html($(this).html().split(" (SEPARATOR)").join(""));
      });

      // Style placeholder
      // var gangsta = $('.gtd-separator').attr('class');

      // $('body').on('mousedown', '.gtd-separator', function() {
      //    $('body').addClass('gangsta');
      // });

      // $('body').on('mousedown', '.gtd-separator', function() {
      //    $(this).addClass('gangsta');
      // });

   }
