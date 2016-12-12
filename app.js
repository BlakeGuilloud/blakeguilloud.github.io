const allPanels = document.querySelectorAll('.panel');

function toggleOpen(event) {
  this.classList.toggle('open');
}

function toggleActive(event) {
  if (event.propertyName.includes('flex')) this.classList.toggle('open-active');
}

allPanels.forEach(panel => panel.addEventListener('click', toggleOpen));
allPanels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
