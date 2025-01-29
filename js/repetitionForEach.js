let arrayA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arrayA)

// Utilizando o forEach
let savedArrayA = arrayA.forEach(array => array + 1);
console.log(savedArrayA) // Retorna undefined. Uma propriedade do forEach é retornar isso.

let savedArrayB = arrayA.map(array => array + 1);
console.log(savedArrayB)

let students = [
    {name: "Abraão", age: 22},
    {name: "Santos", age: 30},
    {name: "José", age: 50},
    {name: "Caio", age: 30}
];

// Algoritmo extenso e contra os padrões Clean Code.
students.forEach(item => {
    if (item.name == "Abraão") {
        item.name = "isAbraão"
    } else {
        console.log("Value don't exist!")
    }
})

// Algoritmo aperfeiçoado com o Operador Ternário.
students.forEach(item => {
    item.name !== "José" ? "" : item.name = "isJosé"
})


console.log(students)