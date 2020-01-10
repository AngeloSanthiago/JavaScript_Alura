// teste_innerHTML_umElemento();

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