var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");
// paciente.textContent = "teste de inserção de texto"; // este comando monta um novo elemento na página de forma muito estranha.
console.log(paciente.querySelector(".info-nome").textContent);


var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var pesoEhValido = true;
var alturaEhValido = true;

if (peso <= 0 || peso >= 1000) {
    console.log("Peso inválido!");
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido!"
}

if (altura <= 0 || altura >= 3.0) {
    console.log("Altura inválida!");
    alturaEhValido = false;
    tdImc.textContent = "Altura inválida!"
}
if (alturaEhValido && pesoEhValido) {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}