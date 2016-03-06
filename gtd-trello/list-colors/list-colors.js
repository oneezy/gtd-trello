/************************************************************************
	GTD Trello (Due Dates)
*************************************************************************/


   // Add Due Dates
   function GTD_ListColors() {

      // Create colors
      var   white    = '#ffffff',
            blue     = '#00c2e0',
            yellow   = '#e6c60d',
            green    = '#51e898',
            gray     = '#c4c9cc',
            black    = '#000000';


      // Apply colors
      $('.list').each(function (){
       if($(this).hasClass("gtd-backlog"))
           {
              $(this).find('.list-card-details').addClass('gangsta');
           }

       else if($(this).children('.badge').hasClass("is-due-now"))
           {
              $(this).parents('.list-card').addClass('is-due-now');
           }

       else if($(this).children('.badge').hasClass("is-due-soon"))
           {
              $(this).parents('.list-card').addClass('is-due-soon');
           }

       else if($(this).children('.badge').hasClass("is-due-future"))
           {
              $(this).parents('.list-card').addClass('is-due-future');
           }
      });

   }
