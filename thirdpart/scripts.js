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