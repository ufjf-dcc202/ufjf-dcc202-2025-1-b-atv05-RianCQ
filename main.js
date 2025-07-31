import { getTabuleiro, seleciona } from "./discos.js";

const eH1 = document.querySelector("h1");
eH1.textContent = "Olá, Mundo!";

const eTabuleiro = criaTabuleiro();
document.body.append(eTabuleiro);

const tabuleiro = getTabuleiro();

for(let i=0; i<7; i++){
    const eDisco = criaDisco(i);
    eTabuleiro.append(eDisco);
   eDisco.dataset.cor = tabuleiro[i];
}

function atualizaDiscos(){
    const tabuleiro = getTabuleiro();
    for(let i = 0; i<eTabuleiro.children.length; i++){
        const disco = eTabuleiro.children[i];
        disco.dataset.cor = tabuleiro[disco.dataset.posicao];
    }
}

function discoClick(evento){
    const posicao = Number(evento.target.dataset.posicao);
    console.log("Click!" + posicao);
    seleciona(posicao);
    atualizaDiscos();
}

function criaDisco(posicao){
    const novoDisco = document.createElement("div");
    novoDisco.classList.add("disco");
    novoDisco.dataset.posicao = posicao;
    novoDisco.addEventListener("click", discoClick);
    return novoDisco;
}

function criaTabuleiro(){
    const novoTabuleiro = document.createElement("div");
    novoTabuleiro.classList.add("tabuleiro");
    return novoTabuleiro;
}