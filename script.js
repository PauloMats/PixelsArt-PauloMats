const colorBlack = document.getElementsByClassName('color')[0];
colorBlack.style.backgroundColor = 'black';

const color1 = document.getElementsByClassName('color')[1];
color1.style.backgroundColor = 'red';

const color2 = document.getElementsByClassName('color')[2];
color2.style.backgroundColor = 'green';

const color3 = document.getElementsByClassName('color')[3];
color3.style.backgroundColor = 'blue';

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
  for (let i = 1; i < colors.length; i += 1) {
    const coresRandom = colors[i];
    coresRandom.style.backgroundColor = randomColor();
  }
});
