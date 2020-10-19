/* Hamburger menu*/
function hamburgerMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
//SWITCH
  $('#sort').click(function(){
    var alphabeticallyOrderedDivs = $('.item').sort(function(a, b) {
      return String.prototype.localeCompare.call($(a).data('title').toLowerCase(), $(b).data('title').toLowerCase());
  });

  var container = $("#aphaOrder");
  container.detach().empty().append(alphabeticallyOrderedDivs);
  $('body').append(container);
})

//TOGGLE
  howMany = 10;
  listButton = $('button.list-view');
  gridButton = $('button.grid-view');
  wrapper = $('div.wrapper');
  div = $( ".item" )

  listButton.on('click',function(){      
    gridButton.removeClass('on');
    listButton.addClass('on');
    wrapper.removeClass('grid').addClass('list');
    $('.wrapper').css('display', 'inline');  
  });
  gridButton.on('click',function(){      
    listButton.removeClass('on');
    gridButton.addClass('on');
    wrapper.removeClass('list').addClass('grid');  
    $('.wrapper').css('display', 'flex', 'column');  
  });

//make entire div clickable
  $(".item").click(function() {
    window.location = $(this).find("a").attr("href"); 
  });
//mouse hover div effect
/*    $(".item").hover(function(){
  $(this).animate({height:'50vh'});
})  */

 
