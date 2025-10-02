import Board from './Board';

const TicTacToe = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200">
      <div className="flex items-center gap-4 mb-8">
        <h1 className="text-5xl font-extrabold text-blue-800 tracking-wide px-8 py-4 border-b-4 border-blue-500">
          Tic Tac Toe
        </h1>
      </div>
      <Board />
    </div>
  );
};

export default TicTacToe;