function addToTable(table, ...rowDatas) {
  let tableBody = table.tBodies[0];
  let row = tableBody.insertRow();
  for (let data of rowDatas) {
    let cell = row.insertCell();
    cell.innerHTML = data;
  }
}

(async function () {
  const phongDaTras = await getAllPhongDatra();

  const table = document.querySelector("#foods_table table");
  for (const phong of phongDaTras) {
    addToTable(
      table,
      phong.id,
      phong.phieuthue?.khachhang?.makh,
      phong.phieuthue?.khachhang?.tenkh,
      phong.phieuthue?.nhanvien?.id,
      phong.phieuthue?.nhanvien?.name,
      getDate(phong.ngaytra),
      `<td><a href="print-receipt.html?id=${phong.id}" target="_blank"><button class="btn btn-info btn-icon-anim btn-square"><i class="fa fa-pencil-square-o"></i></button></a></td>`
    );
  }
})();
