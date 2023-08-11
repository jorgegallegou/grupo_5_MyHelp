const droplink = document.querySelector("#droplink");
const dropdown = document.querySelector("#dropdown-content");
const button = document.querySelector("#hidden");

droplink.addEventListener("click", () => {
  dropdown.classList.add("deploy");
});
button.addEventListener("click", () => {
  dropdown.classList.remove("deploy");
});
