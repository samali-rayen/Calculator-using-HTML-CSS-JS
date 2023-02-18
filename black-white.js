const modeToggle = document.getElementById('mode-toggle');
const calculator=document.getElementById('calc')
const body = document.querySelector('body');

function toggleMode() {
  body.classList.toggle('dark-mode');
  calculator.classList.toggle('dark-mode')
  body.classList.toggle('dark-background')
  modeToggle.classList.toggle('dark-mode')

  if (body.classList.contains('dark-mode')) {
    modeToggle.textContent = 'Switch to Light Mode';
  } else {
    modeToggle.textContent = 'Switch to Dark Mode';
  }
}

modeToggle.addEventListener('click', toggleMode);
