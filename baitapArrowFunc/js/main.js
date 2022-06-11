// Khai báo mảng màu
const colorList = [
  "pallet",
  "varidian",
  "pewter",
  "cerulean",
  "vermil",
  "lion",
  "lavender",
  "celadon",
  "saffron",
  "fuschia",
  "cinnabar",
];

// Load ra UI
const loadCoLor = () => {
  let content = "";
  colorList.forEach((item) => {
    content += `<button class='color-button ${item}'> </button>`;
  });
  document.getElementById("colorContainer").innerHTML = content;
};

loadCoLor();

// Đổi màu
