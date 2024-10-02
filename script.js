let btnEl = document.getElementById("btn");
let popupEl = document.getElementById("popup");
let closeBtnEl = document.getElementById("closeBtn");

btnEl.onclick = function () {
  popupEl.classList.add("active");
  btnEl.style.display = "none";
};

closeBtnEl.onclick = function () {
  popupEl.classList.remove("active");
  btnEl.style.display = "block";
};
