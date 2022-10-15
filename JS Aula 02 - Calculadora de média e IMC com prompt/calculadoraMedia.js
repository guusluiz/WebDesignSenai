function calcularMedia(){
    var numeroUm = Number(prompt("Qual o primeiro número:"))
    var numeroDois = Number(prompt("Qual o segundo número:"))
 
    var resultadoMedia = ((numeroUm + numeroDois) / 2)
    alert(resultadoMedia)
    document.getElementById("titulo_resultado_media").style.display = "block"
    document.getElementById("resultado_media").innerHTML = "O resultado é: " + resultadoMedia
}
