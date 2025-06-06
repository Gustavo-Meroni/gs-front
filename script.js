document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();

  const menuBtn = document.getElementById('btn-menu');
  const menuMobile = document.getElementById('menu-mobile');

  if (menuBtn && menuMobile) {
    const menuLinks = menuMobile.querySelectorAll('a');

    menuBtn.addEventListener('click', () => {
      const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', String(!isExpanded));
      menuMobile.classList.toggle('hidden');

      menuBtn.innerHTML = isExpanded
        ? '<i data-lucide="menu"></i>'
        : '<i data-lucide="x"></i>';

      lucide.createIcons();
    });

    menuLinks.forEach((link) => {
      link.addEventListener('click', () => {
        menuMobile.classList.add('hidden');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.innerHTML = '<i data-lucide="menu"></i>';
        lucide.createIcons();
      });
    });
  }

  const form = document.getElementById('contato-form');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      alert('Mensagem enviada com sucesso!');
      form.reset();
    });
  }
});
