function createRow(rowData) {
  const row = document.createElement("tr");
  row.innerHTML = `
      <tr>
          <td>${rowData.id}</td>
          <td>${rowData.makh}</td>
          <td>${rowData.tenkh}</td>
          <td>${rowData.diachi}</td>
          <td>${rowData.sdt}</td>
          <td>${getDate(rowData.dob)}</td>
          <td>${rowData.gender}</td>
          <td>${rowData.quoctich}</td>
          <td>${rowData.cccd}</td>
          <td>${rowData.hochieu}</td>
          
          <td><a href="form-editkh.html?id=${rowData.id}"><button class="btn btn-info btn-icon-anim btn-square" onclick="updateKHById(${rowData.id});"><i class="fa fa-pencil-square-o"></i></button></a></td>
          <td><button class="btn btn-info btn-icon-anim btn-square" onclick="delKH(${rowData.id})"><i class="icon-trash"></i></button></td>
      </tr>
    `;
  return row;
}

(async function () {
  const foodTable = document.querySelector("#foods_table tbody");
  // const URL = "http://localhost:3000/food";
  const foods = await getAllKH();
  if (foods.length) {
    for (const food of foods) {
      foodTable.appendChild(createRow(food));
    }
  }
  console.log(foods);
})();


