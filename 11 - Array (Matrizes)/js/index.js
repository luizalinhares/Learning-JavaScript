/* ARRAYS

OS ARRAYS JAVASCRIPT SÃO USADOS PARA ARMAZENAR VÁRIOS VALORES EM UMA ÚNICA VARIÁVEL. DIFERENTE DOS OBJETOS, QUE FUNCIONAM COM
PRIPRIEDADES OU NOMES QUE VOCE DÁ PARA OS ITENS DENTRO DELE, OS ARRAYS NÃO POSSUEM PROPRIEDADES. O ITEM DENTRO DELE É ENCONTRADO PELA POSIÇÃO.

IMAGINE UM ARRAY COMO UMA LISTA DE ITENS, COM CONTROLEM POR ORDEM DE POSIÇÃO DENTRO DELE.

EX: const lista = ["arroz","feijão", "macarrão", "leite"];
0arroz
1feijão
2macarrão
3leite

A LISTA [0] (LISTA NA POSIÇÃO 0) VAI CONTER O VALOR "arroz".
A LISTA [1] (LISTA NA POSIÇÃO 1) VAI CONTER O VALOR "feijão".

e assim por diante.

*/

var item1 ="arroz";
var item2 ="feijão";
var item3 ="macarrão";
var item4 ="leite";

//const lista = ["arroz","feijão","macarrão","leite"];

alert = (lista[0]);//arroz

//ou

const lista = [];
lista[0] = "arroz";
lista[1] = "feijão";
lista[2] = "macarrão";
lista[3] = "leite";

const lista = newArray("arroz","feijão","macarrão","leite")

const lista = ["arroz","feijão","macarrão","leite"]
let x = lista[3];//leite
alert(x);//leite

const lista = ["arroz","feijão","macarrão","leite"]

lista[0]= "Café";
alert(lista[0]);

console.log(lista);

//

const pessoa = ["Luiza","Linhares", 23,"1999"]; //array


//const pessoa = {nome:"luiza", sobrenome:"Linhares",idade:23};       //objeto 


//pessoa.nome;//luiza


//matriz(array)
pessoa[0];//luiza

//matriz e array são a mesma coisa!!!!!


//length serve para indicar quantos itens tem em uma matriz
alert(pessoa.length);//3

//para saber qual é o ultimo de item de uma array que possui muitos itens

alert(pessoa[pessoa.lenght -1]);//23

//para adicionar um item a matriz

pessoa.push("Brasileira");

console.log(pessoa);

//outra forma

//pessoa[pessoa.length] = "Solteira";


//para saber se é uma array

alert(Array.isArray(pessoa));//true

//const x = "Luiza";

//alert(Array.isArray(x));//false

