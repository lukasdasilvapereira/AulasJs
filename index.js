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

let pessoa = "Dimitri";
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

var d, e, f;

d = 5;
e = 6
f = d + e;

var nome, sobrenome, nomeCompleto, idade;

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

//OPERADORES

// + - * / = ++ -- += -= && || ETC..

/* SÃO SEPARADOS EM 6 CATEGORIAS

1) ARITMÉTICOS
2) ATRIBUIÇÃO
3) SEQUÊNCIA
4) COMPARAÇÃO
5) CONDICIONAL
6) LÓGICOS

*/

var valor1, valor2, valor3;
valor1 = 5;
valor2 = 6;

valor3 = valor1 + valor2; // ARITMÉTICO E ATRIBUIÇÃO "=" "+"

console.log(valor3)

// INCREMENTO/DECREMENTO "++(INCREMENTO)" "--(DECREMENTO)"

valor3 = ++valor1;

console.log(valor3);
console.log(`O valor1 ficou: ${valor1}`);

// ATRIBUIÇÃO

valor1 += valor2 // valor1 = valor1 + valor2
valor1 -= valor2 // valor1 = valor1 - valor2

// FUNCIONA PRA TODOS OS OPERADORES ARITMÉTICOS

// COMPARAÇÃO : TRUE OR FALSE

var valor1, valor2, valor3;
valor1 = 10;
valor2 = 10;

valor3 = (valor1 == valor2); // "==" OPERADOR DE COMPARAÇÃO 
console.log(valor3);

valor3 = (valor1 === valor2); // "===" OPERADOR DE COMPARAÇÃO PRA SABER SE SÃO IGUAIS EM EXATAMENTE TUDO
console.log(valor3);

valor3 = (valor1 != valor2); // "!=" OPERADOR DE COMPARAÇÃO "DIFERENTE"
console.log(valor3);

valor3 = (valor1 !== valor2); // "!==" OPERADOR DE COMPARAÇÃO "DIFERENTE TOTALMENTE"
console.log(valor3);

valor3 = (valor1 > valor2); // ">" OPERADOR DE COMPARAÇÃO "MAIOR/MENOR/MAIOR-IGUAL/MENOR-IGUAL"
console.log(valor3);

// < > <= >=

// TERNÁRIO "?"
var idade, eleitor;

idade = 18;

eleitor = (idade < 18) ? "Não Eleitor" : "Sim, Eleitor"; //CONDIÇÃO + ? + SE FOR VERDADEIRO + SE FOR FALSO

console.log(`A resposta é: ${eleitor}. A idade dele é de ${idade} anos`)

// LÓGICOS "||" "&&" "!"

var idade, eleitor, resultado;

idade = 65;

eleitor = (idade < 18) ? "Não Eleitor" : "Sim, Eleitor"; //CONDIÇÃO + ? + SE FOR VERDADEIRO + SE FOR FALSO

resultado = (idade > 60 && idade < 70); // TRUE OR FALSE "E"
resultado = (idade > 60 || idade < 70); // TRUE OR FALSE "OU"
resultado = !(idade === 60); // TRUE OR FALSE "NÃO"

console.log(resultado);

// FUNÇÕES

// FUNÇÃO É UM BLOCO DE CÓDIGO PRA RESOLVER UM PROBLEMA, ELAS SÃO CHAMADAS AO SER INVOCADAS

// FUNÇÃO DE SOMA
function soma(valor1, valor2) {
    return valor1 + valor2;
}

// FUNÇÃO DE COTAÇÃO DE DOLAR

function realParaDolar(real, cotacaoDolar) {
    return real * cotacaoDolar
}

var dinheiroMeu = 20;
var cotacao = 6;

var totali = realParaDolar(dinheiroMeu, cotacao);

var total = soma(5, 5);

console.log(total);

console.log(`O valor em real é ${dinheiroMeu}, o valor em dólar é: U$ é ${totali}`);

//FUNÇÃO PARA ONCLICK

function alertaHello() {
    console.log("E, aí!");
}

alertaHello();

// FUNÇÃO CONVERTE GRAUS

function paraCelsius(valorFahrenheit) {
    return (5 / 9) * (valorFahrenheit - 32);
}

var y = paraCelsius(77);

console.log(`A temperatura é de ${y} graus celsius`);

// OBJETOS 

// SÃO VARIAVEIS COM VÁRIOS VALORES DENTRO CHAMADOS DE PROPRIEDADES

// OBJETOS TBM PODEM TER MÉTODOS

const carro = {
    marca: "ford",
    modelo: "ka",
    ano: 2015,
    placa: "ABC-1234",
    buzina: function () { console.log("BIIIIIIII") },
    completo: function () {
        return `O ano do carro é: ${this.ano}, e o modelo é: ${this.modelo}!`;
    }
};

console.log(carro.marca);

carro.buzina();

console.log(carro.completo()); // Isso sim vai mostrar o texto no console




