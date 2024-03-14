const imgs = document.querySelectorAll(".carrossel img");
let imgAtual = 0;

function avancar() {
    imgAtual++;
    if (imgAtual >= imgs.length) {
        imgAtual = 0;
    }
    mostrarImagem();
}

function voltar() {
    imgAtual--;
    if (imgAtual < 0) {
        imgAtual = imgs.length - 1;
    }
    mostrarImagem();
}

function mostrarImagem() {
    imgs.forEach((img, i) => {
        img.style.display = "none";
        if (i === imgAtual) {
            img.style.display = "block";
        }
    });
}

setInterval(avancar, 10000);