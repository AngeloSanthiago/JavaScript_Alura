var botaoAdicionar = document.querySelector("#adicionar-paciente"); 
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault(); // a propriedade "event" parece ter se tornado do objeto Event apenas por ter se chamado o método preventDefault().

    var form = document.querySelector("#form-adiciona");

    
    // Extraindo informações do paciente de dentro do FORM
    var paciente = obtemPacienteDoFormulario(form);
    console.log(paciente);
    

    // Cria a TR e a TD do novo paciente
    var pacienteTr = document.createElement("tr");
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = calculaImc(peso,altura);

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    // Adicionando o paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);
    
})
function obtemPacienteDoFormulario(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}