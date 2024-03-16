const texArea = document.querySelector(".tex-area");
const mensaje = document.querySelector(".mensaje");
const parrafosMensaje = document.querySelector(".contenedor-mensaje");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

//area de encriptado

function btnEncriptar(){
    const textoEncriptado = encriptar(texArea.value)
    mensaje.value = textoEncriptado

    texArea.value = "";
    mensaje.style.backgroundImage = "none"
    //parrafosMensaje.style.color = "#F3F5FC";
    $title.innerHTML = ''
}


function encriptar(stringEncriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"],["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptado
}


//area de desencriptado

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"],["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptado
}




function btnDesencriptar(){
    const textoEncriptado = desencriptar(texArea.value)
    mensaje.value = textoEncriptado

    texArea.value = "";
    mensaje.style.backgroundImage = "none"
    //parrafosMensaje.style.color = "#F3F5FC";
    $title.innerHTML = ''
}


//funcion de copiado de texto
const $content = document.querySelector(".mensaje"),
       $btn = document.querySelector(".btn-copiar"),
       $title = document.getElementById('title');

$btn.addEventListener('click', e => {
    $content.select();
    document.execCommand('copy');

    parrafosMensaje.style.color = "#0A3871";
    $title.innerHTML = '¡¡Copiado!!'

})




