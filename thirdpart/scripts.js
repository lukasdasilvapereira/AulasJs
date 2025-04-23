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