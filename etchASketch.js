

document.getElementById('btn').addEventListener('click', createGrid);

function createGrid() {
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

function createDivs(gridSize) {
  while (gridSize > 0) {
    const grid = document.querySelector('#grid');
    const item = document.createElement('div');
    item.classList.add('item'); 
    grid.appendChild(item);
    gridSize--;
  }
}

function createColumns(length) {
  const allSquares = document.querySelector('#grid');
  allSquares.style.gridTemplateColumns = `repeat(${length}, 1fr)`;
}

