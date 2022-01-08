(() => {
  const refs = {
    openMenuBtn: document.querySelector('.phone__menu-open-btn'),
    closeMenuBtn: document.querySelector('.phone__menu-close-btn'),
    menu: document.querySelector('.phone__menu'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }
})();