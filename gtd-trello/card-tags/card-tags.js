/************************************************************************
	GTD Trello (Card Tags)
*************************************************************************/

function GTD_CardTag(){

      // Look through content...
      $(".list-card-title").each(function() {

            var content = $(this).html();
            var regexTag  = /#([a-zA-Z]+)/ig;
            var thisTag  = content.replace(regexTag, "<span class='gtd-tag'>$1</span>");

            // Re-write html w/ hyperlinks
            $(this).html(thisTag);

      });

}
