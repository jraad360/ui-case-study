$(document).ready(function() {
    defaults();
    // $("#account_info_tab").css("background-color", "#333333");
    $("#update_button").click(function (){
        if(validate_form()){
            $("#update_account_form")[0].reset();
            $(".successful_update").show().delay(800).fadeOut();
        }
    });


    $("#account_info_tab").click(function() {
        defaults();

    });

    $("#message_tab").click (function() {
        resets();
        $(".account_info").hide();
        $("#message_tab").css({
            "background-color": "#333333",
            "color": "white"
        });

       
        $(".messages").show();
    });

    $("settings_tab").click(function() {

    });

    $("#submitmsg").click(function() {
        var val = $("#usermsg").val();
        console.log("User Input = ", val);
        $(".message_container").append("<div class='container blue' <p>" + val + "</p></div>")
    });


});

function validate_form(){
    var username = document.forms["update_account_form"]["username-login"].value;
    var email = document.forms["update_account_form"]["email-login"].value;
    var password = document.forms["update_account_form"]["password-login"].value;

    if (username== "" | email== "" | password == "") {
        alert("Fields cannot be empty");
        return false;
    } 

    return true;
}

function defaults() {
    console.log("Setup completed");
    $(".messages").hide(); 
    $(".account_info").show();
    resets();
    $("#account_info_tab").css({
        "background-color": "#333333",
        "color": "white"
    });
}

function resets() {
    $("#account_info_tab, #message_tab").css({
        "background-color": "white",
        "color": "black"
    }); 
}