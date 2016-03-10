/************************************************************************
	GTD Trello (SEPARATOR Layout)
*************************************************************************/

   function GTD_ListProjects(){

      // Add "right" separator class
      $('h2:contains(" (PROJECTS)")').parents('.js-list').addClass('gtd-projects');

      // Remove Text...
      $('h2:contains(" (PROJECTS)")').each(function(){
         $(this).html($(this).html().split(" (PROJECTS)").join(""));
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
