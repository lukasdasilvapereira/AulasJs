 // SETTIMEOUT AND SETINTERVAL
 
 
 function ativarContagem() {
     tempo = setTimeout(function () {
        console.log("E, ai")
    }, 1000)
 }

 ativarContagem();

 function pararContagem() {
    clearTimeout(tempo)
 }

 function novaContagem() {
    temp = setInterval(() => {
        var cronometro = document.getElementById("tempo").innerHTML;
        var soma = parseInt(cronometro) + 1;
        document.getElementById('tempo').innerHTML = soma;
    }, 1000);
 }

 function pareContagem() {
    clearInterval(temp)
 }

 // CLASSES

 class Carro{
   constructor(valor1, valor2, valor3) {
      this.marca = valor1;
      this.modelo = valor2;
      this.ano = valor3;
   }
   buzina() {
      return this.modelo + ": Biiiiiiii"
   }
 }

const uno = new Carro("Fiat", "Uno", 2001)
const gol = new Carro("Volkswagen", "Gol", 2013);

gol.ano = 2014

console.log(uno)
console.log(gol)
console.log(gol.buzina())
console.log(uno.buzina())

// MANIPULAÇÃO DE DATAS

let data = new Date();
console.log(data);

// ANO

let ano = data.getFullYear();

console.log(ano);

// MÊS

let mes = data.getMonth();

console.log(mes);


// DIA 1 - 31

let diaMes = data.getDate();
console.log(diaMes);

// DIA DA SEMANA

let diaSemana = data.getDay();

console.log(diaSemana);

// HORA

let hora = data.getHours();

console.log(hora);

// MINUTOS

let minutos = data.getMinutes();
console.log(minutos)

// SEGUNDOS

let segundos = data.getSeconds();
console.log(segundos);

// MILISEGUNDOS

let milisegundos = data.getMilliseconds();

console.log(milisegundos);

// DATA PADRAO BRASILEIRO

let dataBr = data.toLocaleString('pt-br');

console.log(dataBr);

// COMPARAR DATAS EX: vencimentos

var hoje = new Date();
var vencimento = new Date(2022, 0 , 15);

if(hoje > vencimento) {
   console.log("Sua conta está vencida");
} else {
   console.log("Ainda dá tempo , tudo certo!")
}
