const menuItems = document.querySelectorAll(".navigation__link");
const menuCheckbox = document.querySelector("#navi-toggle");

menuItems.forEach(item => item.addEventListener("click", toggleMenu));

function toggleMenu() {
  menuCheckbox.checked = !menuCheckbox.checked;
}
