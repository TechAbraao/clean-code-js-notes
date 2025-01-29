// O .map retorna um novo array

let students = [
    {name: "Abraão", age: 22},
    {name: "Santos", age: 30},
    {name: "José", age: 50},
    {name: "Caio", age: 30}
];

let catchAgeStudents = students.map(item => item.age);
let lastNameIncrement = "Sobrenome"           // Jeito diferente
let catchNameStudents = students.map(array => `${array.name} ${lastNameIncrement}`)

console.log(catchAgeStudents)
console.log(students)
console.log(catchNameStudents)

let complexArray = students.map(array => {
    return {...array, date: Date.now()}
})

console.log(complexArray)