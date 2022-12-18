(async function () {
  // get id from query string
  const id = window.location.search.split("=")[1];
  console.log(id);
  getHoaDonById(id).then(function (res) {
    $("#manv").text(res.phieuthue.nhanvien.id);
    $("#name").text(res.phieuthue.nhanvien.name);
    $("#tenkh").text(res.phieuthue.khachhang.tenkh);
    $("#sdt").text(res.phieuthue.khachhang.sdt);
    $("#makh").text(res.phieuthue.khachhang.makh);

    $("#ngaytra").text(getDate(res.ngaytra));
    $("#mapt").text(res.id);

    const curNgayTraPh = new Date(res.ngaytra);
    let tongtienphong = 0;
    res.phongthues.forEach(function (item) {
      const row = `
        <tr> 
            <td class="text-center">${item.phongId}</td>
            <td class="text-center">${getDate(item.ngayden)}</td>
            <td class="text-center">${getDate(item.ngaydenhan)}</td>
            <td class="text-center">${item.giathue}</td> 
        </tr>
        `;
      $("#tb_phong").append(row);
      const curDateND = new Date(item.ngayden);
      const curDateNT = new Date(item.ngaydenhan);
      const curDayND = curDateNT.getTime() - curDateND.getTime();
      const curTT = curDateNT.getTime() - curNgayTraPh.getTime();
      // const curDayND =
      //   curDateNT.getTime() - curDateND.getTime() - curNgayTraPh.getTime();
      const curTTT = curDayND - curTT;
      const curDay = new Date(curTTT);
      const curTraPhong = curDay.getDate();
      tongtienphong += item.giathue * curTraPhong;

      //   $("#maphong").text(item.phongId);
      //   $("#ngayden").text(getDate(item.ngayden));
      //   $("#ngaydenhan").text(getDate(item.ngaydenhan));
      //   $("#giathue").text(item.giathue);
    });
    $("#tongtien").text(tongtienphong);
  });
})();
