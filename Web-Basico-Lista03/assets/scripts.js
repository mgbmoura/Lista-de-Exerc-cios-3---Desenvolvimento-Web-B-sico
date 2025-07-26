document.addEventListener('DOMContentLoaded', function() {
  const hamburgerButton = document.getElementById('hamburger-btn');
  const closeButton = document.getElementById('close-btn');
  const sidebarMenu = document.getElementById('sidebar-menu');
  const overlay = document.getElementById('overlay');

  if (hamburgerButton && closeButton && sidebarMenu && overlay) {
    function openMenu() {
      sidebarMenu.classList.add('open');
      overlay.classList.add('show');
    }

    function closeMenu() {
      sidebarMenu.classList.remove('open');
      overlay.classList.remove('show');
    }

    hamburgerButton.addEventListener('click', openMenu);
    closeButton.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);
  } else {
    console.error("Erro: Um ou mais elementos do menu não foram encontrados no HTML.");
  }
});