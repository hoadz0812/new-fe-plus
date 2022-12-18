const API_BASE_URL = "http://localhost:3000/api";
const tokens = JSON.parse(localStorage.getItem("tokens"));

function getAllTK() {
  const url = API_BASE_URL + "/taikhoan";
  return fetch(url, {
    headers: {
      authorization: tokens.accessToken,
    },
  }).then((res) => res.json());
}

function getAllNV() {
  const url = API_BASE_URL + "/nhanvien";
  return fetch(url, {
    headers: {
      authorization: tokens.accessToken,
    },
  }).then((res) => res.json());
}

function createNewNV(nhanvien) {
  const url = API_BASE_URL + "/nhanvien";
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(nhanvien),
    headers: {
      "Content-type": "application/json",
      authorization: tokens.accessToken,
    },
  }).then((res) => res.json());
}

function updateNVById(id, nhanvien) {
  const url = API_BASE_URL + "/nhanvien/" + id;
  return fetch(url, {
    method: "PATCH",
    body: JSON.stringify(nhanvien),
    headers: {
      "Content-type": "application/json",
      authorization: tokens.accessToken,
    },
  }).then((res) => res.json());
}

function getNVByID(id) {
  const url = API_BASE_URL + "/nhanvien/" + id;
  return fetch(url, {
    headers: {
      "Content-type": "application/json",
      authorization: tokens.accessToken,
    },
  }).then((res) => res.json());
}

function deleteNV(id) {
  const url = API_BASE_URL + "/nhanvien/" + id;
  return fetch(url, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      authorization: tokens.accessToken,
    },
  }).then((res) => res.json());
}

function searchNVById(keyword) {
  const url =
    API_BASE_URL + "/nhanvien/search?name=" + encodeURIComponent(keyword);
  return fetch(url, {
    headers: {
      "Content-type": "application/json",
      authorization: tokens.accessToken,
    },
  }).then((res) => res.json());
}

//Dich vu
function getAllDV() {
  const url = API_BASE_URL + "/dichvu";
  return fetch(url, {
    headers: {
      authorization: tokens.accessToken,
    },
  }).then((res) => res.json());
}

function createNewDV(dichvu) {
  const url = API_BASE_URL + "/dichvu";
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(dichvu),
    headers: {
      "Content-type": "application/json",
      authorization: tokens.accessToken,
    },
  }).then((res) => res.json());
}

function updateDVById(id, dichvu) {
  const url = API_BASE_URL + "/dichvu/" + id;
  return fetch(url, {
    method: "PATCH",
    body: JSON.stringify(dichvu),
    headers: {
      "Content-type": "application/json",
      authorization: tokens.accessToken,
    },
  }).then((res) => res.json());
}

function deleteDV(id) {
  const url = API_BASE_URL + "/dichvu/" + id;
  return fetch(url, {
    method: "DELETE",
  }).then((res) => res.json());
}

function getDVByID(id) {
  const url = API_BASE_URL + "/dichvu/" + id;
  return fetch(url, {
    headers: {
      "Content-type": "application/json",
      authorization: tokens.accessToken,
    },
  }).then((res) => res.json());
}

function searchDVById(keyword) {
  const url =
    API_BASE_URL + "/dichvu/search?tendv=" + encodeURIComponent(keyword);
  return fetch(url, {
    headers: {
      "Content-type": "application/json",
      authorization: tokens.accessToken,
    },
  }).then((res) => res.json());
}

//Khách hàng
function getAllKH() {
  const url = API_BASE_URL + "/khachhang";
  return fetch(url, {
    headers: {
      authorization: tokens.accessToken,
    },
  }).then((res) => res.json());
}

function createNewKH(khachhang) {
  const url = API_BASE_URL + "/khachhang";
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(khachhang),
    headers: {
      "Content-type": "application/json",
      authorization: tokens.accessToken,
    },
  }).then((res) => res.json());
}

function updateKHById(id, khachhang) {
  const url = API_BASE_URL + "/khachhang/" + id;
  return fetch(url, {
    method: "PATCH",
    body: JSON.stringify(khachhang),
    headers: {
      "Content-type": "application/json",
      authorization: tokens.accessToken,
    },
  }).then((res) => res.json());
}

function getKHByID(id) {
  const url = API_BASE_URL + "/khachhang/" + id;
  return fetch(url, {
    headers: {
      "Content-type": "application/json",
      authorization: tokens.accessToken,
    },
  }).then((res) => res.json());
}

function deleteKH(id) {
  const url = API_BASE_URL + "/khachhang/" + id;
  return fetch(url, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      authorization: tokens.accessToken,
    },
  }).then((res) => res.json());
}

function searchKHById(keyword) {
  const url =
    API_BASE_URL + "/khachhang/search?tenkh=" + encodeURIComponent(keyword);
  return fetch(url, {
    headers: {
      "Content-type": "application/json",
      authorization: tokens.accessToken,
    },
  }).then((res) => res.json());
}

