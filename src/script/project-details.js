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

function createTask(name) {
    var box = document.createElement("div");
    box.className = "task";
    var title = document.createElement("h1");
    title.textContent = name;
    box.appendChild(title);
    // add description & hashtags
}

function createCategory(name) {
    var box = document.createElement("div");
    box.className = "category";
    var title = document.createElement("h1");
    title.textContent = name;
    box.appendChild(title);
}

function addTask(task) {
    this.appendChild(task);
}

function expandTask(){
    
}