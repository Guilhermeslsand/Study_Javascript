//Execução síncrona(bloqueante)
//Execução assícrona( não bloqueante)

//------- Chamada síncrona ------//
/*
console.log('Eu primeiro...')
console.log('Agora eu ...')
console.log('Sempre serie o último ...:(')
*/
/*
const a = 2 + 2
const b = 5
console.log(a + b)
*/

//CPU-BOUND: Operações realizadas pela CPU
//IO-BOUND: Operações realizada para entrada e saída
/*
function demorada (){
    const atualMais2 = new Date().getTime()+7000
    while(new Date().getTime() <= atualMais2);
    const d = 8 + 4
    return d
}
function demorada2 (){
    const atualMais2 = new Date().getTime()+3000
    while(new Date().getTime() <= atualMais2);
    const f = 12 + 6 
    return f
}
const a = 2 + 3
const b = 5 + 9
setTimeout( () => {
    const d = demorada()
    console.log(`Valor de d: ${d}`)
}, 1000)
setTimeout( () => {
    const f = demorada2()
    console.log(`Valor de f: ${f}`)
}, 0)
const e = 2 + a - b 
console.log(`Valor de e: ${e}`)
*/

const fs = require('fs')
const abrirArquivo = function(nomeArquivo){
    //callbacl: define, mas não chama
    function exibirConteudo(erro, conteudo)
    {
        if(erro){
            console.log(`Erro: ${erro}`)
        }
        else{
            console.log(
                `Conteúdo: ${conteudo.toString()}`
            )
            const dobro = Number(conteudo.toString()) * 2
            const salvarArquivo = (erro) => {
                if(erro){
                    console.log(`Erro: ${erro}`)
                }
                else{
                    console.log('Arquivo salva ok')
                }
                console.log('D')
            }
            fs.writeFile(
                'dobro.txt',
                dobro.toString(),
                salvarArquivo
            )
        }
        console.log('C')
    }
    fs.readFile(nomeArquivo, exibirConteudo)
    console.log('B')
}
abrirArquivo('arquivo.txt')
console.log('A')