var botaoAdicionar = document.querySelector("#adicionar-paciente"); 
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault(); // a propriedade "event" parece ter se tornado do objeto Event apenas por ter se chamado o método preventDefault().
    // console.log("Oi, cliquei no botão");
    var form = document.querySelector("#form-adiciona");
    //abaixo o comando para acessar o elemento pela propriedade name diretamente
    console.log(form.altura.value);
    // console.log(form.querySelector("#altura")); // forma alternativa a anterior
    
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

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
    // imcTd.textContent = imc;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    
    // console.log(pacienteTr);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);
    
})