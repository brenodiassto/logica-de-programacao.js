// arrays saõ como caixas com outras caixas ou valores que podem ser acessadas atraves dos seu íindice entre colchetes . o  primeiro índice sempre começara com 0.
//portanto um array com 4 posições tera um índice de 0 a 3 



// O array é heterogenio, ou seja podemos colocar qaulquer vslor dentro dele, ou seja, tipos de dados diferentes. Int, Float, String,Object, bolean

//realização do array:
//todos os índices são separados por virgulas como abaixo 
            // 0       1       2 
//  const arr = ["leaõ", "tartaruga", "tigre"];
//  arr [0] = "girafa"
//  arr[3] = "macaco";
//  arr [4] = 1025;
// arr [10] = "orangotango";


//  console.log(arr);


// ////////////////////////////////////PRIMEIRO MÉTODO DE ARRAY PUSH ///////////////////////////////////////////////////////

// ///////PUSH ADICIONA VALORES NO FINAL DA AARAY

// const pushArray = ['josé', 'maria', 'rodrigo', 'california']
// console.log(pushArray);

// pushArray [4] =  "guilherme"
// console.log(pushArray)

// pushArray.push("Mariana");
// console.log(pushArray);

// pushArray.push("Monica")
// console.log(pushArray);


// //////////////UNSHIFT  PERMITE ADICIONAR VALORES NO INICIO DA ARRAY///////////////////////////////////////////////////////
// pushArray.unshift("Cebolinha");
// console.log(pushArray);

// pushArray.unshift("Magali");
// console.log(pushArray);

// pushArray.unshift("teste", "magali")

// console.log (pushArray);


//////////////////////////////////////////METODO POP//////////////////////////////////////////

// MÉTODO POP RESPONSÁVEL POR EXCLUIR VALORES NO FINAL DE UM DETERMINADO ARRAY 

// const popArray = ["Fernando", "Fernando", "Eric", "Renata"]
// console.log (popArray);

// const popReturn = popArray.pop();
// console.log(popReturn);
// popArray.pop(popArray);
// //-------------------------------------------------------------------------------
// const shiftReturn = popArray.shift();
// console.log(shiftReturn);
// console.log(popArray);




///////////////////////////METODO SPLICE//////////////////////////////////////////
// permitir selecionar um indice e remover e adicionar um valor um seja ele fara uma (subistiuiçao)

// const splaceArray = ['Janeiro', "fevereiro", "abril", "junho"]
// console.log(splaceArray);

// splaceArray.splice(2, 0,"março");
// console.log (splaceArray);


// splaceArray.splice(4, 0, "maio");
// console.log(splaceArray);


// splaceArray.push("julho");
// console.log(splaceArray);




////////////////////////FILTER/////////////////////////////////////////////////////////////////////

// const filterArray= ['guilherme', 'leticia', 'leonardo', 'cassio'];
// console.log(filterArray);

// let novoArrayNomeFiltrado = filterArray.filter((nome) => {

// })
























///////////////////////////////////////////metdodo map 

//map nao modifica o array original, somente a funçao de calback vai modificar o array original e criara um novo array modificado 



// const arrayMap = [1 , 2, 3, 4, 5];
// console.log(arrayMap);


// const arrayModificado = arrayMap.map((mutiplicador) => {
//  return mutiplicador * 2;
// })


// console.log(arrayModificado);



/////////////for each

const forEachArray = ["Carlo", "Jose", 'Raimundo', 'batania'];
console.log(forEachArray);


forEachArray.forEach((nomes) => {
      return nomes;
})



/// crie uma array que receba nomes minimo 5 nomes 
// crie um segundo array que receba sobrenomes minimos 5 sobrenomes
//utilize metodos de arrays para  exibir os dois arrays em um só, retornando o nome e os sobrenome da pessoa  de acorodo com seus indices 


const Nomes = ["Jenifer", "Juliana", "Vagner", "Henrique", "Nelson"];

const Sobrenome = ["souza", "Silva", "Lima", "Celino", "Clemente"];

// Combinando os arrays e exibindo os nomes completos
const nomesCompletos = Nomes.map((nome, index) => `${nome} ${Sobrenome[index]}`);

console.log(nomesCompletos);