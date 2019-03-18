'use strict';

describe('Feature Test:', function () {
var game;

beforeEach(function() {
  game = new Game();
});

  it('bowling game starts and returns 0', function () {
    expect(game._totalScore).toEqual(0)
  });


});
