// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
//  Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let numeroRamdon = 0 ; 

/*function asignarTexto( etiqueta , mensaje) {
    let elementoHTML = document.querySelector(etiqueta);
    elementoHTML.innerHTML = mensaje; 
}
*/
function agregarAmigo(){
    let name = document.getElementById("amigo").value
    if(! (amigos.includes(name))){
        amigos.push(name);
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

function sortearAmigo(){
    if ( amigos.length != 0 ){
        numeroRamdon = generarNumeroRamdon() ; 
        let amigoSecreto = amigos[numeroRamdon] ; 
        let eiqueta = document.getElementById("resultado");
        eiqueta.innerHTML = `El amigo secreto sorteado es:  ${amigoSecreto}` ;
    }else{
        let etiqueta = document.getElementById("resultado");
        etiqueta.innerHTML = "" ;
    }
}

function generarNumeroRamdon(cantAmigo = (amigos.length)) {
    return Math.floor(Math.random()* cantAmigo ) ;
}