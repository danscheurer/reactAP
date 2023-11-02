const estado = document.getElementById('estado');
// const evento = document.getElementById('evento');

estado.addEventListener('change', (event) => {
  evento.textContent = event.target.value;
});