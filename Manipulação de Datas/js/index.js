/* manipular datas em javascript
*/

// comando base para pegar a data

let data = new Date();
//console.log(data); //anotação:imprime todas as informações da data de hoje

let ano = data.getFullYear();
//console.log(ano);//anotação:pegar o ano atual com 4 digitos

let mes = data.getMonth()
//console.log(mes); // anotação: pegar o mes atual como numeros de 0 ate 11 sendo janeiro 0 e dezembro 11

const mesesDoAno = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
let mesEscrito = mesesDoAno[data.getMonth()]
console.log(mesEscrito)
//anotação: mostrar o mês no formato escrito

 let diaMes = data.getDate();//pegar o dia do mês
 console.log(diaMes);

 //pegar o dia da semana
 let diaSemana = data.getDay();
 console.log(diaSemana); //sendo segunda 0 e domingo 6

 const diasDaSemana = ["Segunda","Terça","Quarta","Quinta","Sexta","Sabado"];
 let diaSemanaEscrito = diasDaSemana[data.getDay()];
 console.log(diaSemanaEscrito);
 
 // pegar a hora de 0 até 23 

 let hora = data.getHours();
 console.log(hora);

 //pegar os minutos de 0 ate 59
 let minutos = data.getMinutes();
 console.log(minutos);

 //pegar segundos de 0 ate 59

 let segundos = data.getSeconds();
 console.log(segundos);

 //pegar milisegundos de 0 ate 999
 let milisegundos = data.getMilliseconds;
 console.log(milisegundos);

 //pegar a data no padrao brasileiro DIA/MES/ANO
 /*let dataBR = data.toLocaleString('pt-BR', {dateStyle:'short'});// só a data
  console.log(dataBR);

  let dataBR = data.toLocaleString('pt-BR', {timeStyle:'short'});// só a hora
  console.log(dataBR)*/

  //pegar os valores separados 
  

  d = new Date();
  diaMes = d.getDate();
  mes = d.getMonth() + 1;
  ano = d.getFullYear();

  function addZero(x) { return x<10 ? '0' + x : '' +x;};

  let dataPadraoBR = addZero(diaMes) + "/" + addZero(mes) + "/" + ano;
  console.log(dataPadraoBR);


//comparar datas maior ou menor ex:vencimentos

var hoje = new Date();
var vencimento = new Date(2023/0/12); //vence em 12 de janeiro de 2023

if(hoje > vencimento){
  console.log("sua conta está vencida");
}else{
  console.log("ainda está dentro do prazo")
}

//DIFERENÇA ENTRE DUAS DATAS EM DIAS

var dataInicial = new Date();
var dataFinal = new Date(2022,6,18);

var diferencaTempo = dataFinal.getTime() - dataInicial.getTime();

var diferencaDias = Math.ceil(diferencaTempo / (24*60*60*1000));
console.log(diferencaDias + " dias");