//Tien nghi
function getAllTN() {
  const url = API_BASE_URL + "/tiennghi";
  return fetch(url, {
    headers: {
      authorization: tokens.accessToken,
    },
  }).then((res) => res.json());
}

function createNewTN(tiennghi) {
  const url = API_BASE_URL + "/tiennghi";
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(tiennghi),
    headers: {
      "Content-type": "application/json",
      authorization: tokens.accessToken,
    },
  }).then((res) => res.json());
}

function updateTNById(id, tiennghi) {
  const url = API_BASE_URL + "/tiennghi/" + id;
  return fetch(url, {
    method: "PATCH",
    body: JSON.stringify(tiennghi),
    headers: {
      "Content-type": "application/json",
      authorization: tokens.accessToken,
    },
  }).then((res) => res.json());
}

function getTNByID(id) {
  const url = API_BASE_URL + "/tiennghi/" + id;
  return fetch(url, {
    headers: {
      "Content-type": "application/json",
      authorization: tokens.accessToken,
    },
  }).then((res) => res.json());
}

function deleteTN(id) {
  const url = API_BASE_URL + "/tiennghi/" + id;
  return fetch(url, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      authorization: tokens.accessToken,
    },
  }).then((res) => res.json());
}

function searchTNById(keyword) {
  const url =
    API_BASE_URL + "/tiennghi/search?tentn=" + encodeURIComponent(keyword);
  return fetch(url, {
    headers: {
      "Content-type": "application/json",
      authorization: tokens.accessToken,
    },
  }).then((res) => res.json());
}

//Phong
function getAllPh() {
  const url = API_BASE_URL + "/phong";
  return fetch(url, {
    headers: {
      authorization: tokens.accessToken,
    },
  }).then((res) => res.json());
}

function createNewPh(phong) {
  const url = API_BASE_URL + "/phong";
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(phong),
    headers: {
      "Content-type": "application/json",
      authorization: tokens.accessToken,
    },
  }).then((res) => res.json());
}

function updatePhById(id, phong) {
  const url = API_BASE_URL + "/phong/" + id;
  return fetch(url, {
    method: "PATCH",
    body: JSON.stringify(phong),
    headers: {
      "Content-type": "application/json",
      authorization: tokens.accessToken,
    },
  }).then((res) => res.json());
}

function getPhByID(id) {
  const url = API_BASE_URL + "/phong/" + id;
  return fetch(url, {
    headers: {
      "Content-type": "application/json",
      authorization: tokens.accessToken,
    },
  }).then((res) => res.json());
}

function deletePh(id) {
  const url = API_BASE_URL + "/phong/" + id;
  return fetch(url, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      authorization: tokens.accessToken,
    },
  }).then((res) => res.json());
}

function searchPhById(keyword) {
  const url =
    API_BASE_URL + "/phong/search?maphong=" + encodeURIComponent(keyword);
  return fetch(url, {
    headers: {
      "Content-type": "application/json",
      authorization: tokens.accessToken,
    },
  }).then((res) => res.json());
}

//Tai khoan
function createNewTaiKhoan(taikhoan) {
  const url = API_BASE_URL + "/taikhoan";
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(taikhoan),
    headers: {
      "Content-type": "application/json",
      authorization: tokens.accessToken,
    },
  }).then((res) => res.json());
}

function updateTKByUsername(taikhoan) {
  const url = API_BASE_URL + "/taikhoan/password";
  return fetch(url, {
    method: "PATCH",
    body: JSON.stringify(taikhoan),
    headers: {
      "Content-type": "application/json",
      authorization: tokens.accessToken,
    },
  }).then((res) => res.json());
}
//dich vu su dung
function getAllDVSD() {
  const url = API_BASE_URL + "/dichvusd";
  return fetch(url, {
    headers: {
      authorization: tokens.accessToken,
    },
  }).then((res) => res.json());
}

function createNewDVSD(dichvusd) {
  const url = API_BASE_URL + "/dichvusd";
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(dichvusd),
    headers: {
      "Content-type": "application/json",
      authorization: tokens.accessToken,
    },
  }).then((res) => res.json());
}

function getDVSDByID(id) {
  const url = API_BASE_URL + "/dichvusd/" + id;
  return fetch(url).then((res) => res.json());
}

//hoa don dich vu
function createNewHDDV(hddichvu) {
  const url = API_BASE_URL + "/hddichvu";
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(hddichvu),
    headers: {
      "Content-type": "application/json",
      authorization: tokens.accessToken,
    },
  }).then((res) => res.json());
}

function getAllHDDV() {
  const url = API_BASE_URL + "/hddichvu";
  return fetch(url, {
    headers: {
      authorization: tokens.accessToken,
    },
  }).then((res) => res.json());
}

