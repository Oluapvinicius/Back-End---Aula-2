/***************************************************************************
 * Objetivo: Arquivo responsável por calcular e validar médias escolares
 * Autor: Paulo
 * Data: 05/08
 * Versão: 1.0
 ***************************************************************************/

// Função pra calcular a média escolar
function calcularMedia (valor1, valor2, valor3, valor4) {
    let nota1 = Number(valor1)
    let nota2 = Number(valor2)
    let nota3 = Number(valor3)
    let nota4 = Number(valor4)

    let media = (nota1 + nota2 + nota3 + nota4) / 4

    return Number(media).toFixed(1)
}

//Função para retornar o status da média escolar (APROVADO, EXAME, REPROVADO)
function validarStatusMedia (valorMedia){
    let media = Number(valorMedia)

    if(media < 5 && media >=0){
        statusAluno = 'REPROVADO'

    }else if(media >= 5 && media < 7){
        statusAluno = 'EXAME'

    }else if(media >=7 && media <= 10){
        statusAluno = 'APROVADO'
    }

    if(statusAluno != undefined){
        return statusAluno

    }else{
        return false
    }

    return statusAluno
}



//console.log(validarStatusMedia('1'))

//let mediaAluno = calcularMedia('8', '10', '9.6', '8.9')
//console.log(mediaAluno)
//console.log(validarStatusMedia(mediaAluno))

//Permite tornar public uma função, variavel, constante, objeto 
module.exports = {
    calcularMedia,
    validarStatusMedia
}