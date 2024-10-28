const countryContainer = document.querySelector(".container");
const countryImage = document.querySelector(".countryImage img");
const countryNameValue = document.querySelector(".countryName h1")
const nativeName = document.querySelector(".nativeName span");
const population = document.querySelector(".population span");
const region = document.querySelector(".region span ");
const subRegion = document.querySelector(".subRegion span ");
const capital = document.querySelector(".capital span");
const topLevelDomain = document.querySelector(".topLevelDomain span");
const currencies = document.querySelector(".currencies span");
const languages = document.querySelector(".languages span");
const backBtn = document.querySelector(".backBtn");


const url = new URLSearchParams(location.search);
const countryName = url.get('name')
console.log(countryName);

backBtn.addEventListener("click",() => {
    history.back();
})

fetch(`https://restcountries.com/v3.1/name/${countryName}`)
.then((res) => res.json())
.then((data) => {
    data.map((country) => {
        console.log(country);
        console.log(Object.values(country.languages));
        countryImage.src = country.flags.svg;
        countryNameValue.innerText = country.name.common;
        nativeName.textContent = Object.values(country.name.nativeName)[0].common;
        population.textContent = country.population.toLocaleString("en-IN");
        region.textContent = country.region;
        subRegion.textContent = country.subregion;
        capital.textContent = country.capital.join(", ");
        topLevelDomain.textContent = country.tld[0];
        currencies.textContent = Object.values(country.currencies)[0].name;
        languages.textContent = Object.values(country.languages)
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

