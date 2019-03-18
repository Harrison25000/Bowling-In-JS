function Game() {
this._totalScore = 0;
this.turn = 0
};

Game.prototype.roll = function (pins) {
  this._totalScore += pins
  this.turn ++
};

Game.prototype.score = function () {
  return this._totalScore;
};
