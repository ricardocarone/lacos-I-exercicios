let tabuada = +prompt("Insira um número para receber a tabuada do mesmo")
console.log(`Tabuada do ${tabuada}`)
for(let i = 0; i <= 10; i++){
    let multiplicacao = tabuada*i
    console.log(`${tabuada} x ${i} = ${multiplicacao}`)

}
