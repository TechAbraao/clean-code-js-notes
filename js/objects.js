// Princípios para objetos e funções limpas
// Operador Spread ou Rest
// Desestruturação de objetos
// Valores definidos por padrão

let purchase = {
    name: "Abraão",
    lastName: "Santos",
    product: "Cx de Skol 350Ml",
    price: 39.00
}

function fullName({name, lastName}) {
    return name + " " + lastName
}
function productAndPrice({product, price}) {
    return `Produto: ${product}\nPreço em R$: ${price.toFixed(2)}`
}

function showPurchase(purchase) {
    let catchPurchaser = {...purchase}
    console.log(fullName(catchPurchaser), productAndPrice(catchPurchaser))
}

console.log(showPurchase(purchase))


function noValueDefinitedExample(a = 20, b = 30){
    return a + b;
}

console.log(noValueDefinitedExample())
console.log(noValueDefinitedExample(2, 3))
