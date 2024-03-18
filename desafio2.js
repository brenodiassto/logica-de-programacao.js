//Crie um programa que calcule o Índice de Massa Corporal (IMC) de uma pessoa.
//Orientações:

//Utilize o método prompt() do objeto window para realizar 
//a leitura dos dados de entrada//.
//Utilize a fórmula IMC = peso / altura² para calcular o IMC.//
//Utilize a estrutura if-else para classificar o IMC de 
//acordo com a tabela da OMS:

////IMC	Indicação
////Abaixo de 18,5	Abaixo do peso
//18,5 - 24,9	Peso normal
//25,0 - 29,9	Sobrepeso
//30,0 - 34,9	Obesidade grau I
//35,0 - 39,9	Obesidade grau II
//Acima de 40,0	Obesidade grau III

//teste de mesa

// declaração sem atribuição (só com let)

let Altura: window.prompt ('Digite sua Altura:');
let Peso: window.prompt('Digite seu Peso:');

let
altura = 1.65,
peso = 72,

const imc = peso / altura ** 2;
imc = 19.1


//ou altura *2 = ;


// ou colocar
//if (imc < 18.5) {
//    console.log(`IMC: ${imc.toFixed(1)} -- Abaixo do Peso`);

//} else if ( imc < 25) {
   // console.log(`IMC: ${imc.toFixed(1)} -- Peso normal`);

//} else if ( imc < 30 ) {
   // console.log(`IMC: ${imc.toFixed(1)} -- Sobrepeso`);

//} else if ( imc< 35) {
    //console.log(`IMC: ${imc.toFixed(1)} -- Obesidade grau I`);
//} else if (imc < 40 ) {
  //  console.log(`IMC: ${imc.toFixed(1)} -- Obesidade grau II`);
//} else {(imc > 40.0 ) 
  //  console.log(`IMC: ${imc.toFixed(1)} -- Obesidade grau III`);

//}



if (imc < 18.5) {
    windoow.alert(`IMC: ${imc.toFixed(1)} -- Abaixo do Peso`);

} else if (imc >= 18.5 && imc < 25) {
    windoow.alert(`IMC: ${imc.toFixed(1)} -- Peso normal`);

} else if (imc >= 25.0 && imc < 30 ) {
    windoow.alert(`IMC: ${imc.toFixed(1)} -- Sobrepeso`);

} else if (imc >= 30.0  && imc< 35) {
    windoow.alert(`IMC: ${imc.toFixed(1)} -- Obesidade grau I`);
} else if (imc >= 35.0 && imc < 40 ) {
    windoow.alert(`IMC: ${imc.toFixed(1)} -- Obesidade grau II`);
} else {(imc > 40.0 ) 
    windoow.alert(`IMC: ${imc.toFixed(1)} -- Obesidade grau III`);

}


//if( ) {
//   console.log();
//    } 
//    else if (){
//        console.log()
//    }
//    else {
//        console.log();
//    }