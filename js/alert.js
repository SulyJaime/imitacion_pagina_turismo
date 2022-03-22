var input_nombre = document.getElementById("nombre");
var input_apellidos = document.getElementById("apellidos");
var input_email = document.getElementById("email");
var input_comentario = document.getElementById("comentario");

var btn_enviar = document.getElementById("enviar");
btn_enviar.addEventListener("click", function () {
  mostrarAlert();
});



function mostrarAlert() {
    //obtengo los valores ingresados (values), los concateno y los guardo en una variable
    var msj = "Estimado " + input_nombre.value + " " + input_apellidos.value + "tus datos han sido enviados con éxito.";
    alert(msj);
}

function guardarDatos() {

    localStorage.setItem("dato_nombre", input_nombre.value); //Guardo el nombre ingresado en LocalStorage
    localStorage.setItem("dato_apellidos", input_apellidos.value);
    localStorage.setItem("dato_email", input_email.value);
    localStorage.setItem("dato_comentario", input_comentario.value);

}