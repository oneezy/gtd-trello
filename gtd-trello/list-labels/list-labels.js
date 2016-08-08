/************************************************************************
	GTD Trello (Due Dates)
*************************************************************************/


   // Add Due Dates
   function GTD_ListLabels() {

      // Add class
      $( 'h2:contains("(WHITE)")' ).parents('.list').addClass('gtd-white');
      $( 'h2:contains("(BLUE)")' ).parents('.list').addClass('gtd-blue');
      $( 'h2:contains("(DARK BLUE)")' ).parents('.list').addClass('gtd-darkblue');
      $( 'h2:contains("(YELLOW)")' ).parents('.list').addClass('gtd-yellow');
      $( 'h2:contains("(ORANGE)")' ).parents('.list').addClass('gtd-orange');
      $( 'h2:contains("(RED)")' ).parents('.list').addClass('gtd-red');
      $( 'h2:contains("(PURPLE)")' ).parents('.list').addClass('gtd-purple');
      $( 'h2:contains("(PINK)")' ).parents('.list').addClass('gtd-pink');
      $( 'h2:contains("(GREEN)")' ).parents('.list').addClass('gtd-green');
      $( 'h2:contains("(DARK GREEN)")' ).parents('.list').addClass('gtd-darkgreen');
      $( 'h2:contains("(GRAY)")' ).parents('.list').addClass('gtd-gray');
      $( 'h2:contains("(DARK GRAY)")' ).parents('.list').addClass('gtd-darkgray');
      $( 'h2:contains("(BLACK)")' ).parents('.list').addClass('gtd-black');

      // Remove Text...
      $( 'h2:contains("(WHITE)")' ).each(function(){
         $(this).html($(this).html().split("(WHITE)").join(""));
      });

      $( 'h2:contains("(BLUE)")' ).each(function(){
         $(this).html($(this).html().split("(BLUE)").join(""));
      });

      $( 'h2:contains("(DARK BLUE)")' ).each(function(){
         $(this).html($(this).html().split("(DARK BLUE)").join(""));
      });

      $( 'h2:contains("(YELLOW)")' ).each(function(){
         $(this).html($(this).html().split("(YELLOW)").join(""));
      });

      $( 'h2:contains("(ORANGE)")' ).each(function(){
         $(this).html($(this).html().split("(ORANGE)").join(""));
      });

      $( 'h2:contains("(RED)")' ).each(function(){
         $(this).html($(this).html().split("(RED)").join(""));
      });

      $( 'h2:contains("(PURPLE)")' ).each(function(){
         $(this).html($(this).html().split("(PURPLE)").join(""));
      });

      $( 'h2:contains("(PINK)")' ).each(function(){
         $(this).html($(this).html().split("(PINK)").join(""));
      });

      $( 'h2:contains("(GREEN)")' ).each(function(){
         $(this).html($(this).html().split("(GREEN)").join(""));
      });

      $( 'h2:contains("(DARK GREEN)")' ).each(function(){
         $(this).html($(this).html().split("(DARK GREEN)").join(""));
      });

      $( 'h2:contains("(GRAY)")' ).each(function(){
         $(this).html($(this).html().split("(GRAY)").join(""));
      });

      $( 'h2:contains("(DARK GRAY)")' ).each(function(){
         $(this).html($(this).html().split("(DARK GRAY)").join(""));
      });

      $( 'h2:contains("(BLACK)")' ).each(function(){
         $(this).html($(this).html().split("(BLACK)").join(""));
      });


   }
