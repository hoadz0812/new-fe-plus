function createRow(rowData) {
  const row = document.createElement("tr");
  row.innerHTML = `
      <tr>
          <td>${rowData.id}</td>
          <td>${rowData.madv}</td>
          <td>${rowData.tendv}</td>
          <td>${rowData.dongia}</td>
          <td>${rowData.mota}</td>  
          <td><a href="form-editdv.html?id=${rowData.id}"><button class="btn btn-info btn-icon-anim btn-square" onclick="updateDVById(${rowData.id});"><i class="fa fa-pencil-square-o"></i></button></a></td>
          <td><button class="btn btn-info btn-icon-anim btn-square" onclick="delDV(${rowData.id})"><i class="icon-trash"></i></button></td>
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
