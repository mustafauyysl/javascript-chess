// Black Pieces
const leftBlackRook = new Piece("♜", 0);
const leftBlackKnight = new Piece("♞", 1);
const leftBlackBishop = new Piece("♝", 2);
const blackQueen = new Piece("♛", 3);
const blackKing = new Piece("♚", 4);
const rightBlackBishop = new Piece("♝", 5);
const rightBlackKnight = new Piece("♞", 6);
const rightBlackRook = new Piece("♜", 7);
const blackPawn = new Piece("♟︎", [8, 9, 10, 11, 12, 13, 14, 15]);

// White Pieces
const leftWhiteRook = new Piece("♖", 56);
const leftWhiteKnight = new Piece("♘", 57);
const leftWhiteBishop = new Piece("♗", 58);
const whiteQueen = new Piece("♕", 59);
const whiteKing = new Piece("♔", 60);
const rightWhiteBishop = new Piece("♗", 61);
const rightWhiteKnight = new Piece("♘", 62);
const rightWhiteRook = new Piece("♖", 63);
const whitePawn = new Piece("♙", [48, 49, 50, 51, 52, 53, 54, 55]);

const pieces = [
  leftBlackRook,
  leftBlackKnight,
  leftBlackBishop,
  blackQueen,
  blackKing,
  rightBlackBishop,
  rightBlackKnight,
  rightBlackRook,
  blackPawn,
  leftWhiteRook,
  leftWhiteKnight,
  leftWhiteBishop,
  whiteQueen,
  whiteKing,
  rightWhiteBishop,
  rightWhiteKnight,
  rightWhiteRook,
  whitePawn,
];

const squares = document.querySelectorAll(".square");

const placePiece = (square, piece) => {
  square.innerHTML = "";
  const pieceTitle = document.createElement("p");
  pieceTitle.textContent = piece.title;
  pieceTitle.style.fontSize = "50px";
  pieceTitle.style.textAlign = "center";
  square.appendChild(pieceTitle);
  square.id = piece.title;
};

for (let i = 0; i <= squares.length; i++) {
  pieces.map((piece) => {
    if (typeof piece.position === "object") {
      piece.position.map((x) => {
        if (x === i) {
          placePiece(squares[i], piece);
        }
      });
    }
    if (piece.position === i) {
      placePiece(squares[i], piece);
    }
  });
}
