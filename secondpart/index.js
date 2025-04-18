// ARRAY É UMA VARIÁVEL QUE VOCE PODE GUARDAR VÁRIOS ELEMENTOS DENTRO DELE

const lista = ["arroz", "feijão", "macarrão", "leite"];

// AS POSIÇÕES COMEÇA DO NUMERO 0 LISTA [0] SERIA O ARROZ

console.log(lista[0]);


let x = lista[3];
console.log(x);

lista[0] = "café";
console.log(lista);

const pessoa = ["Dimitri", "Teixeira", 30, "Professor"];// Array
const person = {nome: "Lucas", sobrenome: "Pereira", idade: 18}; //Objeto

console.log(pessoa.length);
console.log(pessoa[pessoa.length - 1]); // VAI MOSTRAR O ULTIMO

pessoa.push("Brasileiro");
console.log(pessoa);

console.log(Array.isArray(pessoa))// Saber se realmente é um array