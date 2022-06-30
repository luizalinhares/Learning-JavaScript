/*JSON - Javascript object Notification

é basicamente uma forma de converter um objeto em texto ou um texto em um objeto

é usado principalmente para transmitir dados entre sistemas de forma simples

utiliza-se dois métodos para trabalhar com JSON:

JSON.parse() -> converte texto no padrão JSON em objetos
JSON.stringify() -> Converte objetos em texto padrão JSON

*/

/*const carro = {
  marca: "Fiat",
  modelo: "uno",
  ano: 2022,
  cor:["preto","vermelho","cinza","branco"]
}

//converteu para texto JSON
let texto = JSON.stringify(carro);


//colocou o texto no nosso html
document.getElementById('area').innerHTML = texto;

//converteu o texto em objeto
let obj = JSON.parse(texto);

// pegou o valor do objeto
console.log(obj.modelo);
console.log(obj.ano);
console.log(obj.marca);
console.log(obj.cor[3])*/

const ajax = new XMLHttpRequest();
ajax.open( 'GET','http://viacep.com.br/ws/31150190/json/' );
ajax.send();

ajax.onload = function () {
  document.getElementById('area').innerHTML = this.responseText;
  let obj = JSON.parse(this.responseText);
  alert(obj.ddd);
}