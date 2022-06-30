
class Carro {
  constructor(valor1,valor2,valor3){
    this.marca = valor1;
    this.modelo = valor2;
    this.ano = valor3;
 

    }
    buzina(){
      return this.modelo + " buzinou: biibii";
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
  ferrari.ano(2017);
  console.log(ferrari)
