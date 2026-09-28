(() => {
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');

  const setMenu = (open) => {
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  };

  toggle.addEventListener('click', () => setMenu(!nav.classList.contains('is-open')));
  nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });
  window.addEventListener('resize', () => { if (window.innerWidth > 768) setMenu(false); });

  // Placeholder project/contact links shouldn't jump to the top of the page
  document.querySelectorAll('a[href="#"]').forEach((a) =>
    a.addEventListener('click', (e) => e.preventDefault())
  );
})();
