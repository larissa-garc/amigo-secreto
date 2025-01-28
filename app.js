//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];


function adicionarAmigo(){
    let novoAmigo = document.querySelector('input');
        if (novoAmigo == ''){
            alert ('Por favor, insira um nome');
        } else {
            amigos.push(novoAmigo);
            limparCampo();

        }
}

function limparCampo(){
    novoAmigo = document.querySelector('input');
    novoAmigo.value = '';
}