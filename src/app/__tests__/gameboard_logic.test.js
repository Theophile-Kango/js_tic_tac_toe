import { gamePlayers, gameboardLogic } from '../main';

describe('gamePlayers', () => {
  const players = gamePlayers.players('Theo', 'Murilo');

  it('Has the game logic', () => {
    gameboardLogic.populateArr(0, 'X');
    gameboardLogic.populateArr(1, 'O');
    gameboardLogic.populateArr(2, 'X');
    gameboardLogic.populateArr(3, 'O');
    gameboardLogic.populateArr(4, 'X');
    gameboardLogic.populateArr(5, 'O');
    gameboardLogic.populateArr(6, 'X');

    let gameboardArr1 = [1, 3, 5, 7];
    const gameboardArr2 = [2, 4, 6];

    expect(gameboardLogic.getGameboardArr()).toStrictEqual([gameboardArr1, gameboardArr2]);
    expect(gameboardLogic.checkWin(players[0], gameboardArr1)).toEqual('Theo wins!');
    expect(gameboardLogic.checkWin(players[1], gameboardArr2)).not.toEqual('Murilo wins!');
    gameboardLogic.resetArr();
    expect(gameboardLogic.getGameboardArr()).toStrictEqual([[], []]);

    gameboardLogic.populateArr(0, 'X');
    gameboardLogic.increaseCounter();
    gameboardLogic.populateArr(1, 'O');
    gameboardLogic.increaseCounter();
    gameboardLogic.populateArr(2, 'O');
    gameboardLogic.increaseCounter();
    gameboardLogic.populateArr(3, 'O');
    gameboardLogic.increaseCounter();
    gameboardLogic.populateArr(4, 'X');
    gameboardLogic.increaseCounter();
    gameboardLogic.populateArr(5, 'X');
    gameboardLogic.increaseCounter();
    gameboardLogic.populateArr(6, 'X');
    gameboardLogic.increaseCounter();
    gameboardLogic.populateArr(7, 'O');
    gameboardLogic.increaseCounter();

    gameboardArr1 = [1, 5, 6, 7];

    expect(gameboardLogic.populateArr(8, 'O')).not.toBe('X');
    expect(gameboardLogic.increaseCounter()).toBe(9);
    expect(gameboardLogic.checkWin(players[0], gameboardArr1)).toEqual("It's a draw!");
  });
});
