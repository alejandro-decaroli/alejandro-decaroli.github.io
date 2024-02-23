let menu_icon = document.getElementById("menu-icon");
let menu = document.getElementById("menu-options");
var menu_visible = false;
var hola = "hola"

window.addEventListener('resize', function() {
    if (window.innerWidth > 768){
        hola = true;
    } else {
        hola = false;
    }
})


function mostrarOcultarMenu(){
    if(menu_visible==false){ //si esta oculto
        menu.style.display = "flex";
        menu_icon.style.display = "none";
        menu_visible = true;
    } else {
        menu.style.display = "none";
        menu_icon.style.display = "block";
        menu_visible = false;
    }    
}

//oculto el menu una vez que haya seleccionado una opcion
let links = document.querySelectorAll("ul li a");
for (var x = 0; x < links.length; x++){
    links[x].onclick = function(){
        if (hola == false) {
            menu.style.display = "none";
            menu_icon.style.display = "block";
            menu_visible = false;
        } else {
            return;
        }
    }
}

let image = document.getElementById("x");
image.onclick = function() {
    if (hola == false) {
        menu.style.display = "none";
        menu_icon.style.display = "block";
        menu_visible = false;
    } else {
        return;
    }
} 
