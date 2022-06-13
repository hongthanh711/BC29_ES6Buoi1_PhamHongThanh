const headingContent = document.querySelector(".heading").innerHTML;

const letter = [...headingContent];

let content = "";
letter.forEach((item) => {
  content += `<span>${item}</span>`;
});

console.log(content);

document.querySelector(".heading").innerHTML = content;
