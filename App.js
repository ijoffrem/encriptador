/*
Las "llaves" de encriptación que utilizaremos son las siguientes:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/


let arregloLlave = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];

function main() {
    //let texto = encriptar("irving joffre mora");
    //desencriptar(texto);
    let cadenaSinEncriptar = document.getElementById("txtboxCadena").value;
    document.getElementById("parrafoResultado").innerHTML = cadenaSinEncriptar;
}


function encriptar(){
    let cadenaSinEncriptar = document.getElementById("txtboxCadena").value;
    for (let i = 0; i < arregloLlave.length; i++) {
        cadenaSinEncriptar = cadenaSinEncriptar.replaceAll(arregloLlave[i][0], arregloLlave[i][1]);
    }

    document.getElementById("parrafoResultado").innerHTML = cadenaSinEncriptar;
    document.getElementById("parrafoAdicional").innerHTML = "";
    document.getElementById("imagen-muneco").style.display = "none";
    document.getElementById("btnCopiar").style.display = "inline";

    //return cadenaAEncriptar;
}

function desencriptar(){
    let cadenaEncriptada = document.getElementById("txtboxCadena").value;
    for (let i = 0; i < arregloLlave.length; i++) {
        cadenaEncriptada = cadenaEncriptada.replaceAll(arregloLlave[i][1], arregloLlave[i][0]);
    }
    
    document.getElementById("parrafoResultado").innerHTML = cadenaEncriptada;
    document.getElementById("parrafoAdicional").innerHTML = "";
    document.getElementById("imagen-muneco").style.display = "none";
    document.getElementById("btnCopiar").style.display = "inline";


}


/*
function encriptar(cadenaAEncriptar) {
    //let nuevaCadena = "";
    for (let i = 0; i < arregloLlave.length; i++) {
        cadenaAEncriptar = cadenaAEncriptar.replaceAll(arregloLlave[i][0], arregloLlave[i][1]);
    }

    return cadenaAEncriptar;

}

function desencriptar(cadenaADesencriptar) {
    for (let i = 0; i < arregloLlave.length; i++) {
        cadenaADesencriptar = cadenaADesencriptar.replaceAll(arregloLlave[i][1], arregloLlave[i][0]);
    }

}
*/