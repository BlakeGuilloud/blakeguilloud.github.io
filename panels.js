const panels = [
  {
    first: 'Github',
    preview: 'Portfolio',
    last: 'Dance',
  },
  {
    first: 'Give',
    preview: 'About',
    last: 'Receive',
  },
  {
    first: '',
    preview: 'Contact',
    last: 'Today',
  },
  // {
  //   first: 'Give',
  //   preview: 'All',
  //   last: 'You can',
  // },
  // {
  //   first: 'Life',
  //   preview: 'In',
  //   last: 'Motion',
  // },
];

function renderPanels() {
  let markup = '';

  for (let i = 0; i < panels.length; i++) {
    const panel = panels[i];

    markup +=
      `<div class="panel panel${i + 1}">
        <p><a href=${panel.first === 'Github' ? "http://github.com/blakeGuilloud" : 'javascript:void(0)'}>${panel.first}</a></p>
        <p>${panel.preview}</p>
        <p>${panel.last}</p>
      </div>`
  }

  return markup;
}

// document.getElementById('panels').innerHTML = renderPanels();
