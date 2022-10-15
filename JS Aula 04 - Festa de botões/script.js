const secaoParagrafos = document.getElementById('secao_paragrafos');

// Botão 2 - Muda o tamanho da fonte dos parágrafos que estão na seção paragrafos
function mudarTamanhoFonte() {
    secaoParagrafos.style.fontSize = "30px";
}

// Botão 3 - Altera a cor da fonte dos parágrafos que estão na seção paragrafos
function mudarCorFonte() {
    secaoParagrafos.style.color = "#fff";
}

// Botão 4 - Altera a cor do fundo da div secao_paragrafos
function mudarCorFundo() {
    secaoParagrafos.style.backgroundColor = "#000";
}

// Botão 5 - Adiciona o estilo itálico para os paragráfos que estão na seção paragrafos
function mudarFonteItalico() {
    secaoParagrafos.style.fontStyle = "italic";
}

// Botão 6 - Adiciona o peso negrito para os paragráfos que estão na seção paragrafos
function mudarFonteNegrito() {
    secaoParagrafos.style.fontWeight = "bold";
}

// Botão 7 - Adiciona uma borda na div seção paragrafos
function adicionarBorda() {
    // a propriedade "border" tem que ter 3 valores:
    // 1° grossura da borda em pixels;
    // 2° estilo da borda;
    //  2.1 - solid: sólida
    //  2.2 - dotted: pontinhos
    //  2.3 - dashed: tracejada
    // 3° cor da borda (pode ser hexadecimal ou não)
    secaoParagrafos.style.border = "3px solid #ff0000";
}

// Botão 8 - Remove a borda da div seção paragrafos
function removerBorda() {
    secaoParagrafos.style.border = "none";
}

// Botão 9 - Esconde a div seção paragrafos
function esconderSecao() {
    secaoParagrafos.style.display = "none";
}

// Botão 10 - Aparece com a div seção paragrafos
function mostrarSecao() {
    secaoParagrafos.style.display = "block";
}

// Botão 11 - Inserir um texto HTML no segundo elemento que possui a classe "texto"
function mudarSegundoTexto() {
    document.getElementsByClassName("texto")[1].innerHTML = "Texto alterado pela seleção da class";
}

// Botão 12 - Muda a cor do fundo do primeiro elemento que possui a classe "paragrafo"
function mudarCorFundoParagrafo() {
    document.getElementsByClassName("paragrafo")[0].style.backgroundColor = "#ff0000";
}

// Botão 13 - Muda a cor do fundo de um único botão
function mudarCorFundoBotao() {
   document.getElementsByTagName("button")[12].style.backgroundColor = "darkred"
}

// Botão 14 - Muda a cor do fundo de todos os botões
function mudarCorFundoBotoes() {
    // limiteBotoes é o índice máximo da lista de botões
    let limiteBotoes = document.getElementsByTagName("button").length - 1;

    // gerar um índice aleatório entre 0 e o último índice da lista de botões (18)
    // Math.round(Math.random() * (maximo - minimo) + minimo)
    // parseInt(Math.random() * (maximo - minimo) + minimo)
    let indiceAleatorio = Math.round(Math.random() * (limiteBotoes - 0) + 0);

    document.getElementsByTagName("button")[indiceAleatorio].style.backgroundColor = "lightblue";

}
function contarBotoes(){
    let quantidadeBotoes = document.getElementsByTagName("button").length;

    document.getElementsByClassName("texto")[0].innerHTML = "a quantidade de botões são " + quantidadeBotoes;
}
function alterarTextoParagrafo(){
    document.querySelector(".paragrafo").innerHTML = "CARALHOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO"
}
function mudarCorPagina(){
    document.querySelector("body").style.backgroundColor = "darkblue";
}
function mudarImagem(){
    let imagem = document.querySelector("img")
    if (imagem.alt == "Laptop da Xuxa"){
        imagem.src = "./img/alien.jpg"
        imagem.alt = "Laptop Foda"
    }
    else{
        imagem.src = "./img/xuxa.jpg"
        imagem.alt = "Laptop da Xuxa"
    }
}
function acionarBotoes(){
    mudarTamanhoFonte()
    mudarCorFonte()
    mudarCorFundo()
    mudarFonteItalico()
    mudarFonteNegrito()
    adicionarBorda()
    mudarSegundoTexto()
    mudarCorFundoParagrafo()
    mudarCorFundoBotoes()
    contarBotoes()
    alterarTextoParagrafo()
    mudarCorPagina()
    mudarImagem()
}
