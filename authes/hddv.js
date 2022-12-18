const curDate = new Date();
const curDay = curDate.getDate();
const curMon = curDate.getMonth() + 1;
const curYear = curDate.getFullYear();
const curHour = curDate.getHours();
const curMinute = curDate.getMinutes();
const curSecond = curDate.getSeconds();
const date = curYear + "-" + curMon + "-" + curDay;
const time = curHour + ":" + curMinute + ":" + curSecond;

function calculateAmount(tableData) {
  const thanhtien = tableData.map((o) => o.dongia * o.luongsd);
  const tongtien = document.querySelector("span#tongtien");
  const ttien = document.querySelector("input[name=tongtien]");
  tongtien.innerText = thanhtien.reduce((sum, curr) => sum + curr) + " VNĐ";
  ttien.value = thanhtien.reduce((sum, curr) => sum + curr);
}

function addRow(rowData) {
  const tableBody = document.querySelector("#hoadon_table tbody");
  const row = document.createElement("tr");
  row.innerHTML = `
        <td>${rowData.stt}</td>
        <td>${rowData.tendv}</td>
        <td>${rowData.luongsd}</td>
        <td>${rowData.dongia}</td>
        <td>${rowData.luongsd * rowData.dongia}</td>
	`;
  tableBody.appendChild(row);
}

(async () => {
  const dichvus = await getAllDV();
  console.log(dichvus);
  const select = document.querySelector("#madv");
  const dongiaInput = document.querySelector("#dongia");
  const tendvInput = document.querySelector("#tendv");
  dichvus.forEach((dv) => {
    const option = document.createElement("option");
    option.value = dv.madv;
    option.innerText = dv.madv;
    option.dataset.dongia = dv.dongia;
    option.dataset.tendv = dv.tendv;
    select.appendChild(option);
  });
  select.onchange = function (e) {
    const dongia = e.target.selectedOptions[0].dataset.dongia;
    dongiaInput.value = dongia;
    const tendv = e.target.selectedOptions[0].dataset.tendv;
    tendvInput.value = tendv;
  };

  const tableData = [];
  const btnAdd = document
    .getElementById("btnAdd")
    .addEventListener("click", function () {
      const dichvu = dichvus.find((val) => val.madv === select.value);
      const luongsd = document.getElementById("luongsd").value;
      if (dichvu && luongsd) {
        const data = {
          ...dichvu,
          luongsd,
        };
        tableData.push(data);
        addRow({
          stt: tableData.length,
          ...data,
        });
        calculateAmount(tableData);
      }
    });
})();

(async () => {
  const khs = await getAllKH();
  console.log(khs);
  const select = document.querySelector("#makh");
  const tennvInput = document.querySelector("#tenkh");
  khs.forEach((kh) => {
    const option = document.createElement("option");
    option.value = kh.makh;
    option.innerText = kh.makh;
    option.dataset.tenkh = kh.tenkh;
    select.appendChild(option);
  });

  select.onchange = function (e) {
    const tenkh = e.target.selectedOptions[0].dataset.tenkh;
    tennvInput.value = tenkh;

    document.getElementById("tenkh").innerHTML = tennvInput.value;
  };
})();

(async () => {
  const nvs = await getAllNV();
  console.log(nvs);
  const select = document.querySelector("#id");
  const tennvInput = document.querySelector("#name");
  nvs.forEach((nv) => {
    const option = document.createElement("option");
    option.value = nv.id;
    option.innerText = nv.id;
    option.dataset.name = nv.name;
    select.appendChild(option);
  });
  select.onchange = function (e) {
    const name = e.target.selectedOptions[0].dataset.name;
    tennvInput.value = name;

    document.getElementById("name").innerHTML = tennvInput.value;
  };
})();

document.getElementById("mahddv").addEventListener("keyup", function () {
  // name = document.getElementById("name").value;
  document.getElementById("mahddv2").innerHTML = this.value;
});

document.getElementById("btnAdd").addEventListener("click", function () {
  // const mahddv = document.querySelector("input[name=mahddv]").value;
  const madv = document.querySelector("select[name=madv]").value;
  const luongsd = document.querySelector("input[name=luongsd]").value;
  const dongia = document.querySelector("input[name=dongia]").value;

  const dataPost = {
    madv,
    luongsd,
    dongia,
  };
  createNewDVSD(dataPost).then(console.log);
});

document.getElementById("btnSubmit").addEventListener("click", function () {
  const mahddv = document.querySelector("input[name=mahddv]").value;
  const makh = document.querySelector("select[name=makh]").value;
  const ngaylap = date + " " + time;
  const manv = document.querySelector("select[name=id]").value;
  const tongtien = document.querySelector("input[name=tongtien]").value;

  const dataPost = {
    mahddv,
    makh,
    ngaylap,
    manv,
    tongtien,
  };
  createNewHDDV(dataPost).then((data) => {
    console.log(data);
    if (data.message) alert(data.message);
    else {
      window.location.href = "basic-tablethddv.html";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  //////////////
  //////////////
  document.querySelector("#btn-one").addEventListener("click", function () {
    html2canvas(document.querySelector("#example-bill")).then((canvas) => {
      let base64image = canvas.toDataURL("image/png");
      // console.log(base64image);
      let pdf = new jsPDF("p", "px", [1320, 1120]);
      pdf.addImage(base64image, "PNG", 15, 15, 1110, 360);
      pdf.save("hddv.pdf");
    });
  });
  //////////////
  //////////////
});

document.getElementById("tongtien").disabled = true;
document.getElementById("dongia").disabled = true;
document.getElementById("tendv").disabled = true;
