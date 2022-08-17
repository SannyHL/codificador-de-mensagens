let entradaTexto = "";
let textoCodificado;
let textoDecodificado;
let plaCodificar = document.getElementById('codificar');
let plaDecodificar = document.getElementById('decodificar');

let verifica = document.querySelector('#text-para-codificar');
verifica.addEventListener('keypress', function(e){
    
    if(!verificaLetraMinusculas(e)){
        e.preventDefault();
    } 
    
})
function verificaLetraMinusculas(e){
    let char = String.fromCharCode(e.keyCode);

    let analise = '[a-z]';
    if(char.match(analise)){
        return true;
    }
}


function codificarTexto(){
    
    entradaTexto = document.querySelector('#text-para-codificar').value;
    textoCodificado = entradaTexto.replace(/e/gm, "enter").replace(/i/gm, "imes").replace(/a/gm, "ai").replace(/o/gm, "ober").replace(/u/gm, "ufat");
    document.querySelector('#devolve-texto').innerHTML = textoCodificado;
    
}

console.log(codificarTexto())
function decodificarTexto(){
    entradaTexto = document.querySelector('#text-para-codificar').value;
    textoDecodificado = entradaTexto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    document.querySelector('#devolve-texto').innerHTML = textoDecodificado;
}

document.getElementById('copiar').addEventListener('click', copiaTexto);
async function copiaTexto(){
    let copia = document.getElementById('devolve-texto').value;
    await navigator.clipboard.writeText(copia);
}

document.getElementById("limpa").addEventListener('click', function limpaTexto(){
    entradaTexto = "";
});




plaCodificar.onclick = codificarTexto;
plaDecodificar.onclick = decodificarTexto;
