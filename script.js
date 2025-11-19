const gridContainer = document.querySelector(".grid-container");
const btnSetGridSize = document.querySelector(".cell-size-btn");
const gridCell = document.createElement("div");
let cell;
let cells;

const trace = function (gridElement) {
  gridElement.addEventListener("mouseenter", function () {
    gridElement.style.backgroundColor = "#f28482";
  });
};

const setGridCellSize = function (computedStyleWidthPx, computedStyleHeightPx, rootFontSize, size) {
  const gridCells = document.querySelectorAll(".grid-cell");

  gridCells.forEach(function (el) {
    const gridCellWidthRem = computedStyleWidthPx / size / rootFontSize;
    const gridCellHeightRem = computedStyleHeightPx / size / rootFontSize;

    el.style.width = gridCellWidthRem + "rem";
    el.style.height = gridCellHeightRem + "rem";

    //Fill grid cells on mouse enter
    trace(el);
  });
};

const resizeGridCells = function (size) {
  //Get computed gridContainer width and height
  const computedStyleWidthPx = parseFloat(getComputedStyle(gridContainer).width);
  const computedStyleHeightPx = parseFloat(getComputedStyle(gridContainer).height);

  //Get computed root font size
  const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);

  //Set grid cell width and height

  setGridCellSize(computedStyleWidthPx, computedStyleHeightPx, rootFontSize, size);
};

//Create a grid of n x n size
const createGrid = function (size) {
  gridContainer.innerHTML = "";

  for (let i = 0; i < size * size; i++) {
    cell = gridCell.cloneNode();
    cell.classList.add("grid-cell");
    gridContainer.appendChild(cell);
  }

  resizeGridCells(size);
};

// createGrid(16);

//Let user decide of the number of cells
btnSetGridSize.addEventListener("click", function () {
  let gridSize = Math.trunc(Number(prompt("Please enter a valid grid size (1-100): ")));

  while (gridSize > 100 || isNaN(gridSize) || gridSize < 1) {
    gridSize = Math.trunc(Number(prompt("Please enter a valid grid size (1-100): ")));
  }

  createGrid(gridSize);

  cells = document.querySelectorAll(".grid-cell");

  cells.forEach(function (cell) {
    cell.style.backgroundColor = "";
  });
});
