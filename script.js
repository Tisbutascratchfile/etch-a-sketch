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

function currColor() {
  color = colorPalette.value;
  return color;
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
// function tabulaRasa() {
//   childCells.forEach((element) => {
//     element.style.backgroundColor = eraser();
//   });
// }

function tabulaRasa() {
  for (let i = 0; i < childCells.length; i++) {
    childCells[i].style.backgroundColor = "white";
  }
}

const colorPalette = document.querySelector(".display-color");
const rand = document.querySelector(".rand-color");
const gray = document.querySelector(".gray-color");
const del = document.querySelector(".del");
const reset = document.querySelector(".reset");
const outline = document.querySelector(".outline");
const gridSize = document.querySelector(".grid-size");

function changeColor(e) {
  childCells.forEach((element) => {
    if (e.target == colorPalette) {
      element.addEventListener("mouseover", (e) => {
        element.style.backgroundColor = currColor();
      });
    } else if (e.target == rand) {
      element.addEventListener("mouseover", (e) => {
        element.style.backgroundColor = randRGB();
      });
    } else if (e.target == gray) {
      element.addEventListener("mouseover", (e) => {
        element.style.backgroundColor = grayScale();
      });
    } else if (e.target == del) {
      element.addEventListener("mouseover", (e) => {
        element.style.backgroundColor = eraser();
      });
    } else if (e.target == reset) {
      grid.addEventListener("click", tabulaRasa);
    }
  });
}

colorPalette.addEventListener("change", changeColor);
colorPalette.addEventListener("click", changeColor);
rand.addEventListener("click", changeColor);
gray.addEventListener("click", changeColor);
del.addEventListener("click", changeColor);
reset.addEventListener("click", tabulaRasa);

function gridSizefn() {
  window.addEventListener("load", () => {
    dimension = gridSize.value = "16";
    colorPalette.value = "#ffffff";
    genCanvas(dimension);
  });

  gridSize.addEventListener("change", () => {
    dimension = gridSize.value;
    tabulaRasa();
    genCanvas(dimension);
  });
}

gridSizefn();

const toggleOut = document.querySelector(".toggle-outline");
const toggle = document.querySelector(".toggle");

toggle.addEventListener("click", (e) => {
  toggle.classList.toggle("onB");
  toggleOut.classList.toggle("on");
  toggle.classList.toggle("offB");
  toggleOut.classList.toggle("off");
  for (let i = 0; i < childCells.length; i++) {
    childCells[i].classList.toggle("cell");
  }
});
