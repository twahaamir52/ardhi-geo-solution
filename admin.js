document.getElementById("drugForm").addEventListener("submit", function(e){
    e.preventDefault();
  
    const data = {
      name: name.value,
      price: price.value,
      stock: stock.value
    };
  
    fetch("add_drug.php",{
      method:"POST",
      headers:{ "Content-Type":"application/json" },
      body: JSON.stringify(data)
    })
    .then(() => {
      document.getElementById("msg").textContent = "✅ Dawa imeongezwa kikamilifu";
      this.reset();
      loadDrugs();
    });
  });
  
  function loadDrugs(){
    fetch("get_drugs.php")
      .then(res => res.json())
      .then(data => {
        const table = document.getElementById("drugTable");
        table.innerHTML = "";
  
        data.forEach(d => {
          table.innerHTML += `
            <tr>
              <td>${d.name}</td>
              <td>${d.price}</td>
              <td>${d.stock}</td>
            </tr>
          `;
        });
      });
  }
  
  loadDrugs();
  