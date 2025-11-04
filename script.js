// Menú móvil
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('#menuBtn');
  const panel = document.querySelector('#mobilePanel');
  btn?.addEventListener('click', () => panel?.classList.toggle('hidden'));

  // Dropdown "Servicios"
  const services = document.querySelector('#services');
  const menu = document.querySelector('#servicesMenu');
  const toggle = document.querySelector('#servicesToggle');

  if (services && menu && toggle) {
    // Hover (desktop)
    services.addEventListener('mouseenter', () => menu.classList.remove('hidden'));
    services.addEventListener('mouseleave', () => menu.classList.add('hidden'));

    // Click (móvil/desktop)
    toggle.addEventListener('click', (e) => {
      e.preventDefault();                 // solo el botón toggle
      menu.classList.toggle('hidden');
    });

    // Cerrar al hacer click en un enlace del menú
    menu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => menu.classList.add('hidden'));
    });
  }
});
