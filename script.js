function show(id, tab) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  tab.classList.add('active');
  document.getElementById('status-file').textContent = id;
}

document.addEventListener('keydown', e => {
  const tabs = document.querySelectorAll('.tab');
  const active = document.querySelector('.tab.active');
  const idx = [...tabs].indexOf(active);
  if (e.key === 'ArrowRight' && idx < tabs.length - 1) tabs[idx+1].click();
  if (e.key === 'ArrowLeft' && idx > 0) tabs[idx-1].click();
});
