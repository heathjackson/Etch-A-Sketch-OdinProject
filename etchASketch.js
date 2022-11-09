gridSize = 256;

while (gridSize > 0) {

const grid = document.querySelector('.grid');

const item = document.createElement('div');
item.classList.add('item');
  
grid.appendChild(item);

//   // completeGrid();

gridSize--;
}

// // function completeGrid() {

// //   // while (columns > 0) {
// const smallBoxRowsAll = document.querySelectorAll('.smallBoxRows');

// for (const smallBoxRows of smallBoxRowsAll) {
//   const smallBoxColumns = document.createElement('div');
//   smallBoxColumns.classList.add('smallBoxColumns');
//   smallBoxRows.appendChild(smallBoxColumns);
// }
// // const smallBoxColumns = document.createElement('div');
// // smallBoxColumns.classList.add('smallBoxColumns');

// // smallBoxRows.appendChild(smallBoxColumns);
// //   // columns--;
// //   }

// const smallBoxRowsAll = document.querySelectorAll('.smallBoxRows');

// for (const smallBoxRows of smallBoxRowsAll) {
//   const smallBoxColumns = document.createElement('div');
//   smallBoxColumns.classList.add('smallBoxRows');
//   smallBoxRows.appendChild(smallBoxColumns);
// }
