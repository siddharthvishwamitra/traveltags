function filterCountries() {
  let input = document.getElementById('searchInput').value.toLowerCase();
  let continents = document.querySelectorAll('.continent-title'); // Continent titles
  let found = false;
  
  continents.forEach(continent => {
    let countryList = continent.nextElementSibling; // The UL list after title
    let countries = countryList.querySelectorAll('li');
    let hasMatch = false;
    
    countries.forEach(li => {
      let country = li.textContent.toLowerCase();
      if (country.includes(input)) {
        li.style.display = "";
        hasMatch = true;
      } else {
        li.style.display = "none";
      }
    });
    
    // Expand continent if it has matching countries
    if (hasMatch) {
      continent.style.display = "";
      countryList.style.display = "block"; // Show matched continent
      continent.classList.add("open"); // Add "open" class for icon change
      found = true;
    } else {
      continent.style.display = "none";
      countryList.style.display = "none"; // Collapse non-matching continent
      continent.classList.remove("open"); // Remove "open" class
    }
  });
  
  let noResults = document.getElementById("noResults");
  
  // If no results, show message
  if (!found) {
    if (!noResults) {
      noResults = document.createElement("p");
      noResults.id = "noResults";
      noResults.textContent = "No results found.";
      noResults.style.fontFamily = "IGSans-R";
      noResults.style.fontSize = "16px";
      noResults.style.textAlign = "center";
      document.getElementById("world-list").appendChild(noResults);
    }
  } else {
    if (noResults) noResults.remove();
  }
  
  // If input is empty, reset all
  if (input === "") {
    continents.forEach(continent => {
      continent.style.display = "";
      continent.nextElementSibling.style.display = "none"; // Collapse all lists
      continent.classList.remove("open"); // Reset icon state
    });
    if (noResults) noResults.remove();
  }
}