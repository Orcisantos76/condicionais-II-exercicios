//códigos a serem reescritos
const nome=prompt("insira o nome:")
const idade=Number(prompt('Insira sua idade.'))
// a)
if(nome === "José"){
	console.log("Oi, Zé!")
} else {
	console.log("Olá, " + nome)
}
console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-')
nome === "Jose"? console.log("Oi, Zé!"):console.log("Olá, " + nome)
console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-')
// b)
if(idade >= 18){
	console.log("Pode tirar carteira de motorista!")
} else {
	console.log("Ainda não pode tirar carteira de motorista!")
}
console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-')
idade >= 18? console.log('Pode tirar carteira de mototorista!'):console.log('Ainda não pode tirar carteira de motorista')