const gridContainer = document.querySelector(".grid-container");
const gridCell = document.createElement("div");

const createGrid = function (size) {
  //Create a grid of n grid cells
  for (let i = 0; i < size * size; i++) {
    const cell = gridCell.cloneNode();

    cell.classList.add("grid-cell");
    gridContainer.appendChild(cell);
  }
};

createGrid(16);

console.log(gridContainer);
