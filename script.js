const themeButton = document.querySelector('.theme-button');
const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme === 'dark' || (!savedTheme && matchMedia('(prefers-color-scheme: dark)').matches)) document.body.classList.add('dark');
themeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('portfolio-theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});
document.querySelector('#year').textContent = new Date().getFullYear();
const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
}), { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
document.querySelectorAll('.project a').forEach(link => link.addEventListener('click', event => {
  if (link.getAttribute('href') === '#') event.preventDefault();
}));
