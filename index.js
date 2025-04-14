// TIPOS DE SAÍDA

//document.getElementById("texto").innerHTML = 
"Meu primeiro texto <b>JS</b>"; // JS IGNORA QUEBRA DE LINHAS
//alert(10 + 5);
console.log("Olá, isso é um console.log");


// DECLARAÇÕES

//let a,b,c;
//a = 5;
//b = 6;
//c = 7;

let pessoa = "Dimitri" ;
let pesso = "Dimitri"; // JS IGNORA ESPAÇOS EM BRANCOS

function minhafuncao() {
    document.write('Oi <u>escrito com document.write</u>')
    document.write('Oi <u>escrito com document.write</u>')
    document.write('Oi <u>escrito com document.write</u>')
    document.write('Oi <u>escrito com document.write</u>')
}

// SINTAXES

console.log(5 + 5); // JS ENTENDE COMO SOMAS DE NÚMEROS

console.log("5 + 5"); // JS ENTENDE COMO TEXTO

let a = 5;
let b = 6;
let c = a - b;

console.log(c);

// JS É SENSÍVEL A LETRA MAÍSCULA

//var primeiro-nome ISSO SERIA ERRADO PQ O - É USADO PARA SUBTRAÇÃO
var primeiroNome; // ASSIM SERIA O CERTO

/* 

ISSO É UM COMENTÁRIO

*/

//VARIÁVEIS

// NO JS POSSUIMOS VAR LET E CONST OS MAIS USADO SÃO LET E CONST 

var d,e,f;

d = 5;
e = 6
f = d + e;

var nome , sobrenome, nomeCompleto, idade;

nome = "Lucas";
sobrenome = "Pereira";
idade = 18;
nomeCompleto = nome + " " + sobrenome;

pessoa = nome + " " + idade; 

//document.getElementById("texto").innerHTML = nomeCompleto

// A DIFERENÇA ENTRE A VAR PRA OUTRAS , É QUE O VAR PODE SER REEDECLARADO

let x = 10;
{
    let x = 2;
}

console.log("x")

//VAI SER MOSTRADO O NÚMERO 10 PQ ELE ESTÁ NO ESCOPO GERAL, NO VAR NÃO POSSUI DIFERENÇA, IRIA MOSTRAR OQ ESTÁ NO ESCOPO, NO CONST SERIA O MESMO QUE O LET
