function calcularIMC(){
    alert("Olá, ficamos feliz por você abrir a calculadora de IMC!")

    var peso = Number(prompt("Qual é o seu peso? (Em kilos)"))
    alert(`o peso informado é de ${peso}kg.`)

    var altura = Number(prompt("Qual é a sua altura? (Em metros)"))
    alert(`a altura informada é de ${altura}m.`)

    var resultadoIMC = peso / altura ** 2

    resultadoIMC = resultadoIMC.toFixed(2)

    alert(`o seu IMC é ${resultadoIMC}.`)

    document.getElementById("titulo_resultado_IMC").style.display = "block"
    document.getElementById("resultado_IMC").innerHTML = "O resultado é: " + resultadoIMC
}