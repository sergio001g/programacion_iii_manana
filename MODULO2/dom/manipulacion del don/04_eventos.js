document.addEventListener('DOMContentLoaded', () => {
  const parrafo = document.getElementById('miParrafo');
  const btnTexto = document.getElementById('miBoton');
  const btnRojo = document.getElementById('btnRojo');
  const btnAzul = document.getElementById('btnAzul');
  const btnToggle = document.getElementById('btnToggle');
  const nombre = document.getElementById('nombre');
  const salida = document.getElementById('salida');

  // Cambiar texto del párrafo
  btnTexto?.addEventListener('click', () => {
    parrafo.textContent = 'El párrafo ha sido clicado!';
  });

  // Cambiar color a rojo
  btnRojo?.addEventListener('click', () => {
    parrafo.style.color = 'red';
  });

  // Cambiar color a azul
  function cambiarColor() {
    parrafo.style.color = 'blue';
  }
  btnAzul?.addEventListener('click', cambiarColor);

  // Alternar fondo
  btnToggle?.addEventListener('click', () => {
    parrafo.classList.toggle('bg');
  });

  // Input en tiempo real
  nombre?.addEventListener('input', (e) => {
    const valor = e.target.value.trim();
    salida.textContent = valor ? `Hola, ${valor}` : '';
  });

  // Doble clic para resetear
  parrafo?.addEventListener('dblclick', () => {
    parrafo.textContent = 'Texto inicial del párrafo';
    parrafo.style.color = '';
    parrafo.classList.remove('bg');
  });
});
