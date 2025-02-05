//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];


function adicionarAmigo(){
    let novoAmigo = document.querySelector('input');
        if (novoAmigo.value === ''){
            alert ('Por favor, insira um nome');
        } else {
            amigos.push(novoAmigo.value);
            limparCampo();
            console.log(amigos);
            atualizarListaAmigos();
            
        }
}

function limparCampo(){
    let novoAmigo = document.querySelector('input');
    novoAmigo.value = '';
}

function atualizarListaAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    
    amigos.forEach(amigo =>{
    let li = document.createElement('li');
    li.textContent = amigo;
    lista.appendChild(li);
    })

}

function sortearAmigo(){
    if (amigos.length === 0){
        alert('Lista de amigos está vazia.');
    }
    else {
        let sorteio = Math.floor(Math.random()*amigos.length);
        let amigoSorteado = amigos[sorteio];
        console.log(sorteio);

        let resultado = document.getElementById('resultado');
        listaAmigos.innerHTML = '';
        resultado.innerHTML = "O amigo secreto sorteado é: "+amigoSorteado;
    }
}

