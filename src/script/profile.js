$(document).ready(function() {
    defaults();
    // $("#account_info_tab").css("background-color", "#333333");
    $("#update_button").click(function (){
        if(validate_form()){
            $("#update_account_form")[0].reset();
            $(".successful_update").show().delay(800).fadeOut();
        }
    });

    $("#project_tab").click(function () {

    });

    $("#account_info_tab").click(function() {
        defaults();
    });

    $("message_tab").click (function() {

    });

    $("settings_tab").click(function() {

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
    $("#account_info_tab").css({
        "background-color": "#333333",
        "color": "white"
    });
}