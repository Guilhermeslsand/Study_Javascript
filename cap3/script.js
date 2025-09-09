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

/* Inferno de callbacks
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
*/

// Promises -> criado em 2015
// const  calculoDemorado  = (n) => {
//     const p = new Promise((resolve, reject) => {
//         let ac = 0
//         for(let i = 1; i <= n; i++) ac += i
//         resolve(ac)
//     })
//     return p 
// }
// const minhaPromise = calculoDemorado(10000000000)
// minhaPromise.then((res) => {
//     console.log(`Somatório: ${res}`)
// })
// console.log('Terminando...')

// const calculoGauss = (n) => {
//     return new Promise((resolve, reject) => {
//         return n >= 0?
//         resolve((n/2) * (n+1)):
//         reject("Insira um valor maior que 0")
//     })
// }
// const minhaPromise2 = calculoGauss(10)
// minhaPromise2.then((res) => {
//     console.log(`Resultado: ${res}`)
// })
// minhaPromise2.catch((n) => {
//     console.log(n)
// })
// calculoGauss(10)
// .then(res => console.log(`Resultado: ${res}`))
// .catch(erro => console.log(erro))
// const axios = require("axios");
// const appid = "21614a7688c847cfe006248d07e82b59"


// Async await -> Criado em 2017
// async function hello(nome){
//     return `Hello ${nome}`
// }

// const res = hello('Ana')
// res.then ( r => console.log(r))

const fatorial = (n) => {
    if(n < 0)
        return Promise.reject("Negativo não")
    if(n===1)
        return Promise.resolve(1)
    let ac = 1
    for(let i=2; i<=n; i++) 
        ac *= i
    return Promise.resolve(ac)
}

// function chamadaComThenECatch()
// {
//     const n1 = 5
//     const n2 = -1
//     fatorial(n1)
//     .then(res => console.log(`Resultado: ${res}`))
//     .catch(err => console.log(`Error: ${err}`))

//     fatorial(n2)
//     .then(res => console.log(`Resultado: ${res}`))
//     .catch(err => console.log(`Error: ${err}`))
// }
// chamadaComThenECatch()

//async function chamadaComAsyncAwait(){}
const chamadaComAsyncAwait = async () => {
    const n1 = 10
    const n2 = -1
    try{
        const res1 = await fatorial(n1)
        console.log(`Resultado:${res1}`)
    }
    catch(err){
        console.log(`Erro: ${err}`)
    }
    try{
        const res2 = await fatorial(n2)
        console.log(`Resultado: ${res2}`)
    }
    catch(err){
        console.log(`Erro: ${err}`)
    }
}

chamadaComAsyncAwait()

