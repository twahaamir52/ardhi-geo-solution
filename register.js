const drugs = [
    { id: 1, name: "Paracetamol", price: 500, stock: 10 },
    { id: 2, name: "Amoxicillin", price: 1500, stock: 6 },
    { id: 3, name: "Vitamin C", price: 800, stock: 12 },
    { id: 4, name: "Cough Syrup", price: 3000, stock: 4 }
  ];
  
  let total = 0;
  
  function displayDrugs(list) {
    const table = document.getElementById("drugTable");
    table.innerHTML = "";
  
    list.forEach(drug => {
      const row = document.createElement("tr");
  
      row.innerHTML = `
        <td>${drug.name}</td>
        <td>${drug.price}</td>
        <td>${drug.stock}</td>
        <td>
          <button onclick="sellDrug(${drug.id})" ${drug.stock === 0 ? "disabled" : ""}>
            Uza
          </button>
        </td>
      `;
      table.appendChild(row);
    });
  }
  
  function sellDrug(id) {
    const drug = drugs.find(d => d.id === id);
    if (drug.stock > 0) {
      drug.stock--;
      total += drug.price;
  
      const cart = document.getElementById("cart");
      const li = document.createElement("li");
      li.textContent = `${drug.name} - Tsh ${drug.price}`;
      cart.appendChild(li);
  
      document.getElementById("total").textContent = total;
      displayDrugs(drugs);
    }
  }
  
  // Search
  document.getElementById("search").addEventListener("input", function () {
    const value = this.value.toLowerCase();
    const filtered = drugs.filter(d =>
      d.name.toLowerCase().includes(value)
    );
    displayDrugs(filtered);
  });
  
  // Start
  displayDrugs(drugs);
  