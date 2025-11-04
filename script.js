// Menú móvil simple
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('#menuBtn');
  const panel = document.querySelector('#mobilePanel');
  btn?.addEventListener('click', () => {
    panel?.classList.toggle('hidden');
  });

  // Dropdown "Servicios" (desktop)
  const services = document.querySelector('#services');
  const menu = document.querySelector('#servicesMenu');
  if (services && menu) {
    services.addEventListener('mouseenter', () => menu.classList.remove('hidden'));
    services.addEventListener('mouseleave', () => menu.classList.add('hidden'));
    services.addEventListener('click', (e) => {
      e.preventDefault();
      menu.classList.toggle('hidden');
    });
  }
});
