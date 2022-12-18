function addToTable(table, ...rowDatas) {
  let tableBody = table.tBodies[0];
  let row = tableBody.insertRow();
  for (let data of rowDatas) {
    let cell = row.insertCell();
    cell.innerHTML = data;
  }
}

(async function () {
  const phongDangThues = await getPhongDangThue();
  let phongTras = [];
  let phieuthueId = undefined;

  const table = document.querySelector("#foods_table table");
  for (const phong of phongDangThues) {
    const input = `<input type="checkbox" name="phongIds" data-phieuthue="${phong.phieuthue.id}" value="${phong.id}">`;
    const curDateND = new Date(phong.ngayden);
    const curDateNT = new Date(phong.ngaydenhan);
    const curDayND = curDateNT.getTime() - curDateND.getTime();
    const curDay = new Date(curDayND);
    const curTraPhong = curDay.getDate();
    addToTable(
      table,
      input,
      phong.phieuthue?.id,
      phong.phieuthue?.khachhang?.makh,
      phong.phieuthue?.khachhang?.tenkh,
      phong.phong?.maphong,
      phong.giathue,
      getDate(phong.ngayden),
      getDate(phong.ngaydenhan),
      curTraPhong * parseInt(phong.giathue)
    );
  }

  window.onchange = function (e) {
    if (e.target.name === "phongIds") {
      if (e.target.checked) {
        phongTras.push(e.target.value);
        if (phongTras.length === 1) {
          phieuthueId = e.target.dataset.phieuthue;
          const currentPhieuThueId = e.target.dataset.phieuthue;
          const others = document.querySelectorAll(
            '[name=phongIds]:not([data-phieuthue="' + currentPhieuThueId + '"])'
          );
          others.forEach((o) => (o.disabled = true));
        }
      } else {
        phongTras = phongTras.filter((phongId) => phongId !== e.target.value);
        if (phongTras.length === 0) {
          const others = document.querySelectorAll("[name=phongIds]");
          others.forEach((o) => (o.disabled = false));
        }
      }
    }
    console.log(e);
  };

  $("#btnReceipt").on("click", function () {
    if (phongTras.length === 0) {
      alert("Chưa chọn phòng");
      return;
    }

    const phongs = phongDangThues.filter((p) => phongTras.includes(p.id + ""));
    const table_traPhongDetails = $("#table_traPhongDetails table tbody");
    table_traPhongDetails.empty();
    console.log(phongs);
    $(".modal span.makh").text(phongs[0].phieuthue.khachhang.makh);
    $(".modal span.tenkh").text(phongs[0].phieuthue.khachhang.tenkh);
    $(".modal span.maphieuthue").text(phongs[0].phieuthue.id);
    $(".modal span.tiencoc").text(phongs[0].phieuthue.tiencoc);

    for (const phong of phongs) {
      table_traPhongDetails.append(
        `<tr>
            <td>${phong.phong.maphong}</td>
            <td>${phong.giathue}</td>
            <td>${getDate(phong.ngayden)}</td>
            <td>${getDate(phong.ngaydenhan)}</td>
        </tr>`
      );
    }
    $("#traPhongModal").modal("show");
  });

  $("#confirmTraPhong").on("click", async function () {
    traPhong(phieuthueId, phongTras).then((res) => {
      // window.location.href = "/print-receipt.html?id=" + res.id;
      window.open("/print-receipt.html?id=" + res.id);
      window.location.reload();
    });
  });

  document
    .getElementById("search-tp")
    .addEventListener("click", async function () {
      const keyword = document.querySelector("[name=search_kh]").value;
      const phongDangThue = await getPhongDangThue(keyword);
      const table = document.querySelector("#foods_table table");
      table.tBodies[0].innerHTML = "";
      for (const phong of phongDangThue) {
        const input = `<input type="checkbox" name="phongIds" data-phieuthue="${phong.phieuthue.id}" value="${phong.id}">`;
        addToTable(
          table,
          input,
          phong.phieuthue?.id,
          phong.phieuthue?.khachhang?.makh,
          phong.phieuthue?.khachhang?.tenkh,
          phong.phong?.maphong,
          phong.giathue,
          getDate(phong.ngayden),
          getDate(phong.ngaydenhan)
        );
      }
    });
})();
