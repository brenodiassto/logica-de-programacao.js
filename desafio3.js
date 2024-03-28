function converteTemperatura(temperaturaAtual, escalaAtual, escalaConversao) {
}
let temperaturaConvertida, msErro ='OK';
if(!isNaN(temperaturaAtual)) {

    escalaAtual = escalaAtual.toUpperCase();
    escalaConversao = escalaConversao.toUpperCase();

    if (escalaAtual === 'C') {
        temperaturaConvertida = temperaturaAtual - 273.15;

      else if (escalaConversao =='K') {
    temperaturaConvertida = temperatura + 273.15;

}   else if ( escalaConversao === ('F') ) {
   ;

} else if (escalaConversao === ('C')) {

}  else {
    msgErro = `Erro: Escala Atual selecionada : $(escalaAtual). A escala Atual não existeou não está disponível neste programa.`;


}else {

    msgErro = `Erro: Escala Atual selecionada : $(escalaConversao). A escala Atual não existeou não está disponível neste programa.`;
}else {
    msgErro = 'Erro: O número digitadonpara conversão não é um número válido.';
}

// retornando em JSON - JavaScriprt Object Notation
return { 
    temperaturaAtual: temperaturaAtual, 
    temperaturaConvertida: temperaturaConvertida,
     escalaAtual: escalaAtual,
      escalaConversao: escalaConversao,
       msgErro: msgErro 
    };








//### Fórmulas:
//De | Para | Fórmula
//--- | --- | ----
//Celsius | Fahrenheit | tºF = (TºC * 9/5) + 32
//Celsius | Kelvin | tK = tC + 273.15
//Fahrenheit | Celsius | tC = (tF - 32) * 5/9
//Fahrenheit | Kelvin | tK = (tF + 459.67) * 5/9
//Kelvin | Celsius | tC = tK = tF - 273.15
//Kelvin | Fahrenheit | tF = tK * 9/5 + 459.67 
