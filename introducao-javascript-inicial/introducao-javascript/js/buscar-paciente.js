var botaoAdiPacientes = document.querySelector("#buscar-pacientes");
botaoAdiPacientes.addEventListener("click",function(event) {
    console.log("Buscando Pacientes.....");
    // https://api-pacientes.herokuapp.com/pacientes
    var xhr = new XMLHttpRequest();
    xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load",function(){
        console.log(xhr.responseText);
    }); 
    xhr.send();
})
