function createRow(rowData) {
    const row = document.createElement("tr");
    row.innerHTML = `
      <tr>
          <td>${rowData.id}</td>
          <td>${rowData.mahddv}</td>
          <td>${rowData.madv}</td>
          <td>${rowData.luongsd}</td>
          <td>${rowData.dongia} VNĐ</td>  
      </tr>
    `;
    return row;
  }
  
  (async function () {
    const foodTable = document.querySelector("#foods_table tbody");
    // const URL = "http://localhost:3000/food";
    const foods = await getAllDVSD();
    if (foods.length) {
      for (const food of foods) {
        foodTable.appendChild(createRow(food));
      }
    }
  })();
  
  // function delKH(id){
  //   deleteKH(id);
  //   window.location.reload();
  // }