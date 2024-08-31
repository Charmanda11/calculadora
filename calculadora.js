const campo1 = document.querySelector("#campo1");
const campo2 = document.querySelector("#campo2");
const seletor = document.querySelector("#operação");
let resposta = document.querySelector("#resposta");

seletor.addEventListener("change",calcular);
campo1.addEventListener("keyup",calcular);
campo2.addEventListener("keyup",calcular);

function calcular(){
    if(campo1.value==='' || campo2.value===''){
        resposta.classList.add("problema");
        resposta.innerHTML="Campo vazio";
        setTimeout(()=>{
            resposta.classList.remove("problema");
            resposta.innerHTML='';
    },3000);
}
    
else{
    const valor1 = parseInt(campo1.value);
    const valor2 = parseInt(campo2.value);
    const operação = seletor.value;
if(operação==="somar")
        resposta.innerHTML = valor1 + valor2;
if(operação==="subtrair")
        resposta.innerHTML = valor1 - valor2;
if(operação==="multiplicar")
        resposta.innerHTML = valor1 * valor2;
if(operação==="dividir")
        resposta.innerHTML = valor1 / valor2;
}
    }
        