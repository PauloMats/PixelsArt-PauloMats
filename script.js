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

const colors = document.querySelectorAll('.color');
const button = document.getElementById('button-random-color');

button.addEventListener('click', () => {
  const colorPalette = [];
  for (let i = 0; i < colors.length; i += 1) {

      if (i !== 0) {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        colors[i].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      };
      colorPalette.push(colors[i].style.backgroundColor);
      }
      localStorage.setItem('colorPalette', JSON.stringify(colorPalette));
  });


// 5 - Implemente uma função usando localStorage para que a paleta de cores gerada aleatoriamente seja mantida após recarregar a página

 const pegarCorPixelBoard = document.getElementById('pixel-board');

 const pegarCor = () => {
   const pegarCorPixelBoard.innerHTML = localStorage.getItem('pixelBoard');
 };

 const colocaCor = () => {
   if (localStorage.getItem('colorPalette')) {
     const recuperaCor = JSON.parse(localStorage.getItem('colorPalette'));
     for (let i = 0; i < colors.length; i += 1) {
       colors[i].style.backgroundColor = recuperaCor[i];
     }
   } if (localStorage.getItem('pixelBoard')) {
     pegarCor();
   }
 };

// 8 - Defina a cor preta como cor inicial da paleta de cores

colorBlack.classList.add('selected');

// 9 - Crie uma função para selecionar uma cor na paleta de cores

// 10 - Crie uma função que permita preencher um pixel do quadro com a cor selecionada na paleta de cores

// 11 - Crie um botão que retorne a cor do quadro para a cor inicial

// 12 - Crie uma função para salvar e recuperar o seu desenho atual no localStorage
