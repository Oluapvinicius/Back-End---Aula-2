/***************************************************************************
 * Objetivo: Criar um app para ao calcilo de médias Escolares
 * Autor: Paulo
 * Data: 30/07
 * Versão: 1.0
 ***************************************************************************/

//Import da biblioteca para permitir a entrada de dados pelo terminal
const { Console } = require('console')
const { parse } = require('path')
var readline = require('readline')

//Criando uma interface da entrada e saída de dados no terminal
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
/**
 * VAR -> Permite criar um espaço em memória (variavel) que pode ser alterado
 *        na progamação. Obs: Metodo antigo de criar variáveis
 * 
 * LET -> Permite criar um espaço em memória (variavel) que pode ser alterado
 *        na progamação. Essas variaveis "morrem" ao terminio do bloco
 *        OBS: Deve-se ultilizar apenas dentro de bloco { },
 *        por exemplo: IF, Function, Loop, etc.
 * 
 * CONST -> Permite criar um espaço em memória (constante) que pode ser alterado
 *        na progamação. A CONST pode ser ultilizada em qualquer parte do código.
 *        Obs: È uma boa pratica se possivel usar letras MAIUSCULAS.
 * 
 * toUpperCase() -> converte a string para MAIUSCULO
 * toLowerCase() -> converte a string para minusculo
 * Convesão de tipos de dados
 * String() -> converte um objeto ou variavel para o tipo de dados String
 * Number() -> Converte uma variavel para numero, podendo ser int ou float comforme a necessidade
 * parseInt() -> Converte uma variavel para numero inteiro
 * parseFloat() -> Converte para numero decimal
 * Boolean() -> Converte uma variavel para o valor booleano (true/false)
 * Object() -> Converte uma variavel para um objeto (array, json, classe)
 * 
 * Operadores de comparação
 * == Validação para comparar a igualdade de conteúdos
 * != Validação para comparar a diferencia de conteúdos
 * <  Validação para verificar o menor valor 
 * >  Validação para verificar o maior valor
 * <= Validação para verificar a igualdade e o menor valor
 * >= Validação para verificar a igualdade e o maior valor
 * === Validação para comparar a igualdade de conteudos e a igualdade de tipos de dados
 * !== Validação para comparar a diferencia de conteudos e a igualdade de tipos de dados
 * !=! Validação para comparar a diferencia de conteudos e a diferencia de tipos de dados
 * 
 * Operadores Lógicos
 *  E AND \&&
 *  OU OR ||
 *  NÂO NOT !
 */

//Entrada de dados do Nome
entradaDeDados.question('Digite o nome do aluno:', function(nome){
    let nomeAluno = String(nome).toUpperCase()
    //Entrada de dados da nota1
    entradaDeDados.question('Digite a nota 1:', function(valor1){
        let nota1 = valor1

        // Entrada de dados da nota2
        entradaDeDados.question('Digite a nota 2:', function(valor2){
            let nota2 = valor2

            // Entrada de dados da nota3
            entradaDeDados.question('Digite a nota 3:', function(valor3){
                let nota3 = valor3

                // Entrada de dados da nota4
                entradaDeDados.question('Digite a nota 4:', function(valor4){
                    let nota4 = valor4
                    

                    if(nomeAluno == '' || nota1 == '' || nota2 == '' || nota3 == '' || nota4 == '' ){
                        console.log('ERRO: Não foi possivel calcular a medía, pois existem, campos qeu não foram preechidos!')
                    }else if(nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10 || nota4 < 0 || nota4 > 10){
                        console.log('ERRO: Não foi possivel menores que 0 ou valores maior que 10!')
                    
                    }else{
                        let media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / 4
                        let statusAluno

                        if(media < 5){
                            statusAluno = 'Reprovado'

                        }else if(media >= 5 && media < 7){
                            statusAluno = 'EXAME'

                        }else if(media >=7 && media <= 10){
                            statusAluno = 'APROVADO'
                        }
                        
                        console.log(`O aluno ${nomeAluno} teve a média ${media.toFixed(1)} e esta em ${statusAluno}`)
                        

                    } 

                })//Fecha a entrada da nota 4
            })//Fecha a entrada da nota 3
        })//Fecha a entrada da nota 2
    })//Fecha a entrada da nota 1
})//Fecha a entrada do nome

