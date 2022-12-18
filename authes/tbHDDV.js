function createRow(rowData) {
  const row = document.createElement("tr");
  row.innerHTML = `
      <tr>
          <td>${rowData.id}</td>
          <td>${rowData.mahddv}</td>
          <td>${rowData.makh}</td>
          <td>${new Date(rowData.ngaylap).toString()}</td>
          <td>${rowData.manv}</td>
          <td>${rowData.tongtien} VNĐ</td>   
          <td><button class="btn btn-info btn-icon-anim btn-square" onclick="delHDDV(${
            rowData.id
          })"><i class="icon-trash"></i></button></td>
      </tr>
    `;
  return row;
}

(async function () {
  const foodTable = document.querySelector("#foods_table tbody");
  // const URL = "http://localhost:3000/food";
  const foods = await getAllHDDV();
  if (foods.length) {
    for (const food of foods) {
      foodTable.appendChild(createRow(food));
    }
  }
})();

function delHDDV(id) {
  if (confirm("Do you want Delete?")) {
    deleteHDDV(id);
    window.location.reload();
  }
}
