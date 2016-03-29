/************************************************************************
	GTD Trello (Card Labels)
*************************************************************************/


   // Creating Card Labels
   function GTD_CardLabels(){

      // Add Priority
      $( '.list-card-labels .card-label:contains("PRIORITY: 1")' ).hide().parents(".list-card-details").addClass('priority-1');
      $( '.list-card-labels .card-label:contains("PRIORITY: 2")' ).hide().parents(".list-card-details").addClass('priority-2');
      $( '.list-card-labels .card-label:contains("PRIORITY: 3")' ).hide().parents(".list-card-details").addClass('priority-3');
      $( '.list-card-labels .card-label:contains("PRIORITY: 4")' ).hide().parents(".list-card-details").addClass('priority-4');

      // Add Status
      $( '.list-card-labels .card-label:contains("STATUS: BACKLOG")' ).hide().parents(".list-card").addClass('gtd-backlog');
      $( '.list-card-labels .card-label:contains("STATUS: NEW")' ).hide().parents(".list-card").addClass('gtd-new');
      $( '.list-card-labels .card-label:contains("STATUS: DOING")' ).hide().parents(".list-card").addClass('gtd-doing');
      $( '.list-card-labels .card-label:contains("STATUS: TESTING")' ).hide().parents(".list-card").addClass('gtd-testing');
      $( '.list-card-labels .card-label:contains("STATUS: READY")' ).hide().parents(".list-card").addClass('gtd-ready');
      $( '.list-card-labels .card-label:contains("STATUS: DONE")' ).hide().parents(".list-card").addClass('gtd-done');
      $( '.list-card-labels .card-label:contains("STATUS: PROBLEM")' ).hide().parents(".list-card").addClass('gtd-problem');
      $( '.list-card-labels .card-label:contains("STATUS: BLOCKED")' ).hide().parents(".list-card").addClass('gtd-blocked');
      $( '.list-card-labels .card-label:contains("STATUS: STAGE")' ).hide().parents(".list-card").addClass('gtd-staging');
      $( '.list-card-labels .card-label:contains("STATUS: LIVE")' ).hide().parents(".list-card").addClass('gtd-live');

   }
