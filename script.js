// 2 e 3 Adiciona paleta com 4 cores diferentes, adiciona a primeira cor como preta.

const colorBlack = document.getElementsByClassName('color')[0];
colorBlack.style.backgroundColor = 'black';

const color1 = document.getElementsByClassName('color')[1];
color1.style.backgroundColor = 'red';

const color2 = document.getElementsByClassName('color')[2];
color2.style.backgroundColor = 'yellow';

const color3 = document.getElementsByClassName('color')[3];
color3.style.backgroundColor = 'green';

// 4 - Adicione um botão para gerar cores aleatórias para a paleta de cores
function randomColor() {
  const codColor = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += codColor[Math.floor(Math.random() * 16)];
  }
  return color;
}

const colors = document.querySelectorAll('.color');

const button = document.getElementById('button-random-color');

button.addEventListener('click', () => {
  const randomColorLs = [];

  for (let i = 1; i < colors.length; i += 1) {
    randomColorLs.push(colors[i].style.backgroundColor);
    const coresRandom = colors[i];
    coresRandom.style.backgroundColor = randomColor();
  }
  localStorage.setItem('restoreColor', JSON.stringify(randomColorLs));
});

// 5 - Implemente uma função usando localStorage para que a paleta de cores gerada aleatoriamente seja mantida após recarregar a página

const guardarCor = () => {
  const restColor = JSON.parse(localStorage.getItem('restoreColor'));

  for (let i = 1; i < colors.length; i += 1) {
    colors[i].style.backgroundColor = restColor[i];
  }
};
window.onload = function(){ 
  guardarCor();
};

// 6 - Adicionar um quadro com 25 pixels (5x5)

const quadro = document.createElement('section');
quadro.tagName = 'pixel-board';
const main = document.querySelector('main');
main.appendChild(quadro);

for (let i = 0; i < 6; i += 1) {
  const linhas = document.createElement('div');
  linhas.className = 'pixel';
  quadro.appendChild(linhas);
}

// 7 - Faça com que cada pixel do quadro tenha largura e altura de 40 pixels e borda preta de 1 pixel de espessura
