//Selecciono los elementos HTML y los guardo en variables para poder manipularlos luego
var input_nombre = document.getElementById("nombre");
var input_email = document.getElementById("email");
// var input_fecha = document.getElementById("fecha");
var input_comentario = document.getElementById("comentario");


var btn_guardar = document.getElementById("guardar");
var btn_obtener = document.getElementById("obtener");


//Escucho el click del botón "Guardar"
btn_guardar.addEventListener('click', function(){
    guardarDatos(); //ejecuto mi función
});

//Escucho el clik del botón "Obtener"
btn_obtener.addEventListener('click', function(){
   obtenerDatos(); //ejecuto mi función 
});


//FUNCIONES
function guardarDatos(){
    localStorage.setItem("dato_nombre", input_nombre.value); //Guardo el nombre ingresado en LocalStorage
    localStorage.setItem("dato_email", input_email.value);
    // localStorage.setItem("dato_fecha", input_fecha.value);
    localStorage.setItem("dato_comentario", input_comentario.value);

    //Borro el contenido de los inputs y select
    input_nombre.value = "";
    input_email.value = "";
    // input_fecha.value = "";
    document.getElementById("div_mensaje").style.display = "block"; //Muestro el div con el mensaje de éxito
}


function obtenerDatos(){
    var p_nombre = document.getElementById("p_nombre"); //obtento el elemento con ID = p_nom
    var p_email = document.getElementById("p_email");
    // var p_fecha = document.getElementById("p_fecha");
    var p_comentario = document.getElementById("p_comentario");
    

    p_nombre.innerHTML = localStorage.getItem("dato_nombre"); //Inserto el contenido del localStorage en el parrafo HTML correspondiente
    // p_email.innerHTML = "<strong>email:</strong> " + localStorage.getItem("dato_email");
    // p_fecha.innerHTML =  localStorage.getItem("dato_fecha");
    p_comentario.innerHTML =  localStorage.getItem("dato_comentario");


    document.getElementById("div_datos").style.display = "block"; //Mostrar el div con los datos
}