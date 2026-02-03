function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    //pegar a div e a tag "a"
    let imagem = gameClicado.querySelector('.dashboard__item__img'); //div que tem a imagem
    let botao = gameClicado.querySelector('.dashboard__item__button'); //botao

    //consegue ver se está alugado com base na classe
    if (imagem.classList.contains('dashboard__item__img--rented')) { //se está alugado
        imagem.classList.remove('dashboard__item__img--rented');
        botao.textContent = 'Alugar';
        botao.classList.remove('dashboard__item__button--return');
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard__item__button--return');
    }
}