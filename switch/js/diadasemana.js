function diaDaSemana() {
  var dia = new Date().getDay();
  console.log(dia);


switch (dia) {
  case 1:
   //o  que aconte
   document.getElementById("teste").innerHTML= "Hoje é segunda-feira"
  break;
  case 2:
  // oqueacontece
  document.getElementById("teste").innerHTML= "Hoje é terça-feira"
  break;
  case 3:
    //oqueacontece
    document.getElementById("teste").innerHTML= "Hoje é quarta-feira"
    break;

    case 4:
    //oqueacontece
    document.getElementById("teste").innerHTML= "Hoje é quinta-feira"
    break;
    
    case 5:
      //oqueacontece
      document.getElementById("teste").innerHTML= "Hoje é sexta-feira"
      break;
      

    default:
  //oqueacontece
  document.getElementById("teste").innerHTML = "Não sei que dia é..."; }

}


