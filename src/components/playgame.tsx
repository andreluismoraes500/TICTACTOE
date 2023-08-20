type PlayColor = {
  gamer: string;
};

const PlayGame = ({ gamer }: PlayColor) => {
  return gamer == "X" ? (
    <div className="text-9xl text-yellow-500 font-semibold">{gamer}</div>
  ) : (
    <div className="text-9xl text-red-500 font-semibold">{gamer}</div>
  );
};

export default PlayGame;
