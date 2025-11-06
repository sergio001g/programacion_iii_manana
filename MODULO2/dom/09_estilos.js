const target = document.getElementById('target');
const bg = document.getElementById('bg');
const fg = document.getElementById('fg');
const size = document.getElementById('size');
const radius = document.getElementById('radius');
const theme = document.getElementById('theme');
const chkShadow = document.getElementById('chkShadow');
const chkRounded = document.getElementById('chkRounded');
const chkRotate = document.getElementById('chkRotate');
const resetBtn = document.getElementById('reset');

function applyInline() {
  target.style.backgroundColor = bg.value;
  target.style.color = fg.value;
  target.style.fontSize = size.value + 'px';
  target.style.borderRadius = radius.value + 'px';
}

bg.addEventListener('input', applyInline);
fg.addEventListener('input', applyInline);
size.addEventListener('input', applyInline);
radius.addEventListener('input', applyInline);

theme.addEventListener('change', () => {
  target.classList.remove('theme-light', 'theme-dark');
  if (theme.value === 'light') target.classList.add('theme-light');
  if (theme.value === 'dark') target.classList.add('theme-dark');
});

chkShadow.addEventListener('change', () => {
  target.classList.toggle('shadow', chkShadow.checked);
});

chkRounded.addEventListener('change', () => {
  target.classList.toggle('rounded', chkRounded.checked);
});

chkRotate.addEventListener('change', () => {
  target.classList.toggle('rotate', chkRotate.checked);
});

resetBtn.addEventListener('click', () => {
  bg.value = '#f5f5f5';
  fg.value = '#111111';
  size.value = '16';
  radius.value = '2';
  theme.value = 'none';
  target.className = '';
  target.style = '';
  target.textContent = 'Caja de ejemplo';
});

applyInline();