/*jslint node: true */
'use strict';

function BowlingGame() {
  this.totalScore = 0;
  this.currentFrame = 1;
}

BowlingGame.prototype.calculateTotalScore = function() {
  return this.totalScore;
};

BowlingGame.prototype.getCurrentFrame = function() {
  return this.currentFrame;
};
