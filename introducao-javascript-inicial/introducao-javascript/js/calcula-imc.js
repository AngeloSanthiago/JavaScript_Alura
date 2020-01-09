var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    // console.log(paciente.querySelector(".info-nome").textContent);
    
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    
    var tdImc = paciente.querySelector(".info-imc");
    
    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);
    
    if (!pesoEhValido) {
        // console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido!"

        // paciente.style.color = "red"; // Nao recomendado. Estilo direto no HTML
        // paciente.style.backgroundColor = "lightcoral"; // Nao recomendado. Estilo direto no HTML
        paciente.classList.add("paciente-invalido");
    }
    
    if (!alturaEhValida) {
        // console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida!"
        paciente.classList.add("paciente-invalido");
    }
    if (alturaEhValida && pesoEhValido) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}
function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}
function validaNome(nome) {
    if (nome.length != 0) {
        return true;
    }else{
        return false;
    }
}

function validaPeso(peso) {
    if (peso >= 0 && peso < 1000) {
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura) {
    if (altura >= 0 && altura <= 3.0) {
        return true;
    }else{
        return false;
    }
}
// titulo.addEventListener("click", function(){
//     console.log("Olha só, estou executando de uma função anonima");
// });

// titulo.addEventListener("click", mostraMensagem);
// function mostraMensagem() {
//     console.log("Olá eu fui clicado");
// }