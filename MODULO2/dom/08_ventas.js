const priceEl = document.getElementById('price');
const qtyEl = document.getElementById('qty');
const calcBtn = document.getElementById('calc');
const subtotalEl = document.getElementById('subtotal');
const taxEl = document.getElementById('tax');
const totalEl = document.getElementById('total');

function toNumber(el) {
  const v = Number(el.value);
  return Number.isFinite(v) ? v : 0;
}

function format(n) {
  return n.toFixed(2);
}

calcBtn.addEventListener('click', () => {
  const price = toNumber(priceEl);
  const qty = toNumber(qtyEl);
  const subtotal = price * qty;
  const tax = subtotal * 0.18;
  const total = subtotal + tax;
  subtotalEl.textContent = format(subtotal);
  taxEl.textContent = format(tax);
  totalEl.textContent = format(total);
});