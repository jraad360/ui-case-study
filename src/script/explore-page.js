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

function editCard(card){
    document.getElementById(card).style.background = "blue"; //not what I want to do but just a place holder
}

