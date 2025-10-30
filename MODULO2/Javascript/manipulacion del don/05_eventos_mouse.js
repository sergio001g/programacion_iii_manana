document.addEventListener('DOMContentLoaded', () => {

  const titulo = document.getElementById('mensaje');
  const link = document.getElementById('link');
  const area = document.getElementById('area');
  const coords = document.getElementById('coords');

  titulo?.addEventListener('mouseenter', () => {
    titulo.textContent = 'Mouse encima del título';
    titulo.style.color = '#2563eb';
    titulo.style.transform = 'scale(1.03)';
  });
  titulo?.addEventListener('mouseleave', () => {
    titulo.textContent = 'TEXTO ORIGINAL';
    titulo.style.color = '';
    titulo.style.transform = '';
  });

  link?.addEventListener('mouseenter', () => link.classList.add('boton'));
  link?.addEventListener('mouseleave', () => link.classList.remove('boton'));
  link?.addEventListener('click', (e) => {
    e.preventDefault();
    titulo.textContent = 'Hiciste clic en el Link (preventDefault)';
  });

  
  area?.addEventListener('mouseenter', () => area.classList.add('hover'));
  area?.addEventListener('mouseleave', () => {
    area.classList.remove('hover');
    coords.textContent = '';
    area.style.transform = '';
    area.style.borderColor = '';
  });

  area?.addEventListener('mousemove', (e) => {
    const { offsetX, offsetY } = e;
    coords.textContent = `x: ${offsetX}, y: ${offsetY}`;
  });

  area?.addEventListener('mousedown', () => {
    area.style.borderColor = '#f59e0b';
  });
  area?.addEventListener('mouseup', () => {
    area.style.borderColor = '#60a5fa';
  });

  area?.addEventListener('wheel', (e) => {
    e.preventDefault();
    
    const current = area.style.transform.match(/scale\(([^)]+)\)/);
    const scale = current ? parseFloat(current[1]) : 1;
    const next = Math.min(1.25, Math.max(0.85, scale + (e.deltaY < 0 ? 0.05 : -0.05)));
    area.style.transform = `scale(${next})`;
  }, { passive: false });
});