/************************************************************************
	GTD Trello (DIRECTORY Layout)
*************************************************************************/

   function GTD_ListDirectory(){

      // Add "right" separator class
      $('h2:contains("(DIRECTORY)")').parents('.list-wrapper').addClass('gtd-directory');

      // Remove Text...
      $('h2:contains("(DIRECTORY)")').each(function(){
         $(this).html($(this).html().split("(DIRECTORY)").join(""));
      });



      // Replace "Hyperlink" Text...
      $(".gtd-directory .open-card-composer").text( "Add folder ../ or file ." )

      var allFiles   = ' gtd-file gtd-file-1 gtd-file-2 gtd-file-3 gtd-file-4 ';
      var allFolders = ' gtd-folder gtd-folder-1 gtd-folder-2 gtd-folder-3 gtd-folder-4 ';
      var allRoot = ' gtd-root ';

      var removeAll = 'gtd-root gtd-file gtd-file-1 gtd-file-2 gtd-file-3 gtd-file-4 gtd-folder gtd-folder-1 gtd-folder-2 gtd-folder-3 gtd-folder-4';

      // Creating "file" if nothing specified
    //   $('.gtd-directory .list-card-title:contains("")').parents('.list-card').removeClass(removeAll).addClass('gtd-file gtd-file-1');

      // Add "folder" classes
      $('.gtd-directory .list-card-title:contains("/ ")').parents('.list-card').removeClass(removeAll).addClass('gtd-root');
      $('.gtd-directory .list-card-title:contains("./ ")').parents('.list-card').removeClass(removeAll).addClass('gtd-folder');
      $('.gtd-directory .list-card-title:contains("../ ")').parents('.list-card').removeClass(removeAll).addClass('gtd-folder gtd-folder-1 gtd-line');
      $('.gtd-directory .list-card-title:contains("../../ ")').parents('.list-card').removeClass(removeAll).addClass('gtd-folder gtd-folder-2 gtd-line');
      $('.gtd-directory .list-card-title:contains("../../../ ")').parents('.list-card').removeClass(removeAll).addClass('gtd-folder gtd-folder-3 gtd-line');
      $('.gtd-directory .list-card-title:contains("../../../../ ")').parents('.list-card').removeClass(removeAll).addClass('gtd-folder gtd-folder-4 gtd-line');

      // Add "file" classes
      $('.gtd-directory .list-card-title:contains(". ")').parents('.list-card').removeClass(removeAll).addClass('gtd-file gtd-file-1');
      $('.gtd-directory .list-card-title:contains(".. ")').parents('.list-card').removeClass(removeAll).addClass('gtd-file gtd-file-2');
      $('.gtd-directory .list-card-title:contains("... ")').parents('.list-card').removeClass(removeAll).addClass('gtd-file gtd-file-3');
      $('.gtd-directory .list-card-title:contains(".... ")').parents('.list-card').removeClass(removeAll).addClass('gtd-file gtd-file-4');

      // Add "depends on" classes
      $('.gtd-directory .list-card-title:contains(".! ")').parents('.list-card').removeClass(removeAll).addClass('gtd-file gtd-file-1 depends-on');
      $('.gtd-directory .list-card-title:contains("..! ")').parents('.list-card').removeClass(removeAll).addClass('gtd-file gtd-file-2 depends-on');
      $('.gtd-directory .list-card-title:contains("...! ")').parents('.list-card').removeClass(removeAll).addClass('gtd-file gtd-file-3 depends-on');
      $('.gtd-directory .list-card-title:contains("....! ")').parents('.list-card').removeClass(removeAll).addClass('gtd-file gtd-file-4 depends-on');

      // Add "star" classes
      $('.gtd-directory .list-card-title:contains(".* ")').parents('.list-card').removeClass(removeAll).addClass('gtd-file gtd-file-1 star');
      $('.gtd-directory .list-card-title:contains("..* ")').parents('.list-card').removeClass(removeAll).addClass('gtd-file gtd-file-2 star');
      $('.gtd-directory .list-card-title:contains("...* ")').parents('.list-card').removeClass(removeAll).addClass('gtd-file gtd-file-3 star');
      $('.gtd-directory .list-card-title:contains("....* ")').parents('.list-card').removeClass(removeAll).addClass('gtd-file gtd-file-4 star');


      // Add "space" classes
      $('.gtd-directory .list-card-title:contains("=")').parents('.list-card').removeClass(removeAll).addClass('gtd-file-space');






      // ORDER IS REALLY IMPORTANT HERE OR IT WON'T WORK !!!

      // Remove ">" Text...
      $('.gtd-directory .list-card-title:contains("....! ")').each(function(){
         $(this).html($(this).html().split("....! ").join(""));
      });

      $('.gtd-directory .list-card-title:contains("...! ")').each(function(){
         $(this).html($(this).html().split("...! ").join(""));
      });

      $('.gtd-directory .list-card-title:contains("..! ")').each(function(){
         $(this).html($(this).html().split("..! ").join(""));
      });

      $('.gtd-directory .list-card-title:contains(".! ")').each(function(){
         $(this).html($(this).html().split(".! ").join(""));
      });




      // Remove "*" Text...
      $('.gtd-directory .list-card-title:contains("....* ")').each(function(){
         $(this).html($(this).html().split("....* ").join(""));
      });
      $('.gtd-directory .list-card-title:contains("...* ")').each(function(){
         $(this).html($(this).html().split("...* ").join(""));
      });
      $('.gtd-directory .list-card-title:contains("..* ")').each(function(){
         $(this).html($(this).html().split("..* ").join(""));
      });
      $('.gtd-directory .list-card-title:contains(".* ")').each(function(){
         $(this).html($(this).html().split(".* ").join(""));
      });




      // Remove "Folders" Text...
      $('.gtd-directory .list-card-title:contains("../../../../ ")').each(function(){
         $(this).html($(this).html().split("../../../../ ").join(""));
      });

      // Remove "Folders" Text...
      $('.gtd-directory .list-card-title:contains("../../../ ")').each(function(){
         $(this).html($(this).html().split("../../../ ").join(""));
      });

      // Remove "Folders" Text...
      $('.gtd-directory .list-card-title:contains("../../ ")').each(function(){
         $(this).html($(this).html().split("../../ ").join(""));
      });

      // Remove "Folders" Text...
      $('.gtd-directory .list-card-title:contains("../ ")').each(function(){
         $(this).html($(this).html().split("../ ").join(""));
      });

      // Remove "Folders" Text...
      $('.gtd-directory .list-card-title:contains("./ ")').each(function(){
         $(this).html($(this).html().split("./ ").join(""));
      });

      // Remove "Folders" Text...
      $('.gtd-directory .list-card-title:contains("/ ")').each(function(){
         $(this).html($(this).html().split("/ ").join(""));
      });




      // Remove "Files" Text...
      $('.gtd-directory .list-card-title:contains(".... ")').each(function(){
         $(this).html($(this).html().split(".... ").join(""));
      });

      // Remove "Files" Text...
      $('.gtd-directory .list-card-title:contains("... ")').each(function(){
         $(this).html($(this).html().split("... ").join(""));
      });

      // Remove "Files" Text...
      $('.gtd-directory .list-card-title:contains(".. ")').each(function(){
         $(this).html($(this).html().split(".. ").join(""));
      });

      // Remove "Files" Text...
      $('.gtd-directory .list-card-title:contains(". ")').each(function(){
         $(this).html($(this).html().split(". ").join(""));
      });

      // Remove "Files" Text...
      $('.gtd-directory .list-card-title:contains("=")').each(function(){
         $(this).html($(this).html().split("=").join(""));
      });


    var cardGTD     =   $( ".gtd-directory .list-card" );
    var folderGTD   =   $( ".gtd-directory .gtd-folder" );
    var fileGTD     =   $( ".gtd-directory .gtd-file" );
    var noLABEL     =   $( ".gtd-trello .gtd-directory .gtd-folder .list-card-details .list-card-labels:empty" );
    var folderLABEL =   $( ".gtd-trello .gtd-directory .gtd-folder .list-card-details .list-card-labels .card-label" );
    var fileLABEL   =   $( ".gtd-trello .gtd-directory .gtd-file .list-card-details .list-card-labels .card-label" );
    var listHeader  =   $( ".gtd-trello .gtd-directory .list-header" );

    $(noLABEL).each(function() {
        $(this).append('<span class="card-label"></span>');
        $(this).parents('.list-card').addClass('no-label');
    });

    $(folderLABEL).each(function() {
    	var GTDclass = $(this).prop('class');
        $(this).closest('.list-card').nextUntil('.gtd-folder').not(".card-composer").addClass(GTDclass).removeClass("mod-card-front");
    });

    $(folderLABEL).each(function() {
        var GTDclass = $(this).prop('class');
        $(this).parents('.list-card').addClass(GTDclass).removeClass("mod-card-front");
    });

    $(fileLABEL).each(function() {
    	var GTDclass = $(this).prop('class');
        $(this).parents('.list-card-details').addClass(GTDclass).removeClass("mod-card-front");
    });

    $('.gtd-directory .list-header').append('<button class="toggle-files">Toggle Files</button>');

    $( ".toggle-files" ).click(function() {
      $( ".gtd-file" ).toggle();
    });


    $( fileGTD ).each(function (){
      if ($(this).css('display') == 'block')
         {
            $('.gtd-file-space').show();
            $(folderGTD).removeClass('gtd-expanded gtd-collapsed').addClass('gtd-expanded');
         }

      else if ($(this).css('display') == 'none')
         {
            $('.gtd-file-space').hide();
            $(folderGTD).removeClass('gtd-expanded gtd-collapsed').addClass('gtd-collapsed');
         }
    });

/*

          // Look in the card titles
          $(".gtd-trello .gtd-directory .gtd-folder").each(function() {

             var GTDtext = $(this).html();
             var GTDlink = GTDtext.replace("<a class='gtd-toggle' href='javascript: void(0)'>+</a>");

             $( ".gtd-link:empty" ).remove();

             // Re-write html w/ hyperlinks
             $(this).html(GTDlink);
          });


          // Create card links...
          $(".gtd-link").on( "mouseover", function() {
              var rect   =   this.getBoundingClientRect (),
                  top    =   rect.top,
                  left   =   rect.left;

               $(this)
                 .clone().appendTo('body')
                 .removeClass('gtd-link')
                 .addClass('gtd-active-link')
                 .css({
                      'position' : 'fixed',
                      'top' : top+ 'px',
                      'left' : left+ 'px',
                      'display' : 'inline-block',
                      'z-index' : '99999'
                 });
          });


          // Removing Card Links...
          $( ".list-cards" ).scroll(function() {
            $( ".gtd-active-link" ).remove();
          });

          $( "#board, .list-wrapper, .list, .list-cards, .list-card" ).mousedown(function() {
             $( ".gtd-active-link" ).remove();
          });

          $( "#board, .list-wrapper, .list" ).mouseenter(function() {
            $( ".gtd-active-link" ).remove();
        }); */
   }
