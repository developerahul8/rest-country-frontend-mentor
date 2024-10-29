const countryContainer = document.querySelector(".countrySection");
const allCountryAPI = "https://restcountries.com/v3.1/all";

fetch(allCountryAPI)
.then((res) => res.json())
.then((data) => {
    // console.log(data);
    data.map((el) => {
        // const item = Object.keys(el.name.nativeName)
        // console.log(el);
        countryContainer.innerHTML += `<a href="country.html?name=${el.name.common}" class="countryCard">
                <div class="countryCardImg">
                    <img src=${el.flags.svg}>
                </div>
                <div class="countryCardDetails">
                    <h1>${el.name.common}</h1>
                    <div><b>Population: </b>${el.population.toLocaleString('en-IN')}</div>
                    <div><b>Region: </b>${el.region}</div>
                    <div><b>Capital: </b>${el.capital?.join(", ")}</div>
                </div>
            </a>`
    })
})

const filterMenu = document.querySelector(".filter");
filterMenu.addEventListener("change",(e) => {
    countryContainer.innerHTML = ""
    fetch(`https://restcountries.com/v3.1/region/${e.target.value}`)
    .then((res) => res.json())
    .then((data) => {
        data.map((filterCountries) => {
            countryContainer.innerHTML += `<a href="country.html?name=${filterCountries.name.common}" class="countryCard">
                <div class="countryCardImg">
                    <img src=${filterCountries.flags.svg}>
                </div>
                <div class="countryCardDetails">
                    <h1>${filterCountries.name.common}</h1>
                    <div><b>Population: </b>${filterCountries.population.toLocaleString('en-IN')}</div>
                    <div><b>Region: </b>${filterCountries.region}</div>
                    <div><b>Capital: </b>${filterCountries.capital?.join(", ")}</div>
                </div>
            </a>`
        })
    })
})
