/************************************************************************
	GTD Trello (List Projects)
*************************************************************************/

   function GTD_ListProjects(){

      // Add "right" separator class
      $('h2:contains("(PROJECTS)")').parents('.js-list').addClass('gtd-projects');

      // Remove Text...
      $('h2:contains("(PROJECTS)")').each(function(){
         $(this).html($(this).html().split("(PROJECTS)").join(""));
      });

   }
