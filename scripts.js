  function toggleMenu() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.getElementById('mobileMenu');

    hamburger.classList.toggle('open');          // animate icon
    mobileMenu.classList.toggle('show');         // show / hide menu
  }
