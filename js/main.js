let renderTableDSSV = () => {
  sinhVienService
    .layDanhSachSinhVien()
    .then((res) => {
      let convertedArr = res.data.map((item) => {
        let { name, email, toan, ly, hoa, id } = item;
        return new SV(name, email, toan, ly, hoa, id);
      });
      sinhVienControllers.renderTable(convertedArr);
    })
    .catch((err) => {
      alert(` ${err} `);
    });
};

renderTableDSSV();

document.getElementById("btn-add").addEventListener("click", function () {
  let svOject = sinhVienControllers.layThongTinTuForm();
  let isValue =
    validator.kiemTraDoDai(svOject.id, "spanMaSV") &&
    validator.kiemTraSo(svOject.id, "spanMaSV") &
      (validator.kiemTraDoDai(svOject.name, "spanTenSV") &&
        validator.kiemTraKiTu(svOject.name, "spanTenSV")) &
      validator.kiemTraEmail(svOject.email, "spanEmailSV") &
      validator.kiemTraDiem(svOject.toan, "spanToan") &
      validator.kiemTraDiem(svOject.ly, "spanLy") &
      validator.kiemTraDiem(svOject.hoa, "spanHoa");
  isValue &&
    sinhVienService
      .themSinhVien(svOject)
      .then(() => {
        alert("Thêm sinh viên thành công");
        renderTableDSSV();
        sinhVienControllers.xoaThongTinTrenForm();
      })
      .catch((err) => {
        alert("Thêm sinh viên thất bại" + err);
      });
});

function xoaSV(id) {
  sinhVienService
    .xoaSinhVien(id)
    .then((res) => {
      renderTableDSSV();
    })
    .catch((err) => {});
}

function suaSV(id) {
  sinhVienService
    .layChiTietSinhVien(id)
    .then((res) => {
      // console.log(res);
      sinhVienControllers.duaThongTinLenForm(res.data);
    })
    .catch();
}

function resetSV() {
  let id = document.getElementById("txtMaSV").value.trim();

  sinhVienService
    .layChiTietSinhVien(id)
    .then((res) => {
      // console.log(res);
      sinhVienControllers.duaThongTinLenForm(res.data);
      (validator.kiemTraDoDai(res.data.name, "spanTenSV") &&
        validator.kiemTraKiTu(res.data.name, "spanTenSV")) &
        validator.kiemTraEmail(res.data.email, "spanEmailSV") &
        validator.kiemTraDiem(res.data.toan, "spanToan") &
        validator.kiemTraDiem(res.data.ly, "spanLy") &
        validator.kiemTraDiem(res.data.hoa, "spanHoa");
    })
    .catch(() => {
      sinhVienControllers.xoaThongTinTrenForm();
    });
}

function capNhatSV() {
  let id = document.getElementById("txtMaSV").value.trim();
  let svOject = sinhVienControllers.layThongTinTuForm();

  let isValue =
    (validator.kiemTraDoDai(svOject.name, "spanTenSV") &&
      validator.kiemTraKiTu(svOject.name, "spanTenSV")) &
    validator.kiemTraEmail(svOject.email, "spanEmailSV") &
    validator.kiemTraDiem(svOject.toan, "spanToan") &
    validator.kiemTraDiem(svOject.ly, "spanLy") &
    validator.kiemTraDiem(svOject.hoa, "spanHoa");
  isValue &&
    sinhVienService
      .layChiTietSinhVien(id)
      .then(() => {
        sinhVienService
          .capNhatSinhVien(id, svOject)
          .then(() => {
            renderTableDSSV();
            alert("Cập nhật thông tin sinh viên thành công");
            sinhVienControllers.xoaThongTinTrenForm();
          })
          .catch((err) => {
            alert(
              "Không thể cập nhật thông tin sinh viên này lên Server " + err
            );
          });
      })
      .catch((err) => {
        alert("Sinh viên này không có trên hệ thống " + err);
      });
}
