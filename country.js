const countryContainer = document.querySelector(".container");
const backBtn = document.querySelector(".backBtn");
const themeMode = document.querySelector(".theme");


const url = new URLSearchParams(location.search);
const countryName = url.get('name')

themeMode.addEventListener("click",() => {
    document.body.classList.toggle("darkTheme");
})

backBtn.addEventListener("click",() => {
    history.back();
})

function countryDetailsRender(image,name,native,populationNumber,region,subregion,capitalCity,domain,currencie,language){

// ------------------------------Creating Elements------------------------------------------------------------

    const countryImageContainer = document.createElement("div");
    const countryImage = document.createElement("img");
    const countryDetailsContainer = document.createElement("div");
    const countryName = document.createElement("h1");
    const countryDetailContainer = document.createElement("div");
    const leftCountryDetails = document.createElement("div");
    const nativeName = document.createElement("p");
    const nativeNameTitle = document.createElement("b");
    const nativeNameValue = document.createElement("span");
    const population = document.createElement("p");
    const populationTitle = document.createElement("b");
    const populationValue = document.createElement("span");
    const regionContainer = document.createElement("p");
    const regionTitle = document.createElement("b");
    const regionValue = document.createElement("span");
    const subRegion = document.createElement("p");
    const subRegionTitle = document.createElement("b");
    const subRegionValue = document.createElement("span");
    const capital = document.createElement("p");
    const capitalTitle = document.createElement("b");
    const capitalValue = document.createElement("span");
    const rightCountryDetails = document.createElement("div");
    const topLevelDomain = document.createElement("p");
    const topLevelDomainTitle = document.createElement("b");
    const topLevelDomainValue = document.createElement("span");
    const currencies = document.createElement("p");
    const currenciesTitle = document.createElement("b");
    const currenciesValue = document.createElement("span");
    const languages = document.createElement("p");
    const languagesTitle = document.createElement("b");
    const languagesValue = document.createElement("span");
    const borderCountriesContainer = document.createElement("div");
    const borderCountriesTitle = document.createElement("b");

// ------------------------------Classes-----------------------------------------------------------


    countryImageContainer.classList.add("countryImage");
    countryDetailsContainer.classList.add("countryDetails");
    countryName.classList.add("countryName");
    countryDetailContainer.classList.add("countryDetail");
    leftCountryDetails.classList.add("left");
    leftCountryDetails.classList.add("detailsArea");
    rightCountryDetails.classList.add("right");
    rightCountryDetails.classList.add("detailsArea");
    nativeName.classList.add("nativeName");
    population.classList.add("population");
    regionContainer.classList.add("region");
    subRegion.classList.add("subRegion");
    capital.classList.add("capital");
    topLevelDomain.classList.add("topLevelDomain");
    currencies.classList.add("currencies");
    languages.classList.add("languages");
    borderCountriesContainer.classList.add("borderCountries");

// ------------------------------Values------------------------------------------------------------

    countryImage.src = image;
    countryName.textContent = name;
    nativeNameTitle.textContent = "Native Name: ";
    nativeNameValue.textContent = native;
    populationTitle.textContent = "Population: ";
    populationValue.textContent = populationNumber;
    regionTitle.textContent = "Region: ";
    regionValue.textContent = region;
    subRegionTitle.textContent = "sub Region: ";
    subRegionValue.textContent = subregion;
    capitalTitle.textContent = "Capital: ";
    capitalValue.textContent = capitalCity;
    topLevelDomainTitle.textContent = "Top Level Domain: ";
    topLevelDomainValue.textContent = domain;
    currenciesTitle.textContent = "Currencies: ";
    currenciesValue.textContent = currencie;
    languagesTitle.textContent = "Languages: ";
    languagesValue.textContent = language;
    borderCountriesTitle.textContent = "Border Countries: "

// ------------------------------Appending------------------------------------------------------------

    countryContainer.appendChild(countryImageContainer);
    countryImageContainer.appendChild(countryImage);
    countryContainer.appendChild(countryDetailsContainer);
    countryDetailsContainer.appendChild(countryName);
    countryDetailsContainer.appendChild(countryDetailContainer)
    countryDetailContainer.appendChild(leftCountryDetails);
    leftCountryDetails.appendChild(nativeName);
    nativeName.appendChild(nativeNameTitle);
    nativeName.appendChild(nativeNameValue);
    leftCountryDetails.appendChild(population);
    population.appendChild(populationTitle);
    population.appendChild(populationValue);
    leftCountryDetails.appendChild(regionContainer);
    regionContainer.appendChild(regionTitle);
    regionContainer.appendChild(regionValue);
    leftCountryDetails.appendChild(subRegion);
    subRegion.appendChild(subRegionTitle);
    subRegion.appendChild(subRegionValue);
    leftCountryDetails.appendChild(capital);
    capital.appendChild(capitalTitle);
    capital.appendChild(capitalValue);
    countryDetailContainer.appendChild(rightCountryDetails);
    rightCountryDetails.appendChild(topLevelDomain);
    topLevelDomain.appendChild(topLevelDomainTitle);
    topLevelDomain.appendChild(topLevelDomainValue);
    rightCountryDetails.appendChild(currencies);
    currencies.appendChild(currenciesTitle);
    currencies.appendChild(currenciesValue);
    rightCountryDetails.appendChild(languages);
    languages.appendChild(languagesTitle);
    languages.appendChild(languagesValue);
    countryDetailsContainer.appendChild(borderCountriesContainer);
    borderCountriesContainer.appendChild(borderCountriesTitle);

}



