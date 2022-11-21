//камень ножницы бумага
const rps = (p1, p2) => {
  let result = null;

  if (p1 === p2) {
    result = "Draw!";
  }

  if (p1 === "rock" && p2 === "scissors") {
    result = "Player 1 won!";
  }

  if (p1 === "scissors" && p2 === "paper") {
    result = "Player 1 won!";
  }

  if (p1 === "paper" && p2 === "rock") {
    result = "Player 1 won!";
  }

  if (p1 === "scissors" && p2 === "rock") {
    result = "Player 2 won!";
  }

  if (p1 === "paper" && p2 === "scissors") {
    result = "Player 2 won!";
  }

  if (p1 === "rock" && p2 === "paper") {
    result = "Player 2 won!";
  }

  return result;
}
