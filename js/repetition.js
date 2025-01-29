// Utilizando if-else de forma eficaz e limpa;
function loginUser(isAdmin, isLogged, isWifi) {
    if (!isWifi) {
        console.log("Só pode entrar se o modo estiver no Wi-Fi.")
        return;
    }
    if (!isLogged) { 
        console.log("Só pode entrar se estiver logado.")
    }
    if (!isAdmin) {
        console.log("Só pode entrar aqui se for Administrador.")
    }

    console.log("Access")
}

// Ternário
let country = "Brasil";
let personCountry = (country == "Brasil") ? "É brasileiro." : "Não é brasileiro."
console.log(personCountry)