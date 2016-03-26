/************************************************************************
	GTD Trello (Getting things started...)
*************************************************************************/

'use strict';

$(document).ready(function() {

   // Append ".gtd-trello" class to body
   $("body").addClass("gtd-trello");

   // $("body").find(".board-canvas").clone().appendTo(".board-main-content").addClass('gtd-scrum');

   // $('h2:contains("(SCRUM)")').parents('.list-wrapper')
   //    .wrapAll('<div class="u-fancy-scrollbar ui-sortable gtd-scrum" />')
   //    .parents(".board-canvas")
   //    .find('.gtd-scrum')
   //    .appendTo(".board-canvas");


   // Run Functions...
   GTD_BoardTabs();
   GTD_CardCounts();
   GTD_CardLabels();
   GTD_CardSeparators();
   GTD_CardHeights();
   GTD_DueDates();
   GTD_RemoveDates();
   GTD_ListLabels();
   GTD_ListSeparators();
   GTD_ListProjects();
   GTD_LayoutPipes();


   // Listen for user input...
   $('body').mouseup(function(){
      setTimeout(function() {
         GTD_CardCounts();
         GTD_CardLabels();
         GTD_CardSeparators();
         GTD_CardHeights();
         GTD_DueDates();
         GTD_RemoveDates();
         GTD_ListLabels();
         GTD_ListSeparators();
         GTD_ListProjects();
         GTD_LayoutPipes();
      },50);
   });

   $('body').keyup(function(){
      setTimeout(function() {
         GTD_CardCounts();
         GTD_CardLabels();
         GTD_CardSeparators();
         GTD_CardHeights();
         GTD_DueDates();
         GTD_RemoveDates();
         GTD_ListLabels();
         GTD_ListSeparators();
         GTD_ListProjects();
         GTD_LayoutPipes();
      },50);
   });

});
