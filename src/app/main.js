let player1 = '';
let player2 = '';

export const gamePlayers = (() => {
  let current = true;
  const playerFactory = (name, symbol, score) => ({ name, symbol, score });

  const players = (name1, name2) => {
    player1 = playerFactory(name1, 'X', 0);
    player2 = playerFactory(name2, 'O', 0);
    return [player1, player2];
  };

  const getPlayers = () => [player1, player2];

  const switchPlayers = (player1, player2) => {
    if (current === true) {
      current = false;
      return player1;
    }
    current = true;
    return player2;
  };

  return { players, switchPlayers, getPlayers };
})();

export const gameboardLogic = (() => {
  const victoryArr = [[1, 2, 3], [4, 5, 6], [7, 8, 9],
    [1, 4, 7], [2, 5, 8], [3, 6, 9],
    [1, 5, 9], [3, 5, 7]];

  let gameboardArr1 = [];
  let gameboardArr2 = [];
  let counter = 0;

  const checkWin = (player, gameboardArr) => {
    for (let i = 0; i < victoryArr.length; i += 1) {
      if (gameboardArr.includes(victoryArr[i][0])
                && gameboardArr.includes(victoryArr[i][1])
                && gameboardArr.includes(victoryArr[i][2])) {
        player.score += 1;
        return `${player.name} wins!`;
      }
    }
    if (counter === 9) {
      return "It's a draw!";
    }
    return '';
  };

  const getGameboardArr = () => [gameboardArr1, gameboardArr2];

  const populateArr = (position, symbol) => {
    if (symbol === 'X') {
      gameboardArr1.push(Number(position) + 1);
      return 'X';
    }
    gameboardArr2.push(Number(position) + 1);
    return 'O';
  };

  const resetArr = () => {
    gameboardArr1 = [];
    gameboardArr2 = [];
    counter = 0;
  };

  const increaseCounter = () => {
    counter += 1;
    return counter;
  };

  return {
    checkWin, populateArr, resetArr, increaseCounter, getGameboardArr,
  };
})();
