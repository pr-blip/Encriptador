const ingresoTexto= document.getElementById("ingresoTexto");
const btnEncriptar= document.getElementById("btnEncriptar");
const btnDesencriptar= document.getElementById("btnDesencriptar");
const btnCopiar= document.getElementById("btnCopiar");
const mensajeFinal= document.getElementById("mensajeFinal");
const muñeco= document.getElementById("muñeco");
const rightInfo= document.getElementById("rightInfo");
const right= document.getElementById("right");


let matriz_Codigo= [["e","enter"], ["o","ober"], ["i", "imes"], ["a", "ai"], ["u", "ufat"]]

const reemplazar= (nuevoValor) => {
    mensajeFinal.innerHTML = nuevoValor;

    muñeco.classList.add("oculto");

    ingresoTexto.value = "";

    rightInfo.style.display = "none";
    btnCopiar.style.display = "block";
    right.classList.add("ajustar");
    mensajeFinal.classList.add("ajustar");
}

const reset = () => {
    mensajeFinal.innerHTML = "";
    muñeco.classList.remove("oculto");
    rightInfo.style.display = "block";
    btnCopiar.style.display = "none";
    right.classList.remove("ajustar");
    mensajeFinal.classList.remove("ajustar");
    ingresoTexto.focus();

}

btnEncriptar.addEventListener("click", () => {
    const texto = ingresoTexto.value.toLowerCase()
    if (texto != "") {
        function encriptar(newText) {
            for (let i = 0; i < matriz_Codigo.length; i++){
                if (newText.includes(matriz_Codigo[i][0])){
                    newText = newText.replaceAll(matriz_Codigo[i][0], matriz_Codigo[i][1]);
    
                };  
            };
        return newText   
    };
    }else{
        reset();

    }
   reemplazar(encriptar(texto));

   
});

btnDesencriptar.addEventListener("click", () => {
    const texto = ingresoTexto.value.toLowerCase()
    if (texto != ""){
        function desencriptar(newText) {
            for (let i = 0; i < matriz_Codigo.length; i++) {
                if(newText.includes(matriz_Codigo [i][1])){
                   newText = newText.replaceAll(matriz_Codigo[i][1], matriz_Codigo [i][0])
                };
                
            };
            return newText
    };
       
    }else{
        reset();
    }
    reemplazar(desencriptar(texto));

})

btnCopiar.addEventListener("click", () =>{
    let texto = mensajeFinal;

    texto.select();
    document.execCommand('copy');
    reset();
})










