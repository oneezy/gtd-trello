'use strict';

$(document).ready(function() {

/*
Explaination of what this does:
So the way they more than likely do it is dynamically insert their popup menu and append it to the list so on click it will create your popup, and append it to the list.
Then it will check for the classes and check the appropriate radio button.  I used the css content property to add the gears to the button so when it is active there will
be an x where the button is.  You can change this in the css.  When the x is clicked then it removes the active class and removes the popup window.
*/

/************************************************************************
	GTD Trello (defaults)
*************************************************************************/
    // Append ".gtd-trello" class to body
    $("body").addClass("gtd-trello");


/************************************************************************
	GTD Trello (Card Totals)
*************************************************************************/
    // Remove "cards" from card totals
    $('.list-header-num-cards:contains(" cards")').each(function(){
        $(this).html($(this).html().split(" cards").join(""));
    });

  	$('.list-header-num-cards:contains(" card")').each(function(){
        $(this).html($(this).html().split(" card").join(""));
    });


/************************************************************************
	GTD Trello (PIPE Layout)
*************************************************************************/
    // Add "gtd-pipe" class
    $('h2:contains("(PIPE)")').parents('.js-list').addClass('gtd-pipe');

    // Remove "(PIPE)" text from list titles
    $('h2:contains("(PIPE)")').each(function(){
        $(this).html($(this).html().split(" (PIPE)").join(""));
    });


    // Show "Card Details"
    $( ".gtd-pipe .list-card-cover" ).on( "mouseover", function() {
        var rect 	    =   this.getBoundingClientRect (),
            top 	    =   rect.top,
            right 	 =   rect.right,
            bottom 	 =   rect.bottom,
            left 	    =   rect.left,
            height	 =   rect.bottom - rect.top,
            width 	 =   rect.right - rect.left,
            position  =   left + width;

         $(this).parent().find(".list-card-details")
            .clone().appendTo('body')
            .addClass('gtd-active')
            .css({ 'position' : 'fixed', 'top' : top+ 'px', 'left' : position+ 'px' });
    });

    // Remove "Card Details"
    $( '.gtd-pipe .list-card-cover' ).on( "mouseout", function() {
        $('.list-card-details.gtd-active').remove();
    });



});
