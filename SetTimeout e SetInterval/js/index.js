/*
EVENTOS DE TEMPO COM JAVASCRIPT
OS EVENTOS DE TEMPO PERMITEM A EXECUÇÃO DO CÓDIGO EM INTERVALOS DE TEMPO ESPECIFICADOS.ESSES INTERVALOS DE TEMPO SÃO CHAMADOS DE EVENTOS DE CRONOMETRAGEM.
OS DOIS MÉTODOS-CHAVE PARA USAR COM JAVASCRIPT SÃO:

setTimeout(function,tempo em milissegundos)
->EXECUTA UMA FUNÇÃO DEPOIS DE ESPERAR UM NÚMERO ESPECIFICADO DE MILISSEGUNDOS.

setInterval(function,milliseconds)
-> É o mesmo que setTimeout(),mas repete a execução da função continuamente.
*/




/*function ativarContagem(){
  document.getElementById('tempo').innerHTML="começou a contagem";
  setTimeout(function(){
    document.getElementById('tempo').innerHTML="executou o setTimeout";
   },3000);
}
*/

//1000ms correspondem a 1s

/*function ativarContagem(){
  document.getElementById('tempo').innerHTML="começou a contagem";
  setTimeout(function(){
    document.getElementById('tempo').innerHTML="executou o setTimeout";
   },3000);
}
*/

/*function ativarContagem(){
  document.getElementById('tempo').innerHTML="começou a contagem";
  setTimeout(function() {
    document.body.style.backgroundColor="blue";
   },5000);
}
*/

//setimeout ativa a função apenas uma vez quando der o tempo especificado

/*parar contagem

tempo = setTimeout(function(){
  document.getElementById('tempo').innerHTML="executou o setTimeout";
 },3000);

function pararContagem(){
  document.getElementById("tempo").innerHTML="parou a contagem";
  clearTimeout(tempo);
}
*/


//set interval
/*
function ativarContagem(){
 tempo = setInterval(function(){
  var cronometro = document.getElementById('tempo').innerHTML;
  var soma = parseInt(cronometro) +1 //cronometro
  document.getElementById('tempo').innerHTML = soma;
 },1000);
}

function pararContagem(){

    clearInterval(tempo);t.getElementById('tempo').innerHTML;   //pararacontagem
 
}
*/



/* contagem decrescente

function ativarContagem(){
 tempo = setInterval(function(){
  var cronometro = document.getElementById('tempo').innerHTML;
  var soma = parseInt(cronometro) -1
  document.getElementById('tempo').innerHTML = soma;
 },1000);
}

*/

//quando chegar no zero parar

function ativarContagem(){
  tempo = setInterval(function(){
   var cronometro = document.getElementById('tempo').innerHTML;
   var soma = parseInt(cronometro) -1
   if(soma===0){
    document.getElementById('tempo').innerHTML="tempo esgotado"
    pararContagem()
   }else{
    document.getElementById('tempo').innerHTML = soma;
   }
   
  },1000);
 }

