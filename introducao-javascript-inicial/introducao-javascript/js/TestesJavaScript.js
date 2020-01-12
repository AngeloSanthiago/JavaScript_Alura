// Teste da propridade "innerHTML";
// function teste_innerHTML_umElemento();
function teste_innerHTML_umElemento() {
    var tableHeadElement = document.querySelector("thead");
    var trElement = document.querySelector("tr");
    var tdElement = document.querySelector("td");
    console.log("Table Head: ");
    console.log(tableHeadElement);

    console.log("Tr: ");
    console.log(trElement);

    console.log("Tr innerHTML: " + trElement.innerHTML);
    console.log("Td innerHTML: " + tdElement.innerHTML);

}

// Teste dos objetos "event" e "this"

// test_this();
function test_this() {
// Atribuindo a ação de remoção a cada "tr" da tabela
var pacientes = document.querySelectorAll(".paciente");
pacientes.forEach(function(paciente) {
paciente.addEventListener("dblclick",function() {
// console.log("Fui clicado com um duplo click");
    this.remove();  //O comando  "paciente.remove()" funciona igualmente;
    });
});
}


// test_event();
function test_event() {
    // Atribuindo a ação de remoção a cada "tr" da tabela
    var pacientes = document.querySelectorAll(".paciente");
    pacientes.forEach(function (paciente) {
        paciente.addEventListener("dblclick", function (event) {
            console.log("Fui clicado com um duplo click em 'test_event()'");
            event.target.remove(); // Neste caso deve ter o mesmo efeito que "this.remove()"
        });
    });
}