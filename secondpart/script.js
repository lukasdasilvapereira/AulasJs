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

// MÉTODO JOIN

//document.getElementById("teste").innerHTML = pessoa.join(" * ")

// MÉTODO POP

pessoa.pop() // IRÁ REMOVER O ULTIMO ELEMENTO POSTO
//document.getElementById("teste").innerHTML = pessoa.join(" * ")

// MÉTODO PUSH

pessoa.push("Qualquer coisa");
//document.getElementById("teste").innerHTML = pessoa.join(" * ") // VAI ADICIONAR O "QUALQUER COISA"

// MÉTODO SHIFT

pessoa.shift(); // VAI REMOVER O PRIMEIRO ITEM DA LISTA

// MÉTODO UNSHIFT

pessoa.unshift("Dimitri") //VAI POR ISSO NA POSIÇÃO 0

// MÉTODO SPLICE

pessoa.splice(1, 0, "Item adicionado 1", "Item adicionado 2") // O PRIMEIRO É A POSIÇÃO QUE EU QUERO QUE FIQUE O ITEM E O SEGUNDO É A QUANTIDADE DE ITEMS Q EU QUERO Q SEJAM REMOVIDOS


const lista1 = ["arroz", "feijão", "macarrão", "leite"];
const lista2 = ["Suco", "Refrigerante", "Carne"];
const lista3 = ["Salgadinho"];

const superLista = lista1.concat(lista2, lista3); // CONCAT É O MÉTODO DE CONCATENAÇÃO;

console.log(superLista);

// MÉTODO SLICE

const jogadores = ["Biro Biro", "Ribamar", "Pelé", "Maradona"];
const craques = jogadores.slice(2,6) //PEGOU DA POSIÇÃO 2 PRA FRENTE

// MÉTODO SORT

const joga = jogadores.sort(); // VAI DEIXAR EM ORDEM ALFABÉTICA

// MÉTODO REVERSE

jogadores.sort();
jogadores.reverse(); // VAI DEIXAR DE TRÁS PRA FRENTE

// NÚMEROS EM ARRAY

const numeros = [40, 100, 1 , 5, 25 , 10];

function MaiorNumero(array) {
    return Math.max.apply(null, array); // VAI BUSCAR O MAIOR NÚMERO
}

function MenorNumero(array) {
    return Math.min.apply(null, array); //VAI BUSCAR O MENOR NÚMERO
}


// MÉTODO FILTER

const maior20 = numeros.filter(filtragem);

function filtragem(value, index , array) {
    return value > 20;
}

console.log(maior20);

// IF E ELSE

var interruptor = "on";

if(interruptor == "on") {
    console.log("A lampada está ligada");
} else {
    console.log("A lampada está desligada");
}

var hora = new Date().getHours();

if(hora < 12) {
    console.log("Bom dia");
} else if (hora < 18) {
    console.log("Boa tarde");
} else {
    console.log("Boa noite")
}

function verificar() {
    let nome = document.getElementById("nome").value;
    let p = document.getElementById("teste");
    if(nome == "" || nome == null) {
        p.innerHTML = "Digite um nome";
        p.style.color = "red"
    } else {
        p.innerHTML = `Parabéns ${nome}`;
        p.style.color = "green"
    }
}



