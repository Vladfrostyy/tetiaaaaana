const btn = document.querySelector("#no-btn");

btn.addEventListener("mouseover", () => {
  btn.style.top = Math.floor(Math.random() * 290) + "px";
  btn.style.left = Math.floor(Math.random() * 290) + "px";
});
btn.addEventListener("click", () => {
  btn.style.top = Math.floor(Math.random() * 290) + "px";
  btn.style.left = Math.floor(Math.random() * 290) + "px";
});
/*/////////////////////////////////////////////////////*/
