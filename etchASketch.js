

document.getElementById('btn').addEventListener('click', createGrid);

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

  let hoverEffects = document.querySelectorAll('.hoverEffect');
  hoverEffects.forEach(hoverEffect => {
    
    hoverEffect.addEventListener('mouseover', function() {
      color1 = Math.random() * 255;
      color2 = Math.random() * 255;
      color3 = Math.random() * 255;
      hoverEffect.style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`;
    });
  });

  // hoverEffects.addEventListener('mouseover',
  //   function() {
  //     hoverEffects.target.style.color = 'purple';});

}








function createDivs(gridSize) {
  while (gridSize > 0) {
    const grid = document.querySelector('#grid');
    const item = document.createElement('div');
    item.classList.add('item', 'hoverEffect'); 
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

