const num1 = document.getElementById("nota1");
const num2 = document.getElementById("nota2");
const num3 = document.getElementById("nota3");
const retornoFuncao = document.getElementById("retorno_funcao");
const resultadoMedia = document.getElementById("resutado_media");
const situacaoAluno = document.getElementById("situacao_aluno");

function calcularMedia() {
    resultadoMedia.innerHTML = ""
    if (num1.value == '') {
        retornoFuncao.innerHTML = "BOTA O PRIMEIRO NÚMERO LÁ, JAMELÃO";
        num1.focus();
    } else {
        if (num2.value == '') {
            retornoFuncao.innerHTML = "BOTA O SEGUNDO NÚMERO LÁ, JAMELÃO";
            num2.focus();
        } else {
            if (num3.value == '') {
                retornoFuncao.innerHTML = "BOTA O TERCEIRO NÚMERO LÁ, JAMELÃO";
                num3.focus();
            } else {
                retornoFuncao.innerHTML = "";
                var resultado = (Number(num1.value) + Number(num2.value) + Number(num3.value)) / 3;
                resultadoMedia.innerHTML = `A média é: ${resultado.toFixed(1)}`;

                classificarAluno(resultado);
            }
        }
    }
}
function classificarAluno(resultado) {
    if (resultado >= 6) {
        situacaoAluno.innerHTML = "PARABÉNS VOCÊ PASSOU CARALHO";
    } else if (resultado < 6 && resultado > 3) {
        situacaoAluno.innerHTML = "TÁ DE RECUPERAÇÃO, OTÁRIO";
    } else {
        situacaoAluno.innerHTML = "VOCÊ REPETIU, SEU MERDA";
    }

}