function searchHDDVByName(keyword) {
  const url =
    API_BASE_URL + "/hddichvu/search?mahddv=" + encodeURIComponent(keyword);
  return fetch(url, {
    headers: {
      "Content-type": "application/json",
      authorization: tokens.accessToken,
    },
  }).then((res) => res.json());
}

function deleteHDDV(id) {
  const url = API_BASE_URL + "/hddichvu/" + id;
  return fetch(url, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      authorization: tokens.accessToken,
    },
  }).then((res) => res.json());
}

//phieu thue
function getAllPT() {
  const url = API_BASE_URL + "/phieuthue";
  return fetch(url).then((res) => res.json());
}

function createNewPT(phieuthue) {
  const url = API_BASE_URL + "/phieuthue";
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(phieuthue),
    headers: {
      "Content-type": "application/json",
    },
  }).then((res) => res.json());
}

function deletePT(id) {
  const url = API_BASE_URL + "/phieuthue/" + id;
  return fetch(url, {
    method: "DELETE",
  }).then((res) => res.json());
}

function searchPTById(keyword) {
  const filter = {
    where: {
      mapt: {
        regexp: "^" + keyword,
      },
    },
  };
  const url = API_BASE_URL + "/phieuthue?filter=" + JSON.stringify(filter);
  return fetch(url).then((res) => res.json());
}

// tien nghi phong
function getAllTNP() {
  const url = API_BASE_URL + "/tiennghiphong";
  return fetch(url, {
    headers: {
      authorization: tokens.accessToken,
    },
  }).then((res) => res.json());
}

function createNewTNP(tiennghiphong) {
  const url = API_BASE_URL + "/tiennghiphong";
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(tiennghiphong),
    headers: {
      "Content-type": "application/json",
      authorization: tokens.accessToken,
    },
  }).then((res) => res.json());
}

function updateTNPById(id, tiennghiphong) {
  const url = API_BASE_URL + "/tiennghiphong/" + id;
  return fetch(url, {
    method: "PATCH",
    body: JSON.stringify(tiennghiphong),
    headers: {
      "Content-type": "application/json",
      authorization: tokens.accessToken,
    },
  }).then((res) => res.json());
}

function getTNPByID(id) {
  const url = API_BASE_URL + "/tiennghiphong/" + id;
  return fetch(url, {
    headers: {
      "Content-type": "application/json",
      authorization: tokens.accessToken,
    },
  }).then((res) => res.json());
}

function deleteTNP(id) {
  const url = API_BASE_URL + "/tiennghiphong/" + id;
  return fetch(url, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      authorization: tokens.accessToken,
    },
  }).then((res) => res.json());
}

function searchTNPById(keyword) {
  const url =
    API_BASE_URL + "/tiennghiphong/search?matn=" + encodeURIComponent(keyword);
  return fetch(url, {
    headers: {
      "Content-type": "application/json",
      authorization: tokens.accessToken,
    },
  }).then((res) => res.json());
}

// tai khoan

function login(taikhoan) {
  const url = API_BASE_URL + "/taikhoan/login";
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(taikhoan),
    headers: {
      "Content-type": "application/json",
    },
  }).then((res) => res.json());
}

function getDate(dateString) {
  var date = new Date(dateString);
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();
  return day + "/" + month + "/" + year;
}

// PHONG
function getPhongTrong() {
  const url = API_BASE_URL + "/phong/trong";
  return fetch(url, {
    headers: {
      "Content-type": "application/json",
      authorization: tokens.accessToken,
    },
  }).then((res) => res.json());
}

function createCheckIn(data) {
  const url = API_BASE_URL + "/phong/thuephong";
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json",
      authorization: tokens.accessToken,
    },
  }).then((res) => res.json());
}

function getPhongDangThue(keyword = "") {
  const url = API_BASE_URL + "/phong/dangthue?makh=" + keyword;
  return fetch(url, {
    headers: {
      "Content-type": "application/json",
      authorization: tokens.accessToken,
    },
  }).then((res) => res.json());
}

function traPhong(phieuthueId, phongIds = []) {
  const url = API_BASE_URL + "/phong/traphong";
  return fetch(url, {
    method: "POST",
    body: JSON.stringify({
      phieuthueId,
      phongs: phongIds,
    }),
    headers: {
      "Content-type": "application/json",
      authorization: tokens.accessToken,
    },
  }).then((res) => res.json());
}

function getHoaDonById(id) {
  const url = API_BASE_URL + "/hoadon/" + id;
  return fetch(url, {
    headers: {
      "Content-type": "application/json",
      authorization: tokens.accessToken,
    },
  }).then((res) => res.json());
}

function getAllPhongDatra() {
  const url = API_BASE_URL + "/phong/phongdatra";
  return fetch(url, {
    headers: {
      "Content-type": "application/json",
      authorization: tokens.accessToken,
    },
  }).then((res) => res.json());
}
