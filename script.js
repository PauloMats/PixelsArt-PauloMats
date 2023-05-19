/* eslint-disable sonarjs/no-use-of-empty-return-value */
// 2 e 3 Adiciona paleta com 4 cores diferentes, adiciona a primeira cor como preta.

const colors = document.getElementsByClassName('color');
colors[0].style.backgroundColor = 'black';
colors[1].style.backgroundColor = 'red';
colors[2].style.backgroundColor = 'yellow';
colors[3].style.backgroundColor = 'green';

// 4 - Adicione um botão para gerar cores aleatórias para a paleta de cores e adicionei o botão limpar cores

const botaoClear = document.getElementById('clear-board');
const button = document.getElementById('button-random-color');
const pegarCorPixelBoard = document.getElementById('pixel-board');

const pegarCor = () => {
  pegarCorPixelBoard.innerHTML = localStorage.getItem('pixelBoard');
};

const startPalet = () => {
  if (localStorage.getItem('colorPalette')) {
    const recuperaCor = JSON.parse(localStorage.getItem('colorPalette'));
    for (let i = 0; i < colors.length; i += 1) {
      colors[i].style.backgroundColor = recuperaCor[i];
    }
  } if (localStorage.getItem('pixelBoard')) {
    pegarCor();
  }
};

button.addEventListener('click', () => {
  const colorPalette = [];
  for (let i = 0; i < colors.length; i += 1) {
    if (i !== 0) {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      colors[i].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }
    colorPalette.push(colors[i].style.backgroundColor);
  }
  localStorage.setItem('colorPalette', JSON.stringify(colorPalette));
});

// 8-10 Função para selecionar cor e para preencher um pixel do quadro com a cor selecionada.

const removeCor = () => {
  for (let index = 0; index < colors.length; index += 1) {
    colors[index].classList.remove('selected');
  }
};

const selecionaCor = () => {
  colors[0].classList.add('selected');
  for (let index = 0; index < colors.length; index += 1) {
    colors[index].addEventListener('click', () => {
      removeCor();
      colors[index].classList.add('selected');
    });
  }
};

const pintarPixel = () => {
  let corSelecionada;
  for (let index = 0; index < colors.length; index += 1) {
    if (colors[index].className === 'color selected') {
      corSelecionada = colors[index].style.backgroundColor;
    }
  }
  return corSelecionada;
};

const pintar = () => {
  const unidadePixel = document.getElementsByClassName('pixel');
  for (let index = 0; index < unidadePixel.length; index += 1) {
    unidadePixel[index].addEventListener('click', () => {
      unidadePixel[index].style.backgroundColor = pintarPixel();
    });
  }
};

function clearQuadroPixels() {
  const unidadePixel = document.getElementsByClassName('pixel');
  for (let index = 0; index < unidadePixel.length; index += 1) {
    unidadePixel[index].style.backgroundColor = 'white';
  }
}

function setarCorPixel() {
  localStorage.setItem('pixelBoard', pegarCorPixelBoard.innerHTML);
}

pegarCorPixelBoard.addEventListener('click', setarCorPixel());
botaoClear.addEventListener('click', clearQuadroPixels());

window.onload = () => {
  startPalet();
  selecionaCor();
  pintar();
};
