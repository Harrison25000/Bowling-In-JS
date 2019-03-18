'use strict';

describe('Feature Test:', function () {
var game;

beforeEach(function() {
  game = new Game();
});

  it('bowling game starts and returns 0', function () {
    expect(game._totalScore).toEqual(0)
  });

  it('expect score to be 0', function () {
    game.roll(0)
    expect(game._totalScore).toEqual(0)
  });

  it('expect turns to be 2', function () {
    game.roll(2);
    game.roll(3);
    expect(game.turn).toEqual(2);
  });

});
