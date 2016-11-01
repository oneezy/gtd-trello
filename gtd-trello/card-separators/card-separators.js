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




      // TEMP
      // TEMP
      // TEMP

      // Add separator "back" class
      //      $('.gtd-trello .checklist-item-details-text:contains("---")').parents('.checklist-item').addClass('gtd-separator-back');

      // Remove Text...
        //   $('.gtd-trello .checklist-item-details-text:contains("---")').each(function(){
        //      $(this).html($(this).html().split("---").join(""));
        //   });



      // TEMP
      // TEMP
      // TEMP

      // Add bold "back" class
      //      $('.gtd-trello .checklist-item-details-text:contains("* ")').parents('.checklist-item *').addClass('gtd-separator-priority');

      // Remove Text...
        //   $('.gtd-trello .checklist-item-details-text:contains("* ")').each(function(){
        //      $(this).html($(this).html().split("* ").join(""));
        //   });

   }
