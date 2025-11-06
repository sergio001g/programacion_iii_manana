const products = [
  { id: 1, name: 'Teclado', price: 25.9 },
  { id: 2, name: 'Mouse', price: 12.5 },
  { id: 3, name: 'Monitor', price: 180 },
  { id: 4, name: 'USB-C Cable', price: 6.9 },
  { id: 5, name: 'Webcam', price: 49 },
  { id: 6, name: 'Headset', price: 39.5 }
];

const grid = document.getElementById('products');
const filterInput = document.getElementById('filter');
const clearBtn = document.getElementById('clear');
const selectedEl = document.getElementById('selected');

let selectedCount = 0;

function render(list) {
  grid.innerHTML = '';
  list.forEach(p => {
    const card = document.createElement('div');
    card.className = 'card';
    const title = document.createElement('strong');
    title.textContent = p.name;
    const price = document.createElement('span');
    price.textContent = `$${p.price.toFixed(2)}`;
    const btn = document.createElement('button');
    btn.textContent = 'Seleccionar';
    btn.addEventListener('click', () => {
      const isSelected = card.classList.toggle('selected');
      selectedCount += isSelected ? 1 : -1;
      selectedEl.textContent = String(selectedCount);
    });
    card.append(title, price, btn);
    grid.appendChild(card);
  });
}

filterInput.addEventListener('input', () => {
  const q = filterInput.value.toLowerCase().trim();
  const list = products.filter(p => p.name.toLowerCase().includes(q));
  render(list);
});

clearBtn.addEventListener('click', () => {
  filterInput.value = '';
  selectedCount = 0;
  selectedEl.textContent = '0';
  render(products);
});

render(products);