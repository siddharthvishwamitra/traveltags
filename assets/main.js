fetch('/assets/countries.json')
  .then(response => response.json())
  .then(data => createCountryList(data));

function createCountryList(countriesData) {
  const container = document.getElementById("world-list");
  container.innerHTML = "";
  
  Object.keys(countriesData).forEach(continent => {
    
    const continentDiv = document.createElement("div");
    continentDiv.classList.add("continent-title");
    continentDiv.textContent = continent;
    
    const countryList = document.createElement("ul");
    countryList.classList.add("countries-list");
    
    countriesData[continent].forEach(country => {
      const li = document.createElement("li");
      const link = document.createElement("a");
      
      const continentSlug = continent.toLowerCase().replace(/\s+/g, '-');
      const countrySlug = country.toLowerCase().replace(/\s+/g, '-');
      
      link.href = `/${continentSlug}/${countrySlug}.html`;
      link.textContent = country;
      
      li.appendChild(link);
      countryList.appendChild(li);
    });
    
    continentDiv.addEventListener("click", function() {
      this.classList.toggle("open");
      countryList.style.display =
        countryList.style.display === "block" ? "none" : "block";
    });
    
    container.appendChild(continentDiv);
    container.appendChild(countryList);
  });
}