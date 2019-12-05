/*logout functionality*/
  function logout(){
      document.getElementById("userProfile").style.display = "none";
      //may need to have it to change --> 
      document.getElementById("content").style.display = "none";
      document.getElementById("loginProfile").style.display = "block";
  }

  function loginFunc(){
      document.getElementById("loginForm").style.display ="block";
      document.getElementById("registerForm").style.display ="none";

  }

  function registerFunc(){
    document.getElementById("registerForm").style.display ="block";
    document.getElementById("loginForm").style.display ="none";

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

  function checkUsername(cname){
      var name = cname +"=";
      var allNames = document.cookie.split(";");
      for(var i = 0; i < allNames.length; i++){
          var a = allNames[i];
          while(a.charAt(0)==' '){
              c = c.substring(1);
          }
          if(c.indexOf(name) == 0){
              return true;
          }
      }
      return false; //NOT SURE IF THIS IS WHAT TO RETURN??
      
  }
  /*Takes info from form and passes to setCookie */
  function cookieName(email, formInfo){
    var info = ""
    for (i = 0; i < formInfo.length ;i++) {
        info += formInfo.elements[i].value;
      }
    setCookie(email, info);
    return ""
  }

  function setCookie(cname, cvalue){
      document.cookie = cname + "=" + cvalue +";";
  }

  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      console.log(c);
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);