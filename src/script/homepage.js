/*logout functionality*/
  function logout(){
      document.getElementById("userProfile").style.display = "none";
      //may need to have it to change --> 
      document.getElementById("content").style.display = "none";
      document.getElementById("loginProfile").style.display = "block";
  }
/*Jorge code */
  $(document).ready(function(){
    setup();
    
    $(".nav-bar-item").hover(function(){
        $(".dropdown-menu", this).slideDown(100);
    }, function(){
        $(".dropdown-menu", this).stop().slideUp(100);
    });
    
    $(".side-bar-cat").click(function(){
        console.log($(".fa-caret-right", this).length);
        if($(".fa-caret-right", this).length > 0) $(".fa-caret-right", this).toggleClass("fas fa-caret-down");
        else $(".fa-caret-down", this).toggleClass("fas fa-caret-right");
        $("ul li", this).toggle();
    })
})

function setup(){
    window.LOGGED_IN = true;
    window.USERNAME = "mattCSguy";
    
    if(window.LOGGED_IN) login();
    else logout();
}

function login() {
    // change nav bar
    $("#login").hide();
    $("#signup").hide();
    $("#nav-bar-search").show();
    $("#profile-pic").show();
    $("#username").text("Signed in as @" + window.USERNAME);
}

function logout() {
    // change nav bar
    $("#login").show();
    $("#signup").show();
    $("#nav-bar-search").hide();
    $("#profile-pic").hide();
}

/*COOKIE ACCOUNT FORMULAS*/

/*Takes info from form and passes to setCookie */
function cookieName(username, formInfo){
  var info = ""
  for (i = 0; i < formInfo.length ;i++) {
      info += formInfo.elements[i].value;
    }
  setCookie(username, info);
  return ""
}

function setCookie(cname, cvalue){
    document.cookie = cname + "=" + cvalue +";";
}
/**Checks for cookie */
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "none";
}
/** Check for registered account, triggered onClick of create account button */
function checkCookieRegister(){
  var formInfo = document.getElementById("registerForm");
  var userEmail = formInfo.elements[4].value;
  var unCookie = getCookie(userEmail);
  if(unCookie == "none"){
        cookieName(userEmail, formInfo);
        newUserName(userEmail); //Displays new page with this username
    } else{
        /**ToDo: alert: account already exists with this email */
        alert("There is already a user with this email: " + unCookie);
    }
}

/**ToDo: Checks login info, triggered onClick of login. If correct, load user page */
function checkCookieLogin(){
  var formArray = document.getElementById("loginForm");
  var username = formArray.elements[0].value; 
  var unCookie = getCookie(username);
    if(unCookie == "none"){
        alert("There is no registered user: " + username);
    } else{
        newUserName(username);
    }
}

//Displays event management page
function newUserName(name){
    alert("login successful");
}