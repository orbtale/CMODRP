let home = document.getElementById("home")
let forums = document.getElementById("forums")
let apply = document.getElementById("apply")
home.onclick = function(){
    window.location.href = "/index.html";
}

forums.onclick = function(){
    window.location.href = "/forums/index.html"
}

apply.onclick = function(){
    window.location.href = "/apply/index.html"
}
