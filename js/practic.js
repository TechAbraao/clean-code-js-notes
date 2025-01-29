// Estudando o Null Check Operator

let aluno = {
    name: "Abraão",
    year: "2025",
    course: {
        name: "Engenharia da Computação",
        duration: 5,
        instructor: {
            name: "José"
        }
    }
} 

// 1
let courseExampleOne = aluno.course?.name;
let courseExampleThree = aluno.course?.instructor?.name
console.log(courseExampleOne)
console.log(courseExampleThree)
// 2
// let { courseExampleTwo } = aluno.course

// if (course.aluno != undefined) {
//     course = aluno.course.name;
// } else {
//   course = undefined
// }

