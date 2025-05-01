let input = document.getElementById('ipt');
let btnAd = document.getElementById('botaoAdd');
let principal = document.getElementById('main')

function addTarefa() {
    let valor = input.value;

    if((valor !== "") && (valor !== null) && (valor !== undefined)) {
        let novoItem = ` <div class="item">
            <div class="item-icone">
                <i class="fa-regular fa-circle"></i>
            </div>
            <div class="item-nome">
               ${valor}
            </div>
            <div class="item-botao">
                <button class="delete">Deletar <i class="fa-solid fa-trash"></i></button>
            </div>
        </div>`

        // ADICIONAR NO TODO LIST
        principal.innerHTML += novoItem;

        // LIMPAR O ESPAÇO
        input.value = "";
        input.focus();
    }
}

// QUANDO EU CLICAR NO ENTER = 13 N PRECISO CLICAR NO ADICIONAR
input.addEventListener("keyup", function(event) {
    if(event, keycode === 13) {
        event.preventDefault();
        btnAd.click();
    }
})