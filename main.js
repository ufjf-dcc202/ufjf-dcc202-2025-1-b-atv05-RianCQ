const eH1 = document.querySelector("h1");
eH1.textContent = "Olá, Mundo!";

const eTabuleiro = criaTabuleiro();
document.body.append(eTabuleiro);

function criaTabuleiro(){
    const novoTabuleiro = document.createElement("div");
    novoTabuleiro.classList.add("tabuleiro");
    novoTabuleiro.style.backgroundColor = "lightgreen";
    novoTabuleiro.style.minHeight = "25px";
    return novoTabuleiro;
}