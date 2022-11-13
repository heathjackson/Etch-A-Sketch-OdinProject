

document.getElementById('btn').addEventListener('click', createGrid);
document.getElementById('btn1').addEventListener('click', hoverRandomColor);
document.getElementById('btn2').addEventListener('click', hoverGradientBlack);

function createGrid() {
  removeItems();
  let length = prompt("how wide? ");
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
      hoverEffect.style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`;
    });
  });
}

function hoverGradientBlack() {
  const hoverBlackEffects = document.querySelectorAll('.hoverBlackEffect');

  hoverBlackEffects.forEach(hoverBlackEffect => {
    let opac = 0;
    hoverBlackEffect.addEventListener('mouseover', (event) => {
      console.log(event.target.style);
  
      if (event.target.style.backgroundColor === "" || event.target.style.opacity === "") {
        console.log(event.target.style.backgroundColor = 'rgb(0, 0, 0)');
        console.log(event.target.style.opacity = '0');
      }
      else {
        console.log(opac += 0.2);
        console.log(event.target.style.opacity = opac);
      }
      //event.target.style.border = 'rgba(0, 0, 0, 1)';
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
}

function removeItems() {
  const items = document.querySelectorAll('.item');
  items.forEach(item => {
    item.remove();
  });
}