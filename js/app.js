let jogosAlugados = 0;
let vezesAlugados = 0;

function contarExibirJogosAlugados() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}

function somaJogosAlugados() {
    console.log(`Total de quantidade de jogos alugados: ${vezesAlugados}`);
}

function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.textContent = 'Alugar';
        botao.classList.remove('dashboard__item__button--return');
        jogosAlugados--;
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard__item__button--return');
        jogosAlugados++;
        vezesAlugados++;
    }

    contarExibirJogosAlugados();
    somaJogosAlugados();
}

document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
});




