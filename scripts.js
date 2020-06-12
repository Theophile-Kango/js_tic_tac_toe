const gameboard = (() => {
  let gameboardArr = [];
  let victoryArr = [[1, 2, 3], [4, 5, 6], [7, 8, 9],
  [1, 4, 7], [2, 5, 8], [3, 6, 9],
  [1, 5, 9], [3, 5, 7]];
  const populateArr = (position, symbol) => {
    gameboardArr.push([Number(position)+1, symbol]);
    checkWin();
  }
  const checkWin = () => {
    victoryArr.forEach((arr) => {
      if(gameboardArr.includes(arr[0]) && gameboardArr.includes(arr[1]) && gameboardArr.includes(arr[2])){
          console.log(`${player2.name} wins!`)
      if(){
          console.log(`${player1.name} wins!`)
        }
      }
    })
  }
  return {populateArr, checkWin};
})();

const playerFactory = (name, symbol) => {
  return {name, symbol}
}

let name1 = prompt("Give the first name");
let name2 = prompt("Give the second name");

const player1 = playerFactory(name1,'X');
const player2 = playerFactory(name2,'O');

const gameButtons = document.querySelector('.gameboard');

let current = true;

const game = (() => {
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
          gameboard.populateArr(i, element.textContent);
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
