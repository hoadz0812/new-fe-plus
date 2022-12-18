  function createRow(rowData) {
    const row = document.createElement("tr");
    row.innerHTML = `
      <tr>
          <td>${rowData.id}</td>
          <td>${rowData.nhanvienId}</td>
          <td>${rowData.username}</td>
          <td>*************</td>
      </tr>
    `;
    return row;
  }
  
  (async function () {
    const foodTable = document.querySelector("#foods_table tbody");
    // const URL = "http://localhost:3000/food";
    const foods = await getAllTK();
    if (foods.length) {
      for (const food of foods) {
        foodTable.appendChild(createRow(food));
      }
    }
  })();
  
  // function delDV(id){
  //   deleteDV(id);
  //   window.location.reload();
  // }
// function deleteDV(name){
//     return confirm("Bạn có chắc chắn muốn xóa dịch vụ: " + name + " ?");
// }