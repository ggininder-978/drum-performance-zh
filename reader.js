document.querySelector('#print').addEventListener('click', () => window.print());
const links = [...document.querySelectorAll('.page-nav a')];
const observer = new IntersectionObserver(entries => {
  const visible = entries.filter(entry => entry.isIntersecting);
  if (!visible.length) return;
  const target = visible[0].target.id;
  links.forEach(link => {
    if (link.hash === `#${target}`) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
}, { rootMargin: '-15% 0px -55% 0px' });
document.querySelectorAll('.sheet').forEach(page => observer.observe(page));
