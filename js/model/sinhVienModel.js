function round(num) {
  var m = Number((Math.abs(num) * 10).toPrecision(15));
  return (Math.round(m) / 10) * Math.sign(num);
}

function SV(name, email, toan, ly, hoa, id) {
  this.name = name;
  this.email = email;
  this.id = id;
  this.toan = toan;
  this.ly = ly;
  this.hoa = hoa;
  this.getDiemTb = function () {
    return round((this.toan * 1 + this.ly * 1 + this.hoa * 1) / 3);
  };
}
