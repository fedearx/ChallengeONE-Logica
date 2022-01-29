// Inputs y Botones
var frase = document.querySelector("#frase");
var btn_Encriptar = document.querySelector("#btn_encriptar");
var btn_Desencriptar = document.querySelector("#btn_desencriptar");

var mensaje = document.querySelector("#mensaje");
var btn_Copiar = document.querySelector("#btn_copiar");

function validar() {
    var m = frase.value;
    var expreg = new RegExp("^[a-z]$");
    var ok = true;

    // elimina los espacios en blanco al inico y al final
    m = m.replace(/^\s*|\s*$/g, '');
    if(expreg.test(m)) {
        ok = false;
        alert("El texto a encriptar debe estar escrito solo letras minúsculas, sin acentos.");
        frase.select();
    } else if ((m == null) || (m.length == 0)) {
        ok = false;
        alert("Debe ingresar algún texto para encriptar");
        frase.select();
    } else {
        // saco los espacios en blanco a la izq y der de la cadena
        frase.value = m;
    }
    return ok;
  }

// Encriptar frase
btn_Encriptar.addEventListener("click", function(event) {
    event.preventDefault();
    if (validar()) {  
        var resultado = frase.value;
        resultado = resultado.replace(/^\s*|\s*$/g, '');
        resultado = resultado.replaceAll("e", "enter");    
        resultado = resultado.replaceAll("i", "imes");    
        resultado = resultado.replaceAll("a", "ai");    
        resultado = resultado.replaceAll("o", "ober");    
        resultado = resultado.replaceAll("u", "ufar");  
        mensaje.value = resultado;   
    }
})

// Desencripta frase
btn_Desencriptar.addEventListener("click",function(event) {
    event.preventDefault();
    if (validar()) {         
        var resultado = frase.value;
        resultado = resultado.replace(/^\s*|\s*$/g, '');
        resultado = resultado.replaceAll("enter", "e");    
        resultado = resultado.replaceAll("imes", "i");    
        resultado = resultado.replaceAll("ai", "a");    
        resultado = resultado.replaceAll("ober", "o");    
        resultado = resultado.replaceAll("ufar", "u");
        mensaje.value = resultado;   
    }
})

btn_Copiar.addEventListener("click",function(event) {
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);     
    alert("Mensaje copiado en el portapapeles!");
    frase.value = "";
    mensaje.value = "";
    frase.select();
})