let input = document.getElementById('ipt');
let contador = 0
let btnAd = document.getElementById('botaoAdd');
let principal = document.getElementById('main')

function addTarefa() {
    let valor = input.value;

    if((valor !== "") && (valor !== null) && (valor !== undefined)) {

        ++contador;

        let novoItem = ` <div  id="${contador}"class="item">
            <div onclick="marcar(${contador})" class="item-icone">
                <i id="icone_${contador}" class="fa-regular fa-circle"></i>
            </div>
            <div  onclick="marcar(${contador})" class="item-nome">
               ${valor}
            </div>
            <div class="item-botao">
                <button onclick="deletar(${contador})" class="delete">Deletar <i class="fa-solid fa-trash"></i></button>
            </div>
        </div>`

        // ADICIONAR NO TODO LIST
        principal.innerHTML += novoItem;

        // LIMPAR O ESPAÇO
        input.value = "";
        input.focus();
    }
}

function marcar(id) {
    var item = document.getElementById(id);
    var classe = item.getAttribute("class");

    if(classe == "item") {
        item.classList.add("clicado")

        var icone = document.getElementById("icone_"+ id);
        icone.classList.add('fa-circle-check');
        icone.classList.remove('fa-circle');

        item.parentNode.appendChild(item);
    }else {
        item.classList.remove('clicado')

        var icone = document.getElementById("icone_"+ id);
        icone.classList.remove('fa-circle-check');
        icone.classList.add('fa-circle');
    }

}

function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

// QUANDO EU CLICAR NO ENTER = 13 N PRECISO CLICAR NO ADICIONAR
input.addEventListener("keyup", function(event) {
    if (event.key === "Enter")
        {
        event.preventDefault();
        btnAd.click();
    }
})