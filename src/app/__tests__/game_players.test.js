import { gamePlayers } from '../main';

const players = gamePlayers.players('Theo', 'Murilo');
const { name, score, symbol } = players[0];

describe('players function', () => {
  test('if players are objects', () => {
    expect(typeof players).toEqual('object');
  });
  test('if player name is equal to the provided string', () => {
    expect(name).toEqual('Theo');
  });
  test('if initial score is zero', () => {
    expect(score).toEqual(0);
  });
  test('if player 2 symbol is O', () => {
    expect(players[1].symbol).toEqual('O');
  });
  test('simple symbol variable shouldnt be equal to something', () => {
    expect(symbol).not.toEqual('O');
  });
  test('player 2 name shouldnt be equal to John', () => {
    expect(players[1].name).not.toEqual('John');
  });
  test('player 2 score shouldnt be equal to 1', () => {
    expect(players[1].score).not.toEqual(1);
  });
});

describe('switchPlayers function', () => {
  test('switch players should switch the current player', () => {
    expect(gamePlayers.switchPlayers(players[0], players[1])).toEqual(players[0]);
  });
  test('switch players shouldnt make the current player the same', () => {
    expect(gamePlayers.switchPlayers(players[0], players[1])).not.toEqual(players[0]);
  });
});

describe('getPlayers function', () => {
  test('getPlayers should get both players objects in an array', () => {
    expect(gamePlayers.getPlayers(players[0], players[1]))
      .toStrictEqual([{ name: 'Theo', score: 0, symbol: 'X' }, { name: 'Murilo', score: 0, symbol: 'O' }]);
  });
});