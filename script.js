const countryContainer = document.querySelector(".countrySection");
const searchCountry = document.querySelector("#searchCountry");
const filterMenu = document.querySelector(".filter");
const themeMode = document.querySelector(".theme");
const allCountryAPI = "https://restcountries.com/v3.1/all";
let allCountryData;


themeMode.addEventListener("click",() => {
   document.body.classList.toggle("darkTheme");
   console.log(document.body);

})

function countryRender(Image,Name,Population,Region,Capital,countryPage){
    const country = document.createElement("a");
    const countryImageContainer = document.createElement("div");
    const countryImage = document.createElement("img");
    const countryDetails = document.createElement("div");
    const countryName = document.createElement("h1");
    const countryPopulationValue = document.createElement("div");
    const countryPopulationContent = document.createElement("span");
    const countryPopulationName = document.createElement("b");
    const countryRegionValue = document.createElement("div");
    const countryRegionContent = document.createElement("span");
    const countryRegionName = document.createElement("b");
    const countryCapitalValue = document.createElement("div");
    const countryCapitalContent = document.createElement("span");
    const countryCapitalName = document.createElement("b");

    country.classList.add("countryCard");
    countryImageContainer.classList.add("countryCardImg");
    countryDetails.classList.add("countryCardDetails");


    country.href = countryPage;
    countryImage.src = Image;
    countryName.textContent = Name;
    countryPopulationContent.textContent = Population;
    countryRegionContent.textContent = Region;
    countryCapitalContent.textContent = Capital;
    countryPopulationName.textContent = "Population: ";
    countryRegionName.textContent = "Region: ";
    countryCapitalName.textContent = "Capital: ";


    countryContainer.append(country);
    country.appendChild(countryImageContainer);
    countryImageContainer.appendChild(countryImage);

    country.append(countryDetails);
    countryDetails.appendChild(countryName);
    countryPopulationValue.appendChild(countryPopulationName);
    countryPopulationValue.appendChild(countryPopulationContent);
    countryRegionValue.appendChild(countryRegionName);
    countryRegionValue.appendChild(countryRegionContent);
    countryCapitalValue.appendChild(countryCapitalName);
    countryCapitalValue.appendChild(countryCapitalContent);
    countryDetails.appendChild(countryPopulationValue);
    countryDetails.appendChild(countryRegionValue);
    countryDetails.appendChild(countryCapitalValue);

}

fetch(allCountryAPI)
.then((res) => res.json())
.then((data) => {
    allCountryData = data;
    data.map((el) => {
        const flag = el.flags.svg;
        const name = el.name.common;
        const population = el.population.toLocaleString("en-IN")
        const region = el.region;
        const capital = el.capital;
        const countryPage = `country.html?name=${name}`


        countryRender(flag,name,population,region,capital,countryPage)
    })
})


filterMenu.addEventListener("change",(e) => {
    countryContainer.innerHTML = "";
    fetch(`https://restcountries.com/v3.1/region/${e.target.value}`)
    .then((res) => res.json())
    .then((data) => {
        data.map((filterCountries) => {
            console.log(filterCountries);
            const flag = filterCountries.flags.svg;
            const name = filterCountries.name.common;
            const population = filterCountries.population.toLocaleString("en-IN")
            const region = filterCountries.region;
            const capital = filterCountries.capital;
            const countryPage = `country.html?name=${name}`

            countryRender(flag,name,population,region,capital,countryPage)
        })
    })
})


searchCountry.addEventListener("input",(e) => {
    countryContainer.innerHTML = ""
    const filterCountry = allCountryData.filter((searchCountry) => {
        return searchCountry.name.common.toLowerCase().includes(e.target.value.toLowerCase())
    });
    filterCountry.map((el) =>{
        const flag = el.flags.svg;
        const name = el.name.common;
        const population = el.population.toLocaleString("en-IN")
        const region = el.region;
        const capital = el.capital;
        const countryPage = `country.html?name=${name}`
        countryRender(flag,name,population,region,capital,countryPage);
    })
})