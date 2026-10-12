const menu = document.querySelector<HTMLButtonElement>('.menu-toggle');
const nav = document.getElementById('main-navigation');
if (menu && nav) {
  menu.hidden = false;
  document.documentElement.classList.add('navigation-ready');
  const close = () => { menu.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); };
  menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); nav.classList.toggle('open', open); });
  nav.addEventListener('click', event => { if ((event.target as Element).closest('a')) close(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') { close(); menu.focus(); } });
}
