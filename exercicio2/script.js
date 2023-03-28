console.log('28/03..')


function nac(msg) {
    let nacionalidade = prompt("Digite aqui a nacionalidade").toLowerCase()
    return nacionalidade
}
const nacionalidade1 = nac()


if (nacionalidade1 === "brasileira") {
    console.log("a pessoa é do Brasil!")
} else if (nacionalidade1 === "argentina") {
    console.log("a pessoa é da Argentina!")
} else if (nacionalidade1 === "uruguaia") {
    console.log("a pessoa é do Uruguai!")
} else if (nacionalidade1 === "chilena") {
    console.log("a pessoa é do Chile!")
} else if (nacionalidade1 === "colombiana") {
    console.log("a pessoa é da Colômbia!")
} else {
    console.log("nacionalidade não encontrada")
}
console.log('-=-=-=-=-SwitchCase-=-=--=-=-=-=-=-=-=-=')

switch (nacionalidade1) {
    case "brasileira":
        console.log("a pessoa é do Brasil!");
        break
    case "argentina":
        console.log("a pessoa é da Argentina!");
        break
    case "uruguaia":
        console.log("a pessoa é do Uruguai!");
        break
    case "chilena":
        console.log("a pessoa é do Chile!");
        break
    case "colombiana":
        console.log("a pessoa é de Colombia!");
        break
    default:
        console.log('Nacionalidade não encontrada.')
}

