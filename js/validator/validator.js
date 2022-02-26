let validator = {
  kiemTraSo: function (value, idErr) {
    errEl = document.getElementById(idErr);
    let parten = new RegExp("^(0|[1-9][0-9]*)$");
    if (parten.test(value)) {
      errEl.innerText = "";
      return true;
    } else {
      errEl.innerText = "Trường này phải điền số";
      return false;
    }
  },
  kiemTraKiTu: function (value, idErr) {
    errEl = document.getElementById(idErr);
    let parten = new RegExp("[A-Za-z]");
    if (parten.test(value)) {
      errEl.innerText = "";
      return true;
    } else {
      errEl.innerText = "Trường này phải điền chuỗi";
      return false;
    }
  },
  kiemTraDoDai: function (value, idErr) {
    errEl = document.getElementById(idErr);
    let length = value.trim().length;
    if (length < 5) {
      errEl.innerText = "Độ dài tối thiểu phải lớn hơn 5";
      return false;
    }
    if (length > 15) {
      errEl.innerText = "Độ dài tối thiểu phải bé hơn 15";
      return false;
    }
    errEl.innerText = "";
    return true;
  },
  kiemTraEmail: function (value, idErr) {
    errEl = document.getElementById(idErr);
    let parten = /\S+@\S+\.\S+/;
    if (parten.test(value)) {
      errEl.innerText = "";
      return true;
    } else {
      errEl.innerText = "Trường này phải điền email";
      return false;
    }
  },
  kiemTraDiem: function (value, idErr) {
    errEl = document.getElementById(idErr);
    if (Number.isNaN(value * 1)) {
      errEl.innerText = "Trường này phải điền số";
      return false;
    }
    if (value * 1 < 0 || value * 1 > 10) {
      errEl.innerText =
        "Điểm số không được nhỏ hơn 0 hoặc không được lớn hơn 10";
      return false;
    }
    errEl.innerText = "";
    return true;
  },
};
