        // Load JSON via fetch
        fetch('/assets/countries.json')
          .then(response => response.json())
          .then(data => createCountryList(data))
          .catch(error => console.error("Error loading JSON:", error));
        
        function createCountryList(countriesData) {
          const container = document.getElementById("world-list");
          container.innerHTML = ""; // Clear loading text
          
          Object.keys(countriesData).forEach(continent => {
            // Create continent div
            const continentDiv = document.createElement("div");
            continentDiv.classList.add("continent-title");
            continentDiv.textContent = continent;
            
            // Create country list
            const countryList = document.createElement("ul");
            countryList.classList.add("countries-list");
            
            countriesData[continent].forEach(country => {
              const li = document.createElement("li");
              const link = document.createElement("a");
              link.href = `/${continent}/${country}.html`; // Set link
              link.textContent = country;
              li.appendChild(link);
              countryList.appendChild(li);
            });
            
            // Expand/collapse logic
            continentDiv.addEventListener("click", function() {
              this.classList.toggle("open");
              countryList.style.display = countryList.style.display === "block" ? "none" : "block";
            });
            
            container.appendChild(continentDiv);
            container.appendChild(countryList);
          });
        }