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
    const coresRandom = colors[i];
    coresRandom.style.backgroundColor = randomColor();
    randomColorLs.push(colors[i].style.backgroundColor);
  }


  localStorage.setItem('restoreColor', JSON.stringify(randomColorLs));
});

// 5 - Implemente uma função usando localStorage para que a paleta de cores gerada aleatoriamente seja mantida após recarregar a página

const guardarCor = () => {
  const restColor = JSON.parse(localStorage.getItem('restoreColor'));
  
  console.log(restColor);

  for (let i = 1; i < colors.length; i += 1) {
    colors[i].style.backgroundColor = restColor[i];
  }
};
window.onload = () => {
  if (localStorage.restoreColor) {
    guardarCor();
} 
}

// 6 - Adicionar um quadro com 25 pixels (5x5)

const quadro = document.createElement('section');
quadro.id = 'pixel-board';
const main = document.querySelector('main');
main.appendChild(quadro);

for (let i = 0; i < 5; i += 1) {
  const colunas = document.createElement('div');
  //colunas.className = 'pixel';
  quadro.appendChild(colunas);

  for (let i2 = 0; i2 < 5; i2 += 1) {
    const linhas = document.createElement('div');
    linhas.className = 'pixel';
    colunas.appendChild(linhas);
  }
}

//8 - Defina a cor preta como cor inicial da paleta de cores

colorBlack.classList.add('selected');



//9 - Crie uma função para selecionar uma cor na paleta de cores




//10 - Crie uma função que permita preencher um pixel do quadro com a cor selecionada na paleta de cores



//11 - Crie um botão que retorne a cor do quadro para a cor inicial



//12 - Crie uma função para salvar e recuperar o seu desenho atual no localStorage