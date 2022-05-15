const gridParent = document.querySelector("main");
const grid = document.createElement("div");
const childCells = grid.childNodes;

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

function randRGB() {
  const random = () => Math.floor(Math.random() * 256);
  let color = `rgb(${random()}, ${random()}, ${random()})`;
  return color;
}

function grayScale() {
  const random = () => Math.floor(Math.random() * 256);
  let gen = random();
  let color = `rgb(${gen}, ${gen}, ${gen})`;
  return color;
}

function eraser() {
  let color = `rgb(255, 255, 255)`;
  return color;
}
function tabulaRasa() {
  childCells.forEach((element) => {
    element.style.backgroundColor = eraser();
  });
}

genCanvas(16);
