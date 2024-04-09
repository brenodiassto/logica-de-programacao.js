
# Exercícios

## 1. Tipo de um Triângulo

 Escreva     um     programa que leia     as     medidas     dos     lados     de     um     triângulo     e    escreva    se    ele    é    Equilátero,    Isósceles    ou  Escaleno. 
// Sendo    que:    
// − Triângulo    Equilátero:    possui    os    3    lados    iguais.
// − Triângulo    Isóscele:    possui    2    lados    iguais.
// − Triângulo    Escaleno:    possui    3    lados    diferentes.


//entrada de dados
// = informar as 3 medidas de um triangulo

//processamento
// = verificar se o triangulo tem os 3 lados igual ou 2 lados iguais ou os 3 lados diferentes
// = para isso temos que utilizar os operadores lógicos && || ! 

//saida de dados
// = informar se o triangulo é equilátero, escaleno ou isócele
// = motrar a saída do programa na console
function verificarTriangulo() {

    const
        lado1 = Number(window.prompt('Valor do lado 1:')),
        lado2 = Number(window.prompt('Valor do lado 2:')),
        lado3 = Number(window.prompt('Valor do lado 3:'));

    if (lado1 < (lado2 + lado3) && lado2 < (lado1 + lado3) && lado3 < (lado1 + lado2)) {

        if (lado1 === lado2 && lado2 === lado3) {
            console.log('O triângulo é Equilátero');

            // Teste do Isósceles: (lado1 === lado2 && lado2 !== lado3 || lado2 === lado3 && lado3 !== lado1 || lado1 === lado3 && lado3 !== lado2) 

            // simplificação da lógica ⬇

        } else if (lado1 === lado2 || lado2 === lado3 || lado3 === lado1) {
            console.log('O triângulo é Isósceles');
        } else {
            console.log('O triângulo é Escaleno');
        }

    } else {
        console.log('A forma não é um triângulo');
    }

}

## // Uma loja fornece 10% de desconto para funcionários e 5% de desconto para clientes vips. 
// Faça um programa que calcule o valor total a ser pago por uma pessoa. O programa deverá ler o
// valor total da compra efetuada e um código que identifique se o comprador é um cliente comum (1), funcionário (2) ou vip (3).


//entrada de dados
// = determinar se o cliente é 1- cliente, 2- funcionário e 3-vip
// = informar o total da compra 

//processamento de dados
// = usar a estrutura switch case para determinar se é cliente, funcionário ou vip

//saída de dados
// = se for cliente não haverá desconto
// = se for funcionário terá 10% de desconto
// = se for vip terá 5% de desconto

## // Desenvolva um programa que recebe do usuário, o placar de um jogo de futebol (os gols de cada time) e informa se o resultado foi um empate, se a vitória foi do primeiro time ou do segundo time.


//entrada de dados
// = informar os dois times de futebol
// = informar o placar do jogo

//processamento
// = realizar a validação através das estruturas condicionais
// = verificar se os times ganharam, perderam ou empataram

//saida
// = informar o resultado do jogo de futebol
const placar = '3x2';
const [golsTime1, golsTime2] = placar.split('x');

console.log(`COR - ${golsTime1} x ${golsTime2} - PAL`);

// não tem a ver com o futebol, é só outro exemplo
const [nome, sobrenome] =  'João Roccella'.split(' ');

console.log(`Nome: ${nome} - Sobrenome: ${sobrenome}`);

##// Escreva um algoritmo que permita a leitura dos nomes de 10 pessoas e armazene os nomes lidos em um vetor. Após isto, o algoritmo deve permitir a leitura de mais 1 nome qualquer de pessoa (para efetuar uma busca) e depois escrever a mensagem ACHEI, se o nome estiver entre os 10 nomes lidos anteriormente (guardados no vetor), ou NÃO ACHEI caso contrário.

function buscarNome() {

    let nomes = [];
    
    for (let i = 0; i < 10; i++) {
        
        nomes[i] = window.prompt('Digite um nome');
        // nomes.push(window.prompt('Digite um nome'))
    
    }

    const nomeBuscado = window.prompt('Digite o nome que deseja buscar');

    // if (nomes.includes(nomeBuscado))
    if (nomes.indexOf(nomeBuscado) >= 0) {

        window.alert('ACHEI');

    } else {
        
        window.alert('NÃO ACHEI');
        // nomes.indexOf(nomeBuscado) retorna -1 se for falso
    }

}
## // Um posto está vendendo combustíveis com a seguinte tabela de descontos:



// Álcool:
// . até 20 litros, desconto de 3% por litro Álcool
// . acima de 20 litros, desconto de 5% por litro

// Gasolina:
// . até 20 litros, desconto de 4% por litro Gasolina
// . acima de 20 litros, desconto de 6% por litro

// Escreva um algoritmo que leia o número de litros vendidos e o tipo de combustível (codificado
// da seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente
// sabendo-se que o preço do litro da gasolina é R$ 5,30 e o preço do litro do álcool é R$ 4,90.

// Dica: utilize switch case, operadores lógicos e relacionais e estrutura de condição para otimizar o algorítimo.


//entrada de dados
// = selecionar se deseja abastecer com alcool ou com gasolina;
// = selecionar a quantidade de litros que o usuário deseja;

//processamento de dados
// = switch case para gasolina ou alcool

//saida de dados
// = mostrar a porcentagem de desconto se for alcool ou se for gasolina

@@ -0,0 +1,15 @@
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercícios</title>
</head>
<body>

    <script src="Exercicios/calculoTriangulo.js"></script>
    <script>
        verificarTriangulo();
    </script>
</body>
</html>