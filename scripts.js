const GameBoard = () => {
  let gameBoard = [];
}

const playerFactory = (name, symbol) => {
  return {name, symbol}
}

let name1 = prompt("Give the first name");
let name2 = prompt("Give the second name");

const player1 = playerFactory(name1,'X');
const player2 = playerFactory(name2,'O');

const gameButtons = document.querySelector('.gameboard');

const game = (() => {
  const play = () => {
    const buttons = gameButtons.querySelectorAll('button');
    buttons.forEach((element, i) => {
      element.setAttribute('id',i);
      element.addEventListener('click', ()=> {
        element.textContent = player1.symbol;
      })
    })
  }
  return {play}
})();

game.play();
