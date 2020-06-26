import { gamePlayers, gameboardLogic } from './main';

const gameButtons = document.querySelector('.gameboard');

let game = '';

const gameboard = (() => {
  const writeResult = (player, gameboardArr) => {
    const result = document.getElementById('result');
    result.textContent = gameboardLogic.checkWin(player, gameboardArr);
    game.score();
  };


  const resetBoard = () => {
    const buttons = gameButtons.querySelectorAll('button');
    buttons.forEach((element) => {
      element.textContent = '';
    });
    const result = document.getElementById('result');
    result.textContent = '';
    gameboardLogic.resetArr();
  };

  return { writeResult, resetBoard };
})();

game = (() => {
  const play = (player1, player2) => {
    const buttons = gameButtons.querySelectorAll('button');
    buttons.forEach((element, i) => {
      element.setAttribute('id', i);
      element.addEventListener('click', () => {
        const result = document.getElementById('result');
        gameboardLogic.increaseCounter();
        if (element.textContent === 'X' || element.textContent === 'O' || result.textContent !== '') {
          return false;
        }
        element.textContent = gamePlayers.switchPlayers(player1.symbol, player2.symbol);
        const [gameboardArr1, gameboardArr2] = gameboardLogic.getGameboardArr();
        const currentPlayer = gameboardLogic.populateArr(i, element.textContent);
        if (currentPlayer === 'X') {
          gameboard.writeResult(player1, gameboardArr1);
        } else {
          gameboard.writeResult(player2, gameboardArr2);
        }
        return false;
      });
    });
    return false;
  };

  const score = () => {
    const [player1, player2] = gamePlayers.getPlayers();
    const player1Score = document.getElementById('player1-score');
    const player2Score = document.getElementById('player2-score');
    player1Score.textContent = `${player1.name}: ${player1.score}`;
    player2Score.textContent = `${player2.name}: ${player2.score}`;
  };

  return { play, score };
})();

const start = (() => {
  const firstReset = () => {
    const reset = document.getElementById('reset');

    reset.addEventListener(('click'), () => {
      gameboard.resetBoard();
    });
  };
  const firstStart = () => {
    const startButton = document.querySelector('#start');
    startButton.addEventListener(('click'), () => {
      const name1 = document.getElementById('player-1').value;
      const name2 = document.getElementById('player-2').value;
      const [player1, player2] = gamePlayers.players(name1, name2);
      game.play(player1, player2);
      game.score(player1, player2);
      const showBoard = document.querySelector('.d-none');
      const hide = document.querySelector('#hide-div');
      showBoard.classList.remove('d-none');
      hide.classList.add('d-none');
    });
  };
  return { firstReset, firstStart };
})();
export default start;
