const gameButtons = document.querySelector('.gameboard');

let gameboard = false;

let player1 = '';
let player2 = '';

let current = true;
let counter = 0;

const game = (() => {
  const switchPlayers = (player1, player2) => {
    if (current === true) {
      current = false;
      return player1;
    }
    current = true;
    return player2;
  };

  const play = () => {
    const buttons = gameButtons.querySelectorAll('button');
    buttons.forEach((element, i) => {
      element.setAttribute('id', i);
      element.addEventListener('click', () => {
        const result = document.getElementById('result');
        counter += 1;
        if (element.textContent === 'X' || element.textContent === 'O' || result.textContent !== '') {
          return false;
        }

        element.textContent = switchPlayers(player1.symbol, player2.symbol);
        gameboard.populateArr(i, element.textContent);
        return false;
      });
    });
    return false;
  };

  const score = () => {
    const player1Score = document.getElementById('player1-score');
    const player2Score = document.getElementById('player2-score');
    player1Score.textContent = `${player1.name}: ${player1.score}`;
    player2Score.textContent = `${player2.name}: ${player2.score}`;
  };

  return { play, score };
})();

gameboard = (() => {
  let gameboardArr1 = [];
  let gameboardArr2 = [];
  const victoryArr = [[1, 2, 3], [4, 5, 6], [7, 8, 9],
    [1, 4, 7], [2, 5, 8], [3, 6, 9],
    [1, 5, 9], [3, 5, 7]];
  const checkWin = (player, gameboardArr) => {
    const result = document.getElementById('result');
    victoryArr.forEach((arr) => {
      if (gameboardArr.includes(arr[0])
          && gameboardArr.includes(arr[1])
          && gameboardArr.includes(arr[2])) {
        result.textContent = `${player.name} wins!`;
        player.score += 1;
        game.score();
      } else if (counter === 9 && result.textContent === '') {
        result.textContent = "It's a draw!";
        game.score();
      }
    });
  };
  const populateArr = (position, symbol) => {
    if (symbol === 'X') {
      gameboardArr1.push(Number(position) + 1);
      checkWin(player1, gameboardArr1);
    } else {
      gameboardArr2.push(Number(position) + 1);
      checkWin(player2, gameboardArr2);
    }
  };

  const resetBoard = () => {
    const buttons = gameButtons.querySelectorAll('button');
    buttons.forEach((element) => {
      element.textContent = '';
    });
    const result = document.getElementById('result');
    gameboardArr1 = [];
    gameboardArr2 = [];
    counter = 0;
    result.textContent = '';
  };

  return { populateArr, checkWin, resetBoard };
})();

const reset = document.getElementById('reset');

reset.addEventListener(('click'), () => {
  gameboard.resetBoard();
});

const playerFactory = (name, symbol, score) => ({ name, symbol, score });

const startButton = document.querySelector('#start');
startButton.addEventListener(('click'), () => {
  const name1 = document.getElementById('player-1').value;
  const name2 = document.getElementById('player-2').value;
  player1 = playerFactory(name1, 'X', 0);
  player2 = playerFactory(name2, 'O', 0);
  game.play();
  const showBoard = document.querySelector('.d-none');
  const hide = document.querySelector('#hide-div');
  showBoard.classList.remove('d-none');
  hide.classList.add('d-none');
  game.score();
});
