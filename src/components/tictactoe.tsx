import { useState } from "react";
import PlayGame from "./playgame";

export default function TicTacToe() {
  const [player, setPlayer] = useState(["", "", "", "", "", "", "", "", ""]);
  const [whosPlay, setWhosPlay] = useState(true);
  const [winner, setWinner] = useState("Game");

  const win = () => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // Linhas
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // Colunas
      [0, 4, 8],
      [2, 4, 6], // Diagonais
    ];

    for (const combination of winningCombinations) {
      const symbolsInCombination = combination.map((position) =>
        player.at(position)
      );

      if (symbolsInCombination.every((symbol) => symbol === "X")) {
        setWinner("X - WIN");
        break;
      } else if (symbolsInCombination.every((symbol) => symbol === "O")) {
        setWinner("O - WIN");
        break;
      }
    }

    let isBoardFilled = true;

    for (let i = 0; i < 9; i++) {
      if (!player.at(i)) {
        isBoardFilled = false;
        break;
      }
    }

    if (isBoardFilled) {
      setWinner("Draw");
    }
  };

  const game = (positon: number) => {
    const numbers = player;

    if (numbers[positon] !== "") {
      return;
    }

    if (winner === "X - WIN" || winner === "O - WIN") {
      return;
    }

    whosPlay
      ? numbers.splice(positon, 1, "X")
      : numbers.splice(positon, 1, "O");
    setWhosPlay(!whosPlay);
    setPlayer(numbers);
    win();
  };

  const newGame = () => {
    setPlayer(["", "", "", "", "", "", "", "", ""]);
    setWinner("Game");
  };

  return (
    <div>
      <div className="grid grid-rows-3 grid-flow-col gap-4 mt-6">
        {player.map((i, index) => (
          <div
            key={Math.random() * 1000}
            onClick={(e) => game(index)}
            className="flex items-center justify-center w-40 h-40 bg-cyan-800  rounded-lg hover:bg-cyan-300 cursor-pointer select-none"
          >
            <PlayGame gamer={i} />
          </div>
        ))}
      </div>
      <div className="flex items-center flex-col">
        <h1 className="text-yellow-500 text-7xl mt-8">{winner}</h1>
        <button
          onClick={newGame}
          className="bg-cyan-800 text-white text-3xl mt-16 w-24 h-24 rounded-lg"
        >
          New Game
        </button>
      </div>
    </div>
  );
}
