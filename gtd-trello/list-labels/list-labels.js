/************************************************************************
	GTD Trello (Due Dates)
*************************************************************************/


   // Add Due Dates
   function GTD_ListLabels() {

      // Add class
      $( 'h2:contains(" (SCRUM: Backlog)")' ).parents('.list').addClass('gtd-backlog');
      $( 'h2:contains(" (SCRUM: To Do)")' ).parents('.list').addClass('gtd-todo');
      $( 'h2:contains(" (SCRUM: Doing)")' ).parents('.list').addClass('gtd-doing');
      $( 'h2:contains(" (SCRUM: Done)")' ).parents('.list').addClass('gtd-done');
      $( 'h2:contains(" (SCRUM: Blocked)")' ).parents('.list').addClass('gtd-blocked');

      // Remove Text...
      $( 'h2:contains(" (SCRUM: Backlog)")' ).each(function(){
         $(this).html($(this).html().split(" (SCRUM: Backlog)").join(""));
      });

      $( 'h2:contains(" (SCRUM: To Do)")' ).each(function(){
         $(this).html($(this).html().split(" (SCRUM: To Do)").join(""));
      });

      $( 'h2:contains(" (SCRUM: Doing)")' ).each(function(){
         $(this).html($(this).html().split(" (SCRUM: Doing)").join(""));
      });

      $( 'h2:contains(" (SCRUM: Done)")' ).each(function(){
         $(this).html($(this).html().split(" (SCRUM: Done)").join(""));
      });

      $( 'h2:contains(" (SCRUM: Blocked)")' ).each(function(){
         $(this).html($(this).html().split(" (SCRUM: Blocked)").join(""));
      });


   }
