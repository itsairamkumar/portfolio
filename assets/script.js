function show(id, tab) {
  document.querySelectorAll('.section').forEach((s) => s.classList.remove('active'));
  document.querySelectorAll('.tab').forEach((t) => {
    t.classList.remove('active');
    t.setAttribute('aria-selected', 'false');
  });
  document.getElementById(id).classList.add('active');
  tab.classList.add('active');
  tab.setAttribute('aria-selected', 'true');
  document.getElementById('status-file').textContent = id;
  tab.scrollIntoView({ inline: 'nearest', block: 'nearest', behavior: 'smooth' });
}

function showSection(id) {
  const tab = document.querySelector(`.tab[aria-controls="${id}"]`);
  if (tab) show(id, tab);
}

document.addEventListener('keydown', (e) => {
  if (e.target.matches('input, textarea, select')) return;

  const tabs = [...document.querySelectorAll('.tab')];
  const active = document.querySelector('.tab.active');
  const idx = tabs.indexOf(active);

  if (e.key === 'ArrowRight' && idx < tabs.length - 1) {
    e.preventDefault();
    tabs[idx + 1].click();
  }
  if (e.key === 'ArrowLeft' && idx > 0) {
    e.preventDefault();
    tabs[idx - 1].click();
  }
});