fetch(`https://restcountries.com/v3.1/name/${countryName}`)
.then((res) => res.json())
.then((data) => {
    data.map((country) => {
        const nativeName = Object.values(country.name.nativeName)[0].common;
        const population = country.population.toLocaleString("en-IN");
        const region = country.region;
        const capital = country.capital.join(", ");
        const subRegion = country.subregion;
        const topLevelDomain = country.tld[0];
        const currencies = Object.values(country.currencies)[0].name;
        const languages = Object.values(country.languages);
        const image = country.flags.svg;
        const name = country.name.common;
        countryDetailsRender(image,name,nativeName,population,region,subRegion,capital,topLevelDomain,currencies,languages)

        country.borders.map((border) => {
            fetch(`https://restcountries.com/v3.1/alpha/${border}`)
            .then((res) => res.json())
            .then((data) => {
                data.map((el) => {
                    const countryBorders = document.createElement("a");
                    countryBorders.textContent = el.name.common;
                    countryBorders.href = `country.html?name = ${el.name.common}`
                    countryContainer.children[1].children[2].appendChild(countryBorders)
                })
            })
        })

    })
})

























// fetch(`https://restcountries.com/v3.1/name/${countryName}`)
//     .then((res) => res.json())
//     .then((data) => {
//         data.map((el) => {
//             console.log(el.borders);

//            el.borders.forEach((text) =>{
//                 fetch(`https://restcountries.com/v3.1/alpha/${text}`)
//                 .then((res) => res.json())
//                 .then((data) => {
//                     data.map((el) => {console.log(`<a href="#">${el.name.common}</a>`);})
//                 })
//             })

//            const currencies = Object.values(el.currencies);
//            const nativeName = Object.values(el.name.nativeName);
//            const languages = Object.values(el.languages);
//            console.log(languages);
//             countryContainer.innerHTML += `<div class="countryImage">
//                 <img src="${el.flags.svg}" alt="${el.name.common + "Flag"}">
//             </div>
//             <div class="countryDetails">
//                 <div class="countryName">
//                     <h1>${el.name.common}</h1>
//                 </div>
//                 <div class="countryDetail">
//                     <div class="left detailsArea">
//                         <p><b>Native Name: </b>${nativeName[0].common}</p>
//                         <p><b>Population: </b>${el.population.toLocaleString("en-IN")}</p>
//                         <p><b>Region: </b>${el.region}</p>
//                         <p><b>Sub Region: </b>${el.subregion}</p>
//                         <p><b>Capital: </b>${el.capital.join(", ")}</p>
//                     </div>
//                     <div class="right detailsArea">
//                         <p><b>Top Level Domain: </b>${el.tld[0]}</p>
//                         <p><b>Currencies: </b>${currencies[0].name}</p>
//                         <p><b>Languages: </b>${languages}</p>
//                     </div>
//                 </div>
//                 <div class="borderCountries">
//                     <b>Border Countries:</b>
//                     ${el.borders?el.borders.map((countryBorder) => {
//                         fetch(`https://restcountries.com/v3.1/alpha/${countryBorder}`)
//                         .then((res) => res.json())
//                         .then((data) => {
//                             data.map((countryBtn) => `<a href="#">${countryBtn.name.common}</a>`)
//                         })
//                     }):"No border for this country"}
//                 </div>
//             </div>`
//         })
//     })



