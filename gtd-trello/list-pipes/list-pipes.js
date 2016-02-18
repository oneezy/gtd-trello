/************************************************************************
	GTD Trello (PIPE Layout)
*************************************************************************/


    function GTD_LayoutPipes(){
        // Add "gtd-pipe" class
        $('h2:contains("(PIPE)")').parents('.js-list').addClass('gtd-pipe');

        // Remove "(PIPE)" text from list titles
        $('h2:contains("(PIPE)")').each(function(){
            $(this).html($(this).html().split(" (PIPE)").join(""));
        });

        // Show "Card Details"
        $( ".gtd-pipe .list-card-cover" ).on( "mouseover", function() {
            var rect 	 =   this.getBoundingClientRect (),
                top 	 =   rect.top,
                right 	 =   rect.right,
                bottom 	 =   rect.bottom,
                left 	 =   rect.left,
                height	 =   rect.bottom - rect.top,
                width 	 =   rect.right - rect.left,
                position =   left + width;

             $(this).parent().find(".list-card-details")
                .clone().appendTo('body')
                .addClass('gtd-active')
                .css({ 'position' : 'fixed', 'top' : top+ 'px', 'left' : position+ 'px' });
        });

        // Remove "Card Details"
        $( '.gtd-pipe .list-card-cover' ).on( "mouseout", function() {
            $('.list-card-details.gtd-active').remove();
        });
    }

    GTD_LayoutPipes();
