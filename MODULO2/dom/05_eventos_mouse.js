const box = document.getElementById('box');
const elEnter = document.getElementById('enter');
const elLeave = document.getElementById('leave');
const elClicks = document.getElementById('clicks');
const elMoves = document.getElementById('moves');

let cEnter = 0;
let cLeave = 0;
let cClicks = 0;
let cMoves = 0;

box.addEventListener('mouseenter', () => {
  cEnter++;
  elEnter.textContent = String(cEnter);
  box.style.background = '#e3f2fd';
});

box.addEventListener('mouseleave', () => {
  cLeave++;
  elLeave.textContent = String(cLeave);
  box.style.background = '';
});

box.addEventListener('click', () => {
  cClicks++;
  elClicks.textContent = String(cClicks);
  box.style.borderColor = cClicks % 2 ? '#1976d2' : '#333';
});

box.addEventListener('mousemove', () => {
  cMoves++;
  if (cMoves % 5 === 0) elMoves.textContent = String(cMoves);
});