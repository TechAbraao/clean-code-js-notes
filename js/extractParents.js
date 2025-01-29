const peoples = [
    { name: "Ana", country: "Brasil" },
    { name: "Carlos", country: "Argentina" },
    { name: "John", country: "EUA" },
    { name: "Maria", country: "Portugal" },
    { name: "Liam", country: "Inglaterra" },
    { name: "Sofia", country: "Espanha" },
    { name: "Pedro", country: "México" },
    { name: "Luca", country: "Itália" },
    { name: "Eva", country: "França" },
    { name: "Tom", country: "Alemanha" },
    { name: "Lucas", country: "Brasil" },
    { name: "Isabella", country: "Argentina" },
    { name: "Oliver", country: "Canadá" },
    { name: "Mia", country: "EUA" },
    { name: "Hugo", country: "França" },
    { name: "Juliana", country: "Brasil" },
    { name: "Noah", country: "Austrália" },
    { name: "Chloé", country: "França" },
    { name: "Matheus", country: "Portugal" },
    { name: "Gabriela", country: "Colômbia" }
];

let extractCountry = peoples.filter(array => array.country != "Brasil")

console.log(extractCountry)