
function buscarvalor(){

   const valorconta = parseFloat(document.getElementById("valorcontatxt").value);
   const valorporcentagem = parseFloat(document.getElementById("valorporcentagem").value);
   const boxresult = document.getElementById("resultado")



   if(valorporcentagem > 100){
         
    boxresult.textContent = "O valor informado ultrapassa 100% "

   }else{

    const result = (valorporcentagem / 100)*valorconta


   return result;

   }
   
   
   
   
}


function calcular(){

    const boxresult = document.getElementById("resultado")

    const result = buscarvalor()

    boxresult.textContent = `Valor da gorjeta é: $ ${result.toFixed(2)}`

}