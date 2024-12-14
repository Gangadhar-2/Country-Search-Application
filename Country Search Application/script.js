let searchInput = document.getElementById("searchInput");
let resultCountries = document.getElementById("resultCountries");

let url = "https://apis.ccbp.in/countries-data";
let options = {
  method: "GET",
};

function singleDisplay(countryOne) {
  let { flag, name, population } = countryOne;
  //flag container
  let flagContainer = document.createElement("div");
  flagContainer.classList.add(
    "d-flex",
    "flex-row",
    "col-12",
    "col-md-5",
    "m-4"
  );
  flagContainer.classList.add("country-card");
  resultCountries.appendChild(flagContainer);

  let imageElement = document.createElement("img");
  imageElement.classList.add("country-flag", "mr-4");
  let flageContainerInside = document.createElement("div");
  flagContainer.appendChild(flageContainerInside);
  imageElement.setAttribute("src", flag);
  flageContainerInside.appendChild(imageElement);

  let flageContainerInside1 = document.createElement("div");
  flagContainer.appendChild(flageContainerInside1);

  let flagHead = document.createElement("h1");
  flagHead.textContent = name;
  flagHead.classList.add("country-name");
  flageContainerInside1.appendChild(flagHead);

  let flagPara = document.createElement("p");
  flagPara.textContent = population;
  flagPara.classList.add("country-population");
  flageContainerInside1.appendChild(flagPara);
}

function defaultDisplay(jsonData) {
  for (let eachCountry of jsonData) {
    singleDisplay(eachCountry);
  }
}

fetch(url, options)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonData) {
    defaultDisplay(jsonData);
  });

function displayResult(eachCountry) {
  let { flag, name, population } = eachCountry;
  //flag container
  let flagContainer = document.createElement("div");
  flagContainer.classList.add(
    "d-flex",
    "flex-row",
    "col-12",
    "col-md-5",
    "m-4"
  );
  flagContainer.classList.add("country-card");
  resultCountries.appendChild(flagContainer);

  let imageElement = document.createElement("img");
  imageElement.classList.add("country-flag", "mr-4");
  let flageContainerInside = document.createElement("div");
  flagContainer.appendChild(flageContainerInside);
  imageElement.setAttribute("src", flag);
  flageContainerInside.appendChild(imageElement);

  let flageContainerInside1 = document.createElement("div");
  flagContainer.appendChild(flageContainerInside1);

  let flagHead = document.createElement("h1");
  flagHead.textContent = name;
  flagHead.classList.add("country-name");
  flageContainerInside1.appendChild(flagHead);

  let flagPara = document.createElement("p");
  flagPara.textContent = population;
  flagPara.classList.add("country-population");
  flageContainerInside1.appendChild(flagPara);
}

searchInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    let searchValue = searchInput.value;
    resultCountries.textContent = "";
    fetch(url, options)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonData) {
        for (let eachCountry of jsonData) {
          if (eachCountry.name === searchValue) {
            displayResult(eachCountry);
          }
        }
      });
  }
});
