/************************************************************************
	GTD Trello (Getting things started...)
*************************************************************************/

'use strict';

$(document).ready(function() {

   // Append ".gtd-trello" class to body
   $("body").addClass("gtd-trello");


   // Run Functions...
   GTD_CardCounts();
   GTD_DueDates();
   GTD_RemoveDates();
   GTD_ListSeparators();
   GTD_LayoutPipes();


   // Listen for user input...
   $('body').mouseup(function(){
      setTimeout(function() {
         GTD_CardCounts();
         GTD_DueDates();
         GTD_RemoveDates();
         GTD_ListSeparators();
      },50);
   });

   $('body').keyup(function(){
      setTimeout(function() {
         GTD_CardCounts();
         GTD_DueDates();
         GTD_RemoveDates();
         GTD_ListSeparators();
      },50);
   });

});
