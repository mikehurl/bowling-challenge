/*jslint node: true */
'use strict';

function bowlingGame() {
  this.totalScore = 0;
  this.currentFrame = 1;
}

bowlingGame.prototype.calculateTotalScore = function() {
  return this.totalScore;
};

bowlingGame.prototype.getCurrentFrame = function() {
  return this.currentFrame;
};
