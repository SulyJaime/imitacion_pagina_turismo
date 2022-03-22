//Selecciono los elementos HTML y los guardo en variables para poder manipularlos luego

var input_nombre = document.getElementById("nombre");
var input_apellido = document.getElementById("apellido");
var input_email = document.getElementById("email");
var input_celular = document.getElementById("celular");
var input_direccion = document.getElementById("direccion");
var input_pais = document.getElementById("pais");
var input_ciudad = document.getElementById("ciudad");
var input_departamento = document.getElementById("departamento");
var input_postal = document.getElementById("postal");

var btn_pagar = document.getElementById("pagar");
btn_pagar.addEventListener("click", function () {
  mostrarAlert();
});

var btn_guardar = document.getElementById("guardar");
btn_guardar.addEventListener("click", function () {
  guardarDatos();
});

//Funciones

function mostrarAlert() {
  //obtengo los valores ingresados (values), los concateno y los guardo en una variable
  var msj = "Estimado " + input_nombre.value + " " + input_apellido.value + " gracias por tu compra, acabamos de enviar tu factura al correo electronico ingresado.";
  alert(msj);

    // input_nombre.value = "";
    // input_apellido.value = "";
    // input_email.value = "";
    // input_celular.value = "";
    // input_direccion.value = "";
    // input_pais.value = "";
    // input_ciudad.value = "";
    // input_departamento.value = "";
    // input_postal.value = "";
}

function guardarDatos() {

    localStorage.setItem("dato_nombre", input_nombre.value); //Guardo el nombre ingresado en LocalStorage
    localStorage.setItem("dato_apellido", input_apellido.value);
    localStorage.setItem("dato_email", input_email.value);
    localStorage.setItem("dato_celular", input_celular.value);
    localStorage.setItem("dato_pais", input_pais.value);
    localStorage.setItem("dato_ciudad", input_ciudad.value);
    localStorage.setItem("dato_departamento", input_departamento.value);
    localStorage.setItem("dato_posta", input_postal.value);

}