/************************************************************************
	GTD Trello (Board Tabs)
*************************************************************************/


   // Create Tabs
   function GTD_BoardTabs(){

      var   gtdTab   =  ".gtd-trello .board-header";
      var   gtdBG    =  $( "body" ).attr( "style" );

      // Creating...
      $(gtdTab).wrapInner( '<div class="gtd-tab"></div>' );

      // Applying body background color to tab
      $( ".gtd-tab" ).attr("style", gtdBG);
   }
