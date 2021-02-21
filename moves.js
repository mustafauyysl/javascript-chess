// TODO

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", () => {
    if (squares[i].id === "♟︎") {
      squares[i + 8].classList.toggle("green");
      squares[i + 16].classList.toggle("green");
    }
    if (squares[i].id === "♙") {
      squares[i - 8].classList.toggle("green");
      squares[i - 16].classList.toggle("green");
    }
  });
}
