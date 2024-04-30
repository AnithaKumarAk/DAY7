const API_URL = "https://restcountries.com/v3.1/all";

//a.Get all the countries from Asia continent /region using Filter method
const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", API_URL);
req.send();

function reqListener() {
    const countriesData = JSON.parse(this.responseText);
   console.log(countriesData);
   let Asia = countriesData.filter(country => country.continents === 'Asia' || country.region === 'Asia' )
   console.log(Asia);
}


//b.Get all the countries with a population of less than 2 lakhs using Filter method
function reqListener() {
    const countriesData = JSON.parse(this.responseText);
   console.log(countriesData);
   let Population = countriesData.filter(country => country.population < 200000)
   console.log(Population);
}


//c.Print the following details name, capital, flag, using forEach method
function reqListener() {
    const countriesData = JSON.parse(this.responseText);
   console.log(countriesData);
countriesData.forEach((element)=>{
    console.log(element.name,element.captial,element.flag);
})
}


//d.Print the total population of countries using reduce method
function reqListener() {
    const countriesData = JSON.parse(this.responseText);
   console.log(countriesData);
const totalPopulation = countriesData.reduce((accum,element) => {
    return (accum+element.population);
},0)
console.log(totalPopulation);  
}

//e.Print the country that uses US dollars as currency.
function reqListener() {
    const countriesData = JSON.parse(this.responseText);
   console.log(countriesData);
let Usdollar = countriesData.filter(country => country?.currencies?.USD)
console.log(Usdollar);
}
   

    


