import './main.scss';
import { gamePlayers } from './app/main'

const gameButtons = document.querySelector('.gameboard');

let gameboard = false;

let player1 = '';
let player2 = '';

let current = true;
let counter = 0;

export const game = (() => {
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
  
  const writeResult = (player, gameboardArr) => {
    const result = document.getElementById('result');
    result.textContent = checkWin(player, gameboardArr);
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

  return { populateArr, writeResult, resetBoard };
})();

const reset = document.getElementById('reset');

reset.addEventListener(('click'), () => {
  gameboard.resetBoard();
});


const startButton = document.querySelector('#start');
startButton.addEventListener(('click'), () => {
  const name1 = document.getElementById('player-1').value;
  const name2 = document.getElementById('player-2').value;
  player1 = gamePlayers.players(name1, 'X');
  player2 = gamePlayers.players(name2, 'O');
  game.play();
  const showBoard = document.querySelector('.d-none');
  const hide = document.querySelector('#hide-div');
  showBoard.classList.remove('d-none');
  hide.classList.add('d-none');
  game.score();
});
