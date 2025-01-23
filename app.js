// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
//  Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

/*function asignarTexto( etiqueta , mensaje) {
    let elementoHTML = document.querySelector(etiqueta);
    elementoHTML.innerHTML = mensaje; 
}
*/
function agregarAmigo(){
    let name = document.getElementById("amigo").value
    if(! (amigos.includes(name))){
        amigos.push(name);
        console.log(name);
        vaciarCampo(); 
    }else{
        if( name == ""){
            alert("Por favor inserte un nombre");
            vaciarCampo(); 
        }else{
            alert("El nombre no se pudo añadir dado que ya fue ingresado, intente con otro nombre");
            vaciarCampo();
        }
    }
    mostrarLista();
    return;
}

function vaciarCampo() {
        document.getElementById("amigo").value = "" ; 
}
function  mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let index = 0; index < amigos.length; index++) {
        let li = document.createElement("li"); 
        li.textContent = amigos[index] ; 
        lista.appendChild(li); 
    }
}
