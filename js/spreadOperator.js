let objectA = {
    name: "A"
}
let objectB = {
    ...objectA
}
console.log(objectB)

let arrayA = ["A", "B"]
let arrayB = ["C", "D"]
let newArray = [...arrayA, ...arrayB]
console.log(newArray)

