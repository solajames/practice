let navbarItem = document.querySelectorAll(".header__nav-item");
for (let i = 0; i < navbarItem.length; i++) {
  navbarItem[i].addEventListener("click", function () {
    for (let i = 0; i < navbarItem.length; i++) {
      navbarItem[i].classList.remove("active");
    }
    this.classList.add("active");
  });
}

let typed = new Typed(".multiple-text", {
  strings: ["Forntend Developer", "Blibli User", "Game Player"],
  typeSpeed: 100,
  backSpeed: 100,
  bcakDelay: 1000,
  loop: true,
});
