/* Uma função JavaScript é um bloco de código projetado para executar uma tarefa específica

é como uma pequena "fábrica" onde você faz uma entrada e ele te dá uma saída.

Pode ser encarado como um "mini-programa" projetado para fazer uma tarefa que vai contribuir para todo o código.

Uma função é executada quando algo a "invoca".


*/

//FUNÇÃO DE SOMA

function soma(valor1,valor2){
   return valor1 + valor2;
}
 

    document.getElementById("texto").innerHTML = soma(10,23);

//ou

function soma(valor1,valor2){
  return valor1 + valor2;
}

var total = soma(10,23);

alert(total);

//FUNÇÃO DE COTAÇÃO DO DÓLAR

function realParaDolar (real,cotacaoDolar) {
  return real * cotacaoDolar;
}

var total = realParaDolar(10, 5.08);

alert(total);

//

var valorReal = 7.89;
var cotacao = 5.08;

var total = realParaDolar(valorReal,cotacao);

alert("O valor em real é R$: "+ valorReal+" o valor em dólar U$ é: " + total);


function alertaHello() {
    alert("Olá pessoal");
}

alertaHello();

function paraCelsius(valorFahrenheit) {
  return (5/9) * (valorFahrenheit - 32);

}

var x = paraCelsius(77);

alert("a temperatura é de " + x + " graus Celsius");

function minhaFuncao(){
  var x = 2; // var ou let só é válida nesse {} em function
}


