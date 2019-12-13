var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");
// paciente.textContent = "teste de inserção de texto"; // este comando monta um novo elemento na página de forma muito estranha.
console.log(paciente.querySelector(".info-nome").textContent);


var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var imc = peso / (altura * altura);
 
var tdImc = paciente.querySelector(".info-imc");
tdImc.textContent = imc;

console.log(imc);

