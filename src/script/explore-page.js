/* */
myCat1 = 0;
myCat2 = 0;

$(function() {
    $("#toggleMe1").click(function(){
        $("#cat1").toggle("fast", "swing")
    });
    $("#toggleMe2").click(function(){
        $("#cat2").toggle("fast", "swing")
    });


});

function showLess(show, hide){
    document.getElementById(show).style.display = "block";
    document.getElementById(hide).style.display = "none";
}

function showMore(hide, show){
    document.getElementById(show).style.display = "block";
    document.getElementById(hide).style.display = "none";
}


/*Open form for card info*/
function openForm(myForm, eventName, card) {
    document.getElementById(card).style.background = "lightblue";
    document.getElementById(myForm).style.display = "block";
    document.getElementsById(eventN).innerHTML = eventName; /*THIS DOESN'T CHANGE THE CONTENT--HELP!!*/
  }

/*Close form for card info*/
  function closeForm(myForm) {
    document.getElementById(myForm).style.display = "none";
  }

