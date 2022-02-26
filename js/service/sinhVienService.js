const BASE_URL = "https://620e4f3d585fbc3359dda8e8.mockapi.io/sinhvien";

const sinhVienService = {
  layDanhSachSinhVien: function () {
    return axios({
      url: BASE_URL,
      method: "GET",
    });
  },
  themSinhVien: function (_data) {
    return axios({
      url: BASE_URL,
      method: "POST",
      data: _data,
    });
  },
  xoaSinhVien: function (_id) {
    return axios({
      url: `${BASE_URL}/${_id}`,
      method: "DELETE",
    });
  },
  layChiTietSinhVien: function (_id) {
    return axios({
      url: `${BASE_URL}/${_id}`,
      method: "GET",
    });
  },
  capNhatSinhVien: function (_id, _data) {
    return axios({
      url: `${BASE_URL}/${_id}`,
      method: "PUT",
      data: _data,
    });
  },
};
