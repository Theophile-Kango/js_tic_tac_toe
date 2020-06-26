import { game } from './src/index';

test('play', () => {
  expect(game.play()).toBe(false);
});