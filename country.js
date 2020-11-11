class Country {
    constructor(name, lang, greeting, colors) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }
}
let usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"]);
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"]);
let algeria = new Country("Algeria", "Arabic and Berber", "Sup", ["darkgreen", "white", "red"]);
let greece = new Country("Greece", "Greek", "Yassou", ["blue", "white", "blue"]);
let poland = new Country("Poland", "Polish", "Dzien dobry", ["red", "white", "red"]);
let finland = new Country("Finland", "Finnish", "Moi", ["white", "blue", "white"]);
let russia = new Country("Russia", "Russian", "Zdravstvujtye", ["blue", "red", "white"]);
function SwitchCountry() {
    let input = document.getElementById("CountryList").value;
    let country;
    if (input === "USA"){
        country = usa;
    }
    else if (input === "Mexico"){
        country = mexico;
    }
    else if (input === "Algeria"){
        country = algeria;
    }
    else if (input === "Greece"){
        country = greece;
    }
    else if (input === "Poland"){
        country = poland;
    }
    else if (input === "Finland"){
        country = finland;
    }
    else if (input === "Russia"){
        country = russia;
    }
    document.getElementById("CountryName").innerText = country.name;
    document.getElementById("OfficialLanguage").innerText = country.lang;
    document.getElementById("HelloWorld").innerText = country.greeting;
    document.getElementById("Color1").style.backgroundColor = country.colors[0];
    document.getElementById("Color2").style.backgroundColor = country.colors[1];
    if (country.colors.length > 2) {
        document.getElementById("Color3").style.backgroundColor = country.colors[2];
    }
    else{
        document.getElementById("Color3").style.backgroundColor = country.colors[1];
    }
}
