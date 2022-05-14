const gridParent = document.querySelector("main");
const grid = document.createElement("div");

gridParent.appendChild(grid);
grid.classList.add("grid");

function genCanvas(dimension) {
  let surface = dimension ** 2;
  for (let i = 0; i < surface; i++) {
    cell = document.createElement("div");
    cell.classList.add("cell");
    grid.style.gridTemplateColumns = `repeat(${dimension}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${dimension}, 1fr)`;
    grid.appendChild(cell);
  }
}

genCanvas(16);
