// TODO

let selectedPiece = "";

const clearMove = () => {
  for (let i = 0; i <= squares.length; i++) {
    squares[i].classList.remove("green");
  }
};

const moveBlackPawn = (x) => {
  if (!squares[x + 8].id) {
    squares[x + 8].classList.toggle("green");
    squares[x + 16].classList.toggle("green");
  }
  if (squares[x + 7].id) {
    squares[x + 7].classList.toggle("green");
  }
  if (squares[x + 9].id) {
    squares[x + 9].classList.toggle("green");
  }
};

const moveWhitePawn = (x) => {
  if (!squares[x - 8].id) {
    squares[x - 8].classList.toggle("green");
    squares[x - 16].classList.toggle("green");
  }
};

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", () => {
    if (squares[i].id === "♟︎") {
      moveBlackPawn(i);
      selectedPiece = squares[i];
    }
    if (squares[i].id === "♙") {
      moveWhitePawn(i);
      selectedPiece = squares[i];
    }
    if (squares[i].classList.contains("green")) {
      placePiece(squares[i], { title: selectedPiece.id });
      selectedPiece.innerHTML = "";
      selectedPiece.removeAttribute("id");
      clearMove();
    }
  });
}
