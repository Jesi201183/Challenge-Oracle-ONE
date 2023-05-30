const nombre=document.querySelector(".encriptar");
const btn=document.querySelector("button1");
const btnd=document.querySelector("button2");
const btnc=document.querySelector("button3")
const texto=document.querySelector(".text-area");
const mensaje=document.getElementById("yaencripte");

const original=mensaje.style.backgroundImage;
btn.addEventListener("click",encriptado);
btnd.addEventListener("click",desencriptado);
btnc.addEventListener("click",copiar);
function encriptado(){
    var flag=validarIngreso();
    if(flag==true){
        if(texto.value.length>0){
          var frasereemplazo=texto.value;
          let matrizCodigo=[[ "e","enter"],["i","imes"],["o","ober"],["a","ai"],["u","ufat"]]  ;    
          frasereemplazo=frasereemplazo.toLowerCase()
            for (let i=0; i< matrizCodigo.length ; i++){
                if(frasereemplazo.includes(matrizCodigo[i][0])){
                    frasereemplazo=frasereemplazo.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
                }
            }
          let saludo=frasereemplazo;
           mensaje.value=saludo;
          texto.value="";
          mensaje.style.backgroundImage="none"
        }else{
             mensaje.value="No se encontro un texto para desencriptar";
             mensaje.style.backgroundPositionY="100px";
        }
    }else{
        mensaje.value="Solo debes ingresar letras en minusculas";
        mensaje.style.backgroundImage="none";
    }
   }
   function desencriptado(){
    var flag=validarIngreso();
    if(flag==true){   
         var frase=texto.value;
           if(frase.length>0){
          texto.value="";

         let matrizCodigo=[[ "e","enter"],["i","imes"],["o","ober"],["a","ai"],["u","ufat"]]  ;    
         frase=frase.toLowerCase()
         for (let i=0; i< matrizCodigo.length ; i++){
           if(frase.includes(matrizCodigo[i][1])){
              frase=frase.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
            }
         }
         let saludo=frase;
          mensaje.value=saludo;
         texto.value="";
        }else{ 
          mensaje.value="No se encontro un texto para desencriptar";
        }
    }else{
         mensaje.value="Solo se ingresan letras minusculas"
         mensaje.style.backgroundPositionY="100px";
    }}
  function copiar(){
    

     if (mensaje.value==" "){
    texto.value="No se encontro texto para copiar"
      }else{
      navigator.clipboard.writeText(mensaje.value);
      mensaje.value=" ";
      }
    }
 function validarIngreso(){
       const frase=texto.value;
        var bandera=true;
        for(let i=0;i<frase.length;i++){
          if(frase.substring(i,i+1)<"a"|| frase.substring(i,i+1)>"z"){
             if(frase.substring(i,i+1)==" "){
                bandera=true;
             }else{
           bandera=false;
           break;
          }
         }
        }

       return bandera;   
  }