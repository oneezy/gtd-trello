/************************************************************************
	GTD Trello (Due Dates)
*************************************************************************/


   // Add Due Dates
   function GTD_CardLabels(){

      $( '.list-card-labels .card-label:contains("PRIORITY: 1")' ).hide().parents(".list-card-details").addClass('priority-1');
      $( '.list-card-labels .card-label:contains("PRIORITY: 2")' ).hide().parents(".list-card-details").addClass('priority-2');
      $( '.list-card-labels .card-label:contains("PRIORITY: 3")' ).hide().parents(".list-card-details").addClass('priority-3');
      $( '.list-card-labels .card-label:contains("PRIORITY: 4")' ).hide().parents(".list-card-details").addClass('priority-4');
   }
