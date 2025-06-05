document.addEventListener('DOMContentLoaded', () => {
  lucide.replace();

  const menuBtn = document.getElementById('menu-btn');
  const menuMobile = document.getElementById('menu-mobile'); // menu mobile

  menuBtn.addEventListener('click', () => {
    const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';

    menuBtn.setAttribute('aria-expanded', String(!isExpanded));

    menuMobile.classList.toggle('hidden'); // alterna menu mobile

    menuBtn.innerHTML = isExpanded
      ? '<i data-lucide="menu"></i>'
      : '<i data-lucide="x"></i>';

    lucide.replace();
  });
});
