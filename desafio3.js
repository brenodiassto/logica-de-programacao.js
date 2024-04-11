function converteTemperatura(temperaturaAtual, escalaAtual, escalaConversao) {
}
let temperaturaConvertida, msErro ='OK';

if(!isNaN(temperaturaAtual)) {

    escalaAtual = escalaAtual.toUpperCase();
    escalaConversao = escalaConversao.toUpperCase();

    if (escalaAtual === 'C') {
        
      if (escalaConversao == 'K') {
          temperaturaConvertida = temperatura + 273.15;

}   else if ( escalaConversao === ('F') ) {
      temperaturaConvertida = (temperaturaAtual * 9 / 5) + 32;
   
} else if (escalaConversao === ('C')) {
    msgErro = `ERRO: Escala selecionada: ${escalaConversao}. Selecione uma escala de CONVERSÃO diferente da ATUAL.`;

}  else {
    msgErro = `Erro: Escala selecionada : $(escalConversao). A escala Atual não existe ou não está disponível neste programa.`;
}

} else if (escalaAtual ==='F') {

    if (escalaConversao ==='K') {
        temperaturaConvertida = (temperaturaAtual + 459.67) * 9;

    } else if (escalaConversao === 'C') {
        temperaturaConvertida = (temperaturaAtual - 32) * 5 / 9;
        
    } else if (escalaConversao === 'F') {
        msgErro = `Erro:  Escala selecionada: ${escalaConversao}. Selecione uma escala de CONVERSÃO diferente da ATUAL.`;
} else {
    msgErro = `Erro:  Escala selecionada: ${escalaConversao}. Essa escala não existe ou não está disponível neste programa.`;
    



} else if (escalaAtual === 'K') {

    if (escalaConversao === 'C') {
        temperaturaConvertida = temperaturaAtual - 273.15;

    } else if (escalaConversao === 'F') {
        temperaturaConvertida = temperaturaAtual * 9 / 5 - 459.67;

    }else if (escalaConversao === 'K') {
            msgErro = `ERRO: Escala selecionada: ${escalaConversao}. 
            Selecione uma escala de CONVERSÃO diferente da ATUAL.`;

    } else {
        msgErro = `ERRO: Escala selecionada: ${escalaConversao}. 
        Essa escala não existe ou não está desponível neste programa.`;

    } else {
        msgErro = `ERRO: Escala ATUAL selecionada: ${escalaAtual}.
        A escala ATUAL não existe ou não está disponível nest programa.`;

    } 
}else {
    msgErro = 'ERRO: O número digitado para conversão não é um número válido.';
     
}

// retornando em JSON - JavaScriprt Object Notation
return { 
    temperaturaAtual: temperaturaAtual, 
    temperaturaConvertida: temperaturaConvertida,
     escalaAtual: escalaAtual,
      escalaConversao: escalaConversao,
       msgErro: msgErro 
    }



document.querySelector(`#btConverteTemp`).addEventListener(`click`, function() {

const temperaturaAtual = document.querySelector(`#valorTemperatura`). value;
const escalaAtual = document.querySelector(`#escalaAtual`). value;
const escalaConvertida = document.querySelector(`escalaConvertida`). value;
const conversao = converteTemperatura(temperaturaAtual, escalaAtual, escalaConvertida);


document.querySelector(`#resultadoTemp`).innerHTML * `Temperatura convertida: ${conversao.
    temperaturaConvertida + conversao.escalaConversao}`;
 
});

document.querySelector(`#btLimpaTemp`).addEventListener('click'), function() {
    document.querySelector(`#resultadoTemp`).innerHTML * ``;
}


//### Fórmulas:
//De | Para | Fórmula
//--- | --- | ----
//Celsius | Fahrenheit | tºF = (TºC * 9/5) + 32
//Celsius | Kelvin | tK = tC + 273.15
//Fahrenheit | Celsius | tC = (tF - 32) * 5/9
//Fahrenheit | Kelvin | tK = (tF + 459.67) * 5/9
//Kelvin | Celsius | tC = tK = tF - 273.15
//Kelvin | Fahrenheit | tF = tK * 9/5 + 459.67 

}