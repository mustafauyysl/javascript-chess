// TODO

let selectedPiece = "";

const clearMove = () => {
  for (let i = 0; i <= squares.length; i++) {
    squares[i].classList.remove("green");
  }
};

const makeGreen = (x) => {
  x.classList.toggle("green");
};

const moveBlackPawn = (x) => {
  if (!squares[x + 8].id) {
    makeGreen(squares[x + 8]);
  }
  if (x + 16 < 64 && !squares[x + 16].id) {
    makeGreen(squares[x + 16]);
  }
  if (x !== 8 && squares[x + 7].id) {
    makeGreen(squares[x + 7]);
  }
  if (x !== 47 && squares[x + 9].id) {
    makeGreen(squares[x + 9]);
  }
  selectedPiece = squares[x];
};

const moveWhitePawn = (x) => {
  if (!squares[x - 8].id) {
    squares[x - 8].classList.toggle("green");
    squares[x - 16].classList.toggle("green");
  }
  selectedPiece = squares[x];
};

const moveRook = (x) => {
  makeGreen(squares[x + 8]);
  selectedPiece = squares[x];
};

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", () => {
    if (squares[i].classList.contains("green")) {
      placePiece(squares[i], { title: selectedPiece.id });
      selectedPiece.innerHTML = "";
      selectedPiece.removeAttribute("id");
      clearMove();
    }

    switch (squares[i].id) {
      case "♟︎":
        moveBlackPawn(i);
        break;

      case "♙":
        moveWhitePawn(i);
        break;

      case "♜":
        moveRook(i);
        break;

      default:
        break;
    }
  });
}
