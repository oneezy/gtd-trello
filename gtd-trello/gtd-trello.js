/************************************************************************
	GTD Trello (Getting things started...)
*************************************************************************/

'use strict';

$(document).ready(function() {

    // Append ".gtd-trello" class to body
    $("body").addClass("gtd-trello");

    // Run Functions...
    GTD_BoardTabs();
    GTD_CardBadges();
    GTD_CardCounts();
    GTD_CardLabels();
    // GTD_CardTime();
    // GTD_CardTag();
     GTD_CardLinks();
    GTD_CardSeparators();
    GTD_CardHeights();
    GTD_DueDates();
    GTD_RemoveDates();
    GTD_ListDirectory();
    GTD_ListLabels();
    GTD_ListSeparators();
    GTD_ListProjects();
    GTD_LayoutPipes();


    // Listen for user input...
    $('body').mouseup(function() {
        setTimeout(function() {
            GTD_CardCounts();
            GTD_CardLabels();
            // GTD_CardLinks();
            GTD_CardSeparators();
            GTD_CardHeights();
            GTD_DueDates();
            GTD_RemoveDates();
            GTD_ListLabels();
            GTD_ListSeparators();
            GTD_ListProjects();
            GTD_LayoutPipes();
        }, 20);
    });

    $('body').keyup(function() {
        setTimeout(function() {
            GTD_CardCounts();
            GTD_CardLabels();
            // GTD_CardTime();
            // GTD_CardTag();
            //  GTD_CardLinks();
            GTD_CardSeparators();
            GTD_CardHeights();
            GTD_DueDates();
            GTD_RemoveDates();
            GTD_ListLabels();
            GTD_ListSeparators();
            GTD_ListProjects();
            GTD_LayoutPipes();
        }, 20);
    });

});

$(document).ready(function() {
    setTimeout(function() {
        GTD_CardCounts();
        GTD_ListDirectory();
    }, 500);
});