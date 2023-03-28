function linha() {
    console.log('-=-=-=-=-=-=-=-=-=-=-=--=')
}
linha()
// # Exercício 1

// Crie um código que receba um número por **prompt** e verifique se esse número é divisível por 2 **ou** por 3.

// Faça isso:

// **a)** Utilizando ifs aninhados
const num = Number(prompt('Insira um número: -'))
if (num % 2 === 0 || num % 3 === 0){
    if (num % 2 === 0){
        console.log(`Número divisivel por dois -`)
    }else{
        console.log(`Número não divisivel por dois`)
    }
    if (num % 3 === 0){
        console.log(`Número divisivel por três` )
    }else{
        console.log(`Número nao divisivel por 3`)
    }
}else{
    console.log(`Número não divisivel nem por dois nem por três`)
}

linha()

// **b)** Utilizando um operador lógico para unir duas operações relacionais

if (num % 2 === 0 && num % 3 === 0) {
    console.log('O numero é divisivel por dois e três--')
} else {
    console.log('nao é divisivel por dois e tres--')
}

if (num % 2 === 0 || num % 3 === 0) {
    console.log('O número é divisivel por dois ou por três--')
} else {
    console.log('Número nao é divisivel por nenhum dos dois--')
}
