function createRow(rowData) {
  const row = document.createElement("tr");
  row.innerHTML = `
      <tr>
          <td>${rowData.id}</td>
          <td>${rowData.name}</td>
          <td>${rowData.email}</td>
          <td>${rowData.address}</td>
          <td>${getDate(rowData.dob)}</td>
          <td>${rowData.phone}</td>
          <td>${rowData.gender}</td>
        
          <td><a href="form-editnv.html?id=${rowData.id}"><button class="btn btn-info btn-icon-anim btn-square" onclick="updateNVById(${rowData.id});"><i class="fa fa-pencil-square-o"></i></button></a></td>
          <td><button class="btn btn-info btn-icon-anim btn-square" onclick="delNV(${rowData.id})"><i class="icon-trash"></i></button></td>
      </tr>
    `;
  return row;
}

(async function () {
  const foodTable = document.querySelector("#foods_table tbody");
  // const URL = "http://localhost:3000/food";
  const foods = await getAllNV();
  if (foods.length) {
    for (const food of foods) {
      foodTable.appendChild(createRow(food));
    }
  }
  console.log(foods);
})();

function delNV(id) {
  if (confirm("Do you want Delete?")) {
    deleteNV(id);
    window.location.reload();
  }
}
