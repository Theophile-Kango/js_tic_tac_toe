const gameboard = (() => {
  let gameboardArr = [];
  const populateArr = (symbol, position) => {
    gameboardArr[position] = symbol;
    console.log(gameboardArr);
  }
  return {populateArr};
})();

const playerFactory = (name, symbol) => {
  return {name, symbol}
}

let name1 = prompt("Give the first name");
let name2 = prompt("Give the second name");

const player1 = playerFactory(name1,'X');
const player2 = playerFactory(name2,'O');

const gameButtons = document.querySelector('.gameboard');

const game = (() => {
  let current = true;
  const play = () => {
    const buttons = gameButtons.querySelectorAll('button');
    buttons.forEach((element, i) => {
      element.setAttribute('id',i);
      element.addEventListener('click', () => {
        if(element.textContent == 'X' || element.textContent == 'O'){
          return false;
        }
        else{
          element.textContent = switchPlayers(player1.symbol, player2.symbol);
          gameboard.populateArr(element.textContent, i);
        }
      })
    })
  }
  const switchPlayers = (player1, player2) => {
    if (current == true){
      current = false
      return player1
    }else{
      current = true
      return player2
    }
  }

  return {play}
})();

game.play();
