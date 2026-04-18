import { foiz } from "./math.js";

let a = document.getElementById("a");
let b = document.getElementById("b");
let natija = document.getElementById("natija");
let span = document.getElementById("foizBelgi");

// hisoblash
document.getElementById("foiz").onclick = function () {
  natija.textContent = foiz(Number(a.value), Number(b.value));
};

// tozalash
document.getElementById("clear").onclick = function () {
  natija.textContent = "";
  a.value = "";
  b.value = "";
  span.style.display = "none";
};

// % ni ko‘rsatish
b.addEventListener("input", function () {
  if (b.value !== "") {
    span.style.display = "block";
  } else {
    span.style.display = "none";
  }
});