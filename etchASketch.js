

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

  let hoverEffects = document.querySelectorAll('.hoverEffect');
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

  let hoverEffects = document.querySelectorAll('.hoverEffect')
  let color = 255;
  hoverEffects.forEach(hoverEffect => {
    
    hoverEffect.addEventListener('mouseover', function() {
      hoverEffect.style.backgroundColor = `rgb(${color}, ${color}, ${color})`;
      color = color * 0.9;
    });
  });
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

// function tintBg(e) {
//   //If there's no bg colour on the square, set it to the lightest tint
//   if(e.target.style.backgroundColor === "") {
//     e.target.style.backgroundColor = "rgb(180, 180, 180)";

//   //Otherwise, get the RGB value of the current bg colour and map it to an array
//   } else {
//     const currnetColor = e.target.style.backgroundColor;
//     const currentArray = currnetColor.match(/\d+/g).map(Number);

//     //If the colour is already the darkest grey, stop tinting
//     if (currnetColor === "rgb(60, 60, 60)") {
//       return

//     //Otherwise, if the colour is grey, make it darker
//     } else if (currentArray[0] === currentArray[1] && currentArray[0] === currentArray[2]) {
//       const newValue = currentArray[0] - 40;
//       e.target.style.backgroundColor = `rgb(${newValue}, ${newValue}, ${newValue})`

//     //If it's a colour other than grey, also set it to the lightest tint
//     } else {
//       e.target.style.backgroundColor = "rgb(180, 180, 180)";
//     };
//   };