# logica-de-programacao.js
lógica de programação JavaScript

## operadores aritimeticos.js

~~~js

const numero1 = 40;
const numero2 = 20;

~~~js

A palavra `const` é utilizada para declaração de variáveis que não vão ser reatribuidas (não permite redistribuição).

Aqui declaramos duas constantes que serão calculadas no bloco a seguir.

~~~js

console.log(`Os números das operações são ${numero1} e ${numero2}`);
console.log(`A soma dos números é ${numero1 + numero2}`);
console.log(`A subtracao dos números é ${numero1 - numero2}`);
console.log(`A divisao dos números é ${numero1 / numero2}`);
console.log(`A multiplicacao dos números é ${numero1 * numero2}`);
console.log(`O resto ds divisao dos números é ${numero1 % numero2}`);
console.log(`O numero1 elevado à potência do número2 é ${numero1 ** numero2}`);

~~~

Entrar em cada uma das operações, temos um operador aritimético:

* `+` -> soma
* `-` -> subtração
* `*` -> multiplicação
* `/` -> divisão
* `%` -> resto


## operadores-atribuiçao.js


~~~js
let numero = 10;
~~~

Declaramos a variável `numero`usando a palavra `let`, pois essa variável será **reatribuída** ao longo do nosso código.
Em seguida, fazemos uma série de reatrinuições usando os operadores de atribuição.

~~~js
console.log(`O numero é inicialmente igualmente: ${numero}`);
console.log(`Após reatribuir somando o número 10: ${numero += 10}`);
console.log(`Reabribuindo e subtraindo 10: ${numero -= 10}`);
console.log(`Reabribuindo e multiplicando 10: ${numero *= 10}`);
console.log(`Reabribuindo e dividindo 10: ${numero /= 10}`);
console.log(`${numero = numero % 10}`);
console.log(`Reatribuindo para o resto da divisão por 10: ${numero %= 10}`);
console.log(`Incremento o número em 1: ${++ numero}`);
console.log(`Decremento o número em 1: ${-- numero}`);
console.log(`O numero final é igual a ${numero}`);
~~~

Operadores de atribuição:

* `+=` -> atribuição com soma
* `-+` -> atribuição com subtração
* `*+` -> atribuição com multiplicação
* `/=` -> atribuição com divisão
* `%=` -> atribuição com resto da divisão
* `++` -> atribuição com **incremento 1** (pode ser *pré* ou *pós* incrementado)
          Ex.: `numero ++` (pós-incremento) ou  `++ numero` (pré-incremento) 

* `--` -> atribuição com **decremento 1** (pode ser *pré* ou *pós* decremento)
          Ex.: `numero --` (pós-decremento) ou  `-- numero` (pré-decremento) 

## operadores-comparacao.js

Neste arquivo conhecemos os operadores de comparação e a estrutura lógica de decisão **if-else**.

~~~js
 if(condicao){
        console.log(`VERDADEIRO`);
     }  else {
        console.log(`FALSO`);
     }
     ~~~

     Esta estrutura exibe no console se a condição testada é verdadeira ou falsa. A condição armazena o resultado da **comparação entre duas variáveis**, como segue:

        ~~~js
         * Operadores de comparacao
     * != não é igual = NÃO
     * == é igual
     * >  maior que
     * <  menor que        
      >= maior ou igual
    * <= menor ou igual
    * === é estritamente igual (valor E tipo)
    * !== não é estritamente igual (valor E tipo)
    ~~~


     