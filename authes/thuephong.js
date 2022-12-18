(async function () {
  function onAddPhong() {
    const makh = document.querySelector("[name=makh]").value;
    const maphong = document.querySelector("[name=maphong]").value;
    const ngayden = document.querySelector("[name=ngayden]").value;
    const ngaydi = document.querySelector("[name=ngaydi]").value;
    const dientich = document.querySelector("[name=dientich]").value;
    const giathue = document.querySelector("[name=giathue]").value;

    if (!makh || !maphong || !ngayden || !ngaydi) {
      alert("Vui lòng nhập đầy đủ thông tin");
      return;
    }
    if (compareDate(new Date(ngayden), new Date(ngaydi)) >= 0) {
      alert("Ngày đến phải nhỏ hơn ngày đi");
      return;
    }
    if (compareDate(new Date(ngayden), new Date()) < 0) {
      alert("Ngày đến phải lớn hơn ngày hiện tại");
      return;
    }
    addRow(maphong, dientich, giathue, ngayden, ngaydi);
    const phong = phongTrongsOriginal.find((item) => item.maphong === maphong);
    phongSelected.push({
      id: phong.id,
      maphong,
      ngayden,
      ngaydi,
    });
    deletePhongByMaPhong(phongTrongs, maphong);
    reloadSelect(
      phongTrongs,
      document.querySelector("[name=maphong]"),
      "maphong",
      "maphong"
    );
    return false;
  }

  function addOptions(selectbox, text, value) {
    var optn = document.createElement("OPTION");
    optn.text = text;
    optn.value = value;
    selectbox.value = value;
    selectbox.options.add(optn);
  }

  function deletePhongByMaPhong(array = [], maPhong) {
    const deleteItem = array.findIndex((kh) => kh.maphong === maPhong);
    if (deleteItem >= 0) {
      array.splice(deleteItem, 1);
    }
  }

  function compareDate(a, b) {
    if (a.getFullYear() < b.getFullYear()) return -1;
    if (a.getFullYear() > b.getFullYear()) return 1;
    if (a.getMonth() < b.getMonth()) return -1;
    if (a.getMonth() > b.getMonth()) return 1;
    if (a.getDate() < b.getDate()) return -1;
    if (a.getDate() > b.getDate()) return 1;
    return 0;
  }

  function addRow(maphong, dientich, giathue, ngayden, ngaydi) {
    var table = document.getElementById("example");
    var row = table.insertRow(table.rows.length);
    console.log(table.rows);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    cell1.innerHTML = table.rows.length - 1;
    cell2.innerHTML = maphong;
    cell3.innerHTML = dientich;
    cell4.innerHTML = giathue;
    cell5.innerHTML = ngayden;
    cell6.innerHTML = ngaydi;
    cell7.innerHTML = `<button class="btn btn-danger" data-id="${maphong}"><i class="icon-trash"></i></button>`;
  }

  function reloadSelect(array = [], selectbox, textKey = "", valueKey = "") {
    selectbox.innerHTML = "";
    array.sort((a, b) => a[textKey].localeCompare(b[textKey]));
    array.forEach((kh) => addOptions(selectbox, kh[textKey], kh[valueKey]));
    selectbox.onchange && selectbox.onchange();
  }

  document.querySelector("[name=maphong]").onchange = () => {
    const dientich = document.querySelector("[name=dientich]");
    const giathue = document.querySelector("[name=giathue]");
    const maphong = document.querySelector("[name=maphong]").value;
    const phong = phongTrongsOriginal.find((item) => item.maphong === maphong);
    if (phong) {
      dientich.value = phong.dientich;
      giathue.value = phong.dongia;
    } else {
      dientich.value = "";
      giathue.value = "";
    }
  };

  const khachHangs = await getAllKH();
  reloadSelect(
    khachHangs,
    document.querySelector("[name=makh]"),
    "makh",
    "makh"
  );

  const phongTrongsOriginal = await getPhongTrong();
  const phongTrongs = [...phongTrongsOriginal];
  let phongSelected = [];
  reloadSelect(
    phongTrongs,
    document.querySelector("[name=maphong]"),
    "maphong",
    "maphong"
  );

  document.getElementById("btnAdd").addEventListener("click", onAddPhong);
  window.onclick = function (event) {
    if (event.target.className === "btn btn-danger") {
      const maPhong = event.target.getAttribute("data-id");
      const phong = phongTrongsOriginal.find((kh) => kh.maphong === maPhong);
      phongSelected = phongSelected.filter((kh) => kh.maphong !== maPhong);
      if (phong) phongTrongs.push(phong);
      reloadSelect(
        phongTrongs,
        document.querySelector("[name=maphong]"),
        "maphong",
        "maphong"
      );
      event.target.parentElement.parentElement.remove();
    }
  };
  document.getElementById("btn-one").addEventListener("click", async () => {
    const makh = document.querySelector("[name=makh]").value;
    const tiencoc = document.querySelector("[name=dongia]").value;

    if (!makh || !tiencoc || !phongSelected.length) {
      alert("Vui lòng nhập đầy đủ thông tin và chọn phòng");
      return;
    }

    const data = {
      makh,
      tiencoc,
      phongs: phongSelected,
    };
    createCheckIn(data).then((res) => {
      console.log(res);
      if (res.message) alert(res.message);
      else {
        window.location.href = "basic-tabletraphong.html";
      }
    });
  });

  document.getElementById("dongia").addEventListener("keyup", function () {
    document.getElementById("tiencoc").innerHTML = this.value;
  });

  document.querySelector("#btn-two").addEventListener("click", function () {
    html2canvas(document.querySelector("#example-bill")).then((canvas) => {
      let base64image = canvas.toDataURL("image/png");
      // console.log(base64image);
      let pdf = new jsPDF("p", "px", [1320, 900]);
      pdf.addImage(base64image, "PNG", 15, 15, 1110, 360);
      pdf.save("thuephong.pdf");
    });
  });
})();
