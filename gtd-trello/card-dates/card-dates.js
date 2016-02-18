/************************************************************************
	GTD Trello (Due Dates)
*************************************************************************/


   // Add Due Dates
   function GTD_DueDates(){
       $('.badges').each(function (){
         if($(this).children('.badge').hasClass("is-due-past"))
            {
               $(this).parents('.list-card').addClass('is-due-past');
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

   // Remove Due Dates
   function GTD_RemoveDates(){
      $( ".remove-date" ).on( "click", function() {
           $(this).parent().find(".list-card-details")
              .clone().appendTo('body')
              .addClass('gtd-active')
              .css({ 'position' : 'fixed', 'top' : top+ 'px', 'left' : position+ 'px' });
      });
   }
