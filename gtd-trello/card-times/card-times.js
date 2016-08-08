/************************************************************************
	GTD Trello (Card Links)
*************************************************************************/

function GTD_CardTime(){

      // Look in the card titles
      $(".list-card-title").each(function() {

      var content = $(this).html();
      var regexTime = /:([0-9]+)/ig;
      var thisTime = content.replace(regexTime, "<span class='gtd-time'>$1</span>");

      // Re-write html w/ hyperlinks
      $(this).html(thisTime);

      });

}
