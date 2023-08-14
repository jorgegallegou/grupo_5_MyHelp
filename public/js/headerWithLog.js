const droplink = document.querySelector("#droplink");
const dropdown = document.querySelector("#dropdown-content");
const button = document.querySelector("#hidden");

if (droplink) {
  droplink.addEventListener("click", () => {
    dropdown.classList.add("deploy");
  });
}
if (button) {
  button.addEventListener("click", () => {
    dropdown.classList.remove("deploy");
  });
}
