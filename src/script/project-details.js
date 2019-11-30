window.LOGGED_IN = true;
setup();

function setup(){
    if(window.LOGGED_IN) login();
    else logout();
}

function login() {
    // change nav bar
    document.getElementById("login").style.display = "none";
    document.getElementById("signup").style.display = "none";
    document.getElementById("nav-bar-search").style.display = "block";
    document.getElementById("profile-pic").style.display = "block";
}

function logout() {
    // change nav bar
    document.getElementById("login").style.display = "block";
    document.getElementById("signup").style.display = "block";
    document.getElementById("nav-bar-search").style.display = "none";
    document.getElementById("profile-pic").style.display = "none";
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