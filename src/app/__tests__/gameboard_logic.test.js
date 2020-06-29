import { gamePlayers, gameboardLogic } from '../main';

const players = gamePlayers.players('Theo', 'Murilo');

const gameboardArr1 = [1, 3, 5, 7];
const gameboardArr2 = [2, 4, 6];

describe('getGameboardArr function', () => {
  gameboardLogic.populateArr(0, 'X');
  gameboardLogic.populateArr(1, 'O');
  gameboardLogic.populateArr(2, 'X');
  gameboardLogic.populateArr(3, 'O');
  gameboardLogic.populateArr(4, 'X');
  gameboardLogic.populateArr(5, 'O');
  gameboardLogic.populateArr(6, 'X');

  test('If getGameboardArr will return one two-dimensional array', () => {
    expect(gameboardLogic.getGameboardArr()).toStrictEqual([gameboardArr1, gameboardArr2]);
  });
});

describe('checkWin function', () => {
  test('If Theo won', () => {
    expect(gameboardLogic.checkWin(players[0], gameboardArr1)).toEqual('Theo wins!');
  });
  test("If Murilo didn't win", () => {
    expect(gameboardLogic.checkWin(players[1], gameboardArr2)).not.toEqual('Murilo wins!');
  });
});

describe('resetArr function', () => {
  test('If the getGameboardArr returns one two-dimensional array with empty arrays', () => {
    gameboardLogic.resetArr();
    expect(gameboardLogic.getGameboardArr()).toStrictEqual([[], []]);
  });
});


describe('increaseCounter function', () => {
  test('It should increase the counter', () => {
    expect(gameboardLogic.increaseCounter()).toBe(1);
  });
  test('It should be a draw when the counter is 9 and no players won', () => {
    for (let i = 0; i < 8; i += 1) {
      gameboardLogic.increaseCounter();
    }
    expect(gameboardLogic.checkWin(players[0], [])).toEqual("It's a draw!");
  });
});
