(() => {
  const refs = {
    openMenuBtn: document.querySelector('.phone-menu-open-btn'),
    closeMenuBtn: document.querySelector('.phone-menu-close-btn'),
    menu: document.querySelector('.phone-menu'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }
})();