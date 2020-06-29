import { gamePlayers } from '../main';

describe('gamePlayers', () => {
  const players = gamePlayers.players('Theo', 'Murilo');


  it("It takes the players's names, gives the symbols to each player and switch players", () => {
    const { name, score, symbol } = players[0];
    expect(typeof players).toEqual('object');
    expect(name).toEqual('Theo');
    expect(score).toEqual(0);
    expect(players[1].symbol).toEqual('O');
    expect(symbol).not.toEqual('O');
    expect(players[1].name).not.toEqual('John');
    expect(players[1].score).not.toEqual(1);
    expect(gamePlayers.switchPlayers(players[0], players[1])).toEqual(players[0]);
    expect(gamePlayers.switchPlayers(players[0], players[1])).not.toEqual(players[0]);
    expect(gamePlayers.getPlayers(players[0], players[1]))
      .toStrictEqual([{ name: 'Theo', score: 0, symbol: 'X' }, { name: 'Murilo', score: 0, symbol: 'O' }]);
  });
});