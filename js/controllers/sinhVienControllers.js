let sinhVienControllers = {
  renderTable: function (arr) {
    let tBodyEl = document.getElementById("tbodySinhVien");
    let contentHTML = "";
    arr.map((item) => {
      let trContent = `<tr>
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.email}</td>
        <td>${item.getDiemTb()}</td>
        <td>
        <button class="btn btn-success" onclick="suaSV(${item.id})">Sửa</button>
        <button class="btn btn-danger" onclick="xoaSV(${item.id})">Xóa</button>
        </td>
        </tr>`;
      contentHTML += trContent;
    });

    tBodyEl.innerHTML = contentHTML;
  },
  layThongTinTuForm: function () {
    let tenSV = document.getElementById("txtTenSV").value;
    let maSV = document.getElementById("txtMaSV").value;
    let emailSV = document.getElementById("txtEmail").value;
    let diemToan = document.getElementById("txtDiemToan").value;
    let diemLy = document.getElementById("txtDiemLy").value;
    let diemHoa = document.getElementById("txtDiemHoa").value;

    return {
      id: maSV,
      name: tenSV,
      email: emailSV,
      toan: diemToan,
      ly: diemLy,
      hoa: diemHoa,
    };
  },
  duaThongTinLenForm: function (sv) {
    document.getElementById("txtTenSV").value = sv.name;
    document.getElementById("txtMaSV").value = sv.id;
    document.getElementById("txtEmail").value = sv.email;
    document.getElementById("txtDiemToan").value = sv.toan;
    document.getElementById("txtDiemLy").value = sv.ly;
    document.getElementById("txtDiemHoa").value = sv.hoa;
    document.getElementById("txtMaSV").readOnly = true;
  },
  xoaThongTinTrenForm: function () {
    document.getElementById("txtTenSV").value = "";
    document.getElementById("txtMaSV").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtDiemToan").value = "";
    document.getElementById("txtDiemLy").value = "";
    document.getElementById("txtDiemHoa").value = "";
    document.getElementById("txtMaSV").readOnly = false;
  },
};
