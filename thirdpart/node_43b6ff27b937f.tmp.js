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
    setInterval(() => {
        var soma = 2 + 3;
    }, 1000);
 }

 novaContagem();