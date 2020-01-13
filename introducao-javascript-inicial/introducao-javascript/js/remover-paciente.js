// Atribuindo a ação de remoção ao elemento "table"
var tabela = document.querySelector("table");
tabela.addEventListener("dblclick",function(event) {
    if (event.target.tagName == 'TD') {
    // O "event.taget" neste caso vai ser o "td" e o "parentNode" o "tr"
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function() {
        event.target.parentNode.remove();
    },500);
    }
});

// Atribuindo a ação de remoção a cada "tr" da tabela
// var pacientes = document.querySelectorAll(".paciente");
// pacientes.forEach(function(paciente) {
//     paciente.addEventListener("dblclick",function() {
//         // console.log("Fui clicado com um duplo click");
//         this.remove();  //O comando  "paciente.remove()" funciona igualmente;
//     });
// });