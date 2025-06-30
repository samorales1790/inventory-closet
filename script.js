const searchBar = document.getElementById("searchBar");
const resultsDiv = document.getElementById("results");
const categoryFilter = document.getElementById("categoryFilter");

function displayResults() {
  const search = searchBar.value.toLowerCase();
  const category = categoryFilter.value;
  const results = inventory.filter(item =>
    item.name.toLowerCase().includes(search) &&
    (category === "" || item.category === category)
  );

  resultsDiv.innerHTML = results.length
    ? results.map(item => `
        <div class="item">
          <strong>${item.name}</strong><br>
          Location: ${item.tower} – ${item.drawer} (${item.category})
        </div>`).join("")
    : "<p>No items found.</p>";
}

function populateCategoryFilter() {
  const categories = [...new Set(inventory.map(item => item.category))];
  categories.forEach(cat => {
    const option = document.createElement("option");
    option.value = cat;
    option.textContent = cat;
    categoryFilter.appendChild(option);
  });
}

searchBar.addEventListener("input", displayResults);
categoryFilter.addEventListener("change", displayResults);

populateCategoryFilter();
displayResults();
