const getEle = (id) => {
  return document.getElementById(id);
};

const tinhDTB = (...diem) => {
  let dtb = 0;
  let sum = 0;
  diem.forEach((item) => {
    sum += item;
  });
  return (dtb = sum / diem.length);
};

document.getElementById("btnKhoi1").onclick = () => {
  const toan = getEle("inpToan").value * 1;
  const ly = getEle("inpLy").value * 1;
  const hoa = getEle("inpHoa").value * 1;

  const dtb = tinhDTB(toan, ly, hoa);

  getEle("tbKhoi1").innerHTML = dtb;
};

document.getElementById("btnKhoi2").onclick = () => {
  const van = getEle("inpVan").value * 1;
  const su = getEle("inpSu").value * 1;
  const dia = getEle("inpDia").value * 1;
  const english = getEle("inpEnglish").value * 1;

  const dtb = tinhDTB(van, su, dia, english);

  getEle("tbKhoi2").innerHTML = dtb;
};
