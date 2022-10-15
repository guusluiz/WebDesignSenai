const num1 = document.getElementById("input_numero1")
const num2 = document.getElementById("input_numero2")
const inputResultado = document.getElementById("input_resultado")

function somarNumeros(){
    var resultadoSoma = Number(num1.value) + Number(num2.value)   

    inputResultado.value = resultadoSoma
}
function subtrairNumeros(){
    var resultadoSubtracao = Number(num1.value) - Number(num2.value)   

    inputResultado.value = resultadoSubtracao
}
function multiplicarNumeros(){
    var resultadoMultiplicação = Number(num1.value) * Number(num2.value)   

    inputResultado.value = resultadoMultiplicação
}
function dividirNumeros(){
    var resultadoDivisão = Number(num1.value) / Number(num2.value)   

    inputResultado.value = resultadoDivisão
}
function limparNumeros(){
    num1.value = " "
    num2.value = " "
    inputResultado.value = " "
}