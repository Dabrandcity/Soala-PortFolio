function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  const icon = document.getElementById("hamburger");

  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
  icon.classList.toggle("open");
}


// Optional: Close mobile menu on link click
// document.querySelectorAll('.mobile-menu a').forEach(link => {
//   link.addEventListener('click', () => {
//     document.querySelector('.mobile-menu').classList.remove('open');
//     document.querySelector('.hamburger').classList.remove('open');
//   });
// });
