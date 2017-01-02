/*jslint node: true */
'use strict';

function bowlingGame() {
  this.totalScore = 0;
  this.currentFrame = 1;
  this.currentPins = 10;
}

bowlingGame.prototype.calculateTotalScore = function() {
  return this.totalScore;
};

bowlingGame.prototype.getCurrentFrame = function() {
  return this.currentFrame;
};

bowlingGame.prototype.getCurrentPins = function() {
  return this.currentPins;
};

bowlingGame.prototype.bowl = function() {
  return this.currentFrame += 0.5;
};
