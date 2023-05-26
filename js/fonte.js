function Fontemaior() {
    var elementosTexto = document.getElementsByClassName('tudo');
    for (var i = 0; i < elementosTexto.length; i++) {
        var tamanhoFonteAtual = parseInt(window.getComputedStyle(elementosTexto[i]).fontSize);
        elementosTexto[i].style.fontSize = (tamanhoFonteAtual + 2) + 'px';
    }
}

function Fontemenor() {
    var elementosTexto = document.getElementsByClassName('tudo');
    for (var i = 0; i < elementosTexto.length; i++){
        var tamanhoFonteAtual = parseInt(window.getComputedStyle(elementosTexto[i]).fontSize);
        elementosTexto[i].style.fontSize = (tamanhoFonteAtual - 2) + 'px';
    }
}