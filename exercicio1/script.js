let pergunta = prompt("Você deseja comer uma coxinha?").toLocaleLowerCase()
let conta = 0

while(pergunta === "sim"){
conta += 2.50;
alert(`Ok, mais uma coxinha foi adicionada, valor da sua conta agora está em ${conta.toFixed(2)} `)
pergunta = prompt("Você deseja comer mais coxinhas?").toLocaleLowerCase()
}
console.log(`Favor dirigir-se ao caixa e pagar o valor total de R$${conta.toFixed(2)}`)
alert(`Favor dirigir-se ao caixa e pagar o valor total de R$${conta.toFixed(2)}`)

