let home = document.getElementById("home")
let forums = document.getElementById("forums")
let apply = document.getElementById("apply")

let check_luaexp = document.getElementById("lua_exp_check")
let lua_selbox = document.getElementById("sl_lua")
let lua_selbox_txt = document.getElementById("sl_lua_text")
let lua_checkbox_checked = false;

home.onclick = function(){
    window.location.href = "/index.html";
}

forums.onclick = function(){
    window.location.href = "/forums/index.html"
}

apply.onclick = function(){
    window.location.href = "/apply/index.html"
}

check_luaexp.oninput = function(){
    if (lua_checkbox_checked == false){
        lua_checkbox_checked = true;
        lua_selbox.style.visibility = "visible";
        lua_selbox_txt.textContent = "How fluent are you in lua?";
    } else {
        lua_checkbox_checked = false;
        lua_selbox.style.visibility = "hidden";
        lua_selbox_txt.visibility = "visible";
        lua_selbox_txt.textContent = "";
    }
}