function createRow(rowData) {
  const row = document.createElement("tr");
  row.innerHTML = `
      <tr> 
          <td><input type="checkbox"></td>
          <td>${rowData.id}</td>
          <td>${rowData.madv}</td>
          <td>${rowData.tendv}</td>
          <td>${rowData.dongia}</td>
          <td>${rowData.mota}</td>
          <td>${rowData.mota}</td>  
          <td>${rowData.mota}</td>    
      </tr>
    `;

  return row;
}

(async function () {
  const foodTable = document.querySelector("#foods_table tbody");
  // const URL = "http://localhost:4000/dichvu";
  const foods = await getAllDV();
  if (foods.length) {
    for (const food of foods) {
      foodTable.appendChild(createRow(food));
    }
  }
  console.log(foods);
})();

function delDV(id) {
  if (confirm("Do you want Delete?")) {
    deleteDV(id);
    window.location.reload();
  }
}
