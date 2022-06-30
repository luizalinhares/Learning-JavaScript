/* CLASSES EM JAVASCRIPT
CLASSES SAO UM CONCEITO ANTIGO EM PROGRAMAÇÃO,E SÃO UTILIZADAS EM VARIAS LINGUAGENS.
CLASSES SÃO COMO FABRICAS PARA CRIAR OBJETOS.
PODE-SE DIZER QUE SÃO FUNÇÕES ESPECIAIS PARA CRIAÇÃO DE OBJETOS
AS CLASSES EM JS USAM UM METODO CHAMADO constructor() para fabricar os objetos.

*/



//!usar sempre a primeira letra maiuscula para declarar a class
class Carro {
  constructor(valor1,valor2,valor3){
    this.marca = valor1;
    this.modelo = valor2;
    this.ano = valor3;
 

    }
    buzina(){
      return this.modelo + " buzinou: biibii";   //this.modelo para saber qual dos carros buzinou
  }
}

  /*const uno = new Carro("Fiat", "Uno",2022);
  console.log(uno);//carro = marca: "Fiat", modelo: "Uno",ano: 2022

  const ferrari = new Carro("f","ferrari","2021")
  console.log(ferrari.ano);
  console.log(ferrari.buzina());
*/

const uno = new Carro("Fiat", "Uno",2022);
 

  const ferrari = new Carro("f","ferrari","2021");
  console.log(ferrari);
  ferrari.ano(2017); //mudou o ano de 2021 para 2017
  console.log(ferrari)