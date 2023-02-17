//MENU LATERAL
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu() {
    if (menu_visible == false) {//si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else {
        menu.style.display = "none";
        menu_visible = false;
    }
}
//OCULTO EL MENU UNA VEZ QUE SELECCIONO LA OPCION
let links = document.querySelectorAll("nav a");
for (var x = 0; x < links.length; x++) {
    links[x].onclick = function () {
        menu.style.display = "none";
        menu_visible = false;
    }
}
//CREO LAS BARRITAS DE LA SECCION HABILIDADES
function crearBarra(id_barra) {
    for (i = 0; i <= 16; i++) {
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);

    }
}
// SELECCIONO TODAS LAS BARRAS PARA LUEGO MANIPULARLAS
let Mantenimiento = document.getElementById("mantenimiento");
crearBarra(Mantenimiento);
let Reparación = document.getElementById("reparacion");
crearBarra(Reparación);
let Gestión_de_Stock = document.getElementById("gestiondestock");
crearBarra(Gestión_de_Stock);
let Manejo_de_Grupos = document.getElementById("manejodegrupos");
crearBarra(Manejo_de_Grupos);
let Metrología = document.getElementById("metrologia");
crearBarra(Metrología);
let Microsoft_Office = document.getElementById("microsoftoffice");
crearBarra(Microsoft_Office);


//GUARDAR CANTIDAD DE BARRAS QUE SE VAN A IR PINTANDO
//PARA ESO USO UN ARREGLO, CADA POSICION PERTENECE A UN ELEMENTO
//COMIENZAN EN -1 PORQUE AL COMIENZO NO TIENEN NINGUN PINTADO
let contadores = [-1, -1, -1, -1, -1, -1];
//ESTA VARIABLE LA USO DE BANDERA PARA SABER SI HIZO LA ANIMACION
let entro = false;


//FUNCION QUE APLICA LAS ANIMACIONES DE LAS HABILIDADES
function efectoHabilidades() {
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if (distancia_skills >= 300 && entro == false) {
        entro = true;
        const intervalMantenimiento = setInterval(function () {
            pintarBarra(Mantenimiento, 17, 0, intervalMantenimiento);
        }, 100);
        const intervalReparacion = setInterval(function () {
            pintarBarra(Reparación, 17, 1, intervalReparacion);
        }, 100);
        const intervalGestiondeStock = setInterval(function () {
            pintarBarra(Gestión_de_Stock, 15, 2, intervalGestiondeStock);
        }, 100);
        const intervalManejodeGrupos = setInterval(function () {
            pintarBarra(Manejo_de_Grupos, 17, 3, intervalManejodeGrupos);
        }, 100);
        const intervalMetrologia = setInterval(function () {
            pintarBarra(Metrología, 17, 4, intervalMetrologia);
        }, 100);
        const intervalMicrosoftOffice = setInterval(function () {
            pintarBarra(Microsoft_Office, 14, 5, intervalMicrosoftOffice);
        }, 100);
    }
}

//LLENO UNA BARRA PARTICULAR CON LA CANTIDAD INDICADA
function pintarBarra(id_barra, cantidad, indice, interval) {
    contadores[indice]++;
    x = contadores[indice];
    if (x < cantidad) {
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#f70"
    } else {
        clearInterval(interval)
    }
}

//DETECTO EL SCROLLING DEL MOUSE PARA APLICAR LA ANIMACION
window.onscroll = function () {
    efectoHabilidades();
}

