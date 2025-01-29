
// Variáveis seguirem o mesmo padrão. Por exemplo, as variáveis estão em inglês e no camel-case.
let firstName = "Abraão"
let middleName = "Vitor"
let lastName = "Silva Santos"
console.log("\n" + firstName + " " + middleName + " " + lastName)

// Devemos inserir os números em variáveis para não perderem seu sentido.
const userBasicTax = 30.0;
const userPremiumTax = 20.0;
let valuePay = 300.0;

let valueUserOne = valuePay - userBasicTax
let valueUserTwo = valuePay - userPremiumTax

console.log(`\nvalor pago do usuário 1: ${valueUserOne}
             \nvalor pago do usuário 2: ${valueUserTwo}`)

/**
 *  Comentários devem ser utilizados puramente
 *  para explicar regras de negócio no desenvolviemnto
 *  do software.
 */
