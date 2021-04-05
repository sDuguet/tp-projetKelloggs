const a1 = document.querySelector("#tableaux__nav--1");
const a2 = document.querySelector("#tableaux__nav--2");
const t1 = document.querySelector("#tab1");
const t2 = document.querySelector("#tab2");

a1.addEventListener("click", (event) => {
  a1.classList.add("active");
  a2.classList.remove("active");
  t2.classList.add("hide");
  t1.classList.remove("hide");
});
a2.addEventListener("click", (event) => {
  a2.classList.add("active");
  a1.classList.remove("active");
  t1.classList.add("hide");
  t2.classList.remove("hide");
});
