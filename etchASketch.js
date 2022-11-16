

document.getElementById('btn').addEventListener('click', createGrid);
document.getElementById('btn1').addEventListener('click', function() {
  document.getElementById('btn2').addEventListener('click', function() {
    hoverGradientBlack();
    });
  hoverRandomColor();
});
document.getElementById('btn2').addEventListener('click', hoverGradientBlack);

function createGrid() {
  removeItems();
  let length = prompt("How many squares wide would you like your etch-a-sketch?");
    if (length > 100) {
      return alert("Please choose a number less than or = 100.");
    }

    else {
      let gridSize = Math.pow(length, 2);
      createDivs(gridSize);
      createColumns(length);
    }
}

function hoverRandomColor() {

  const hoverEffects = document.querySelectorAll('.hoverEffect');

  hoverEffects.forEach(hoverEffect => {
    
    hoverEffect.addEventListener('mouseover', function() {
      color1 = Math.random() * 255;
      color2 = Math.random() * 255;
      color3 = Math.random() * 255;
      hoverEffect.style.opacity = '';
      hoverEffect.style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`;
    });
  });
}


function hoverGradientBlack() {

  const hoverBlackEffects = document.querySelectorAll('.hoverBlackEffect')
 

  hoverBlackEffects.forEach(hoverBlackEffect => {
    let opac = 0.9;
    hoverBlackEffect.addEventListener('mouseover', (event) => {

  
      if (event.target.style.opacity === "") {
        event.target.style.backgroundColor = 'rgb(255, 255, 255)';
        event.target.style.opacity = '0.9';
      }
      else {
        opac -= 0.1;
        event.target.style.opacity = opac;
      }
    });
  });
}

function createDivs(gridSize) {
  while (gridSize > 0) {
    const grid = document.querySelector('#grid');
    const item = document.createElement('div');
    item.classList.add('item', 'hoverEffect', 'hoverBlackEffect'); 
    grid.appendChild(item);
    gridSize--;
  }
}

function createColumns(length) {
  const allSquares = document.querySelector('#grid');
  allSquares.style.gridTemplateColumns = `repeat(${length}, 1fr)`;
  allSquares.style.backgroundColor = "black";
}

function removeItems() {
  const items = document.querySelectorAll('.item');
  items.forEach(item => {
    item.remove();
  });
}
