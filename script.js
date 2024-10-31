var imgAtual = "img/cat.png";
var imgAnterior = "img/dog.jpeg";

function trocarimg() {
    document.getElementById("figura").src = imgAtual;
    let aux = imgAtual;
    imgAtual = imgAnterior;
    imgAnterior = aux;
}

function trocartitulo() {
    document.getElementById('titulo').innerText = "Título Alterado!";
}

function trocarcor() {
    document.getElementById('p').style.color = "blue";
}

function tocarsom() {
    const audio = document.getElementById('audio');
    audio.play();
}

// Função para adicionar e remover a classe "highlight" nos botões
function toggleClassButtons() 
{
    const buttons = document.querySelectorAll('.toggle-btn'); // Seleciona os botões que têm a classe "toggle-btn"
    
    buttons.forEach(button => {
        button.classList.toggle('highlight'); // Alterna a classe "highlight" em cada botão
    });
}

const buttons = document.querySelectorAll('#btm1, #btm2, #btm3'); // faz uma array

document.querySelector('.alterabotao').addEventListener("click", toggle); // seleciona o botão a ser clicado e ao clicar vai na função toggle

function toggle() {
    buttons.forEach(button => {
        button.classList.toggle("active");
    });
} // passa por cada botão da array ativando e desativando em cada clique a classe active q vc tem que criar no css