/*jslint node: true */
'use strict';

function bowlingGame() {
  this.totalScore = 0;
  this.currentFrame = 1;
  this.currentPins = 10;
  this.pinsKnockedOverThisTime = 0;
}

bowlingGame.prototype.getTotalScore = function() {
  return this.totalScore;
};

bowlingGame.prototype.getCurrentFrame = function() {
  return this.currentFrame;
};

bowlingGame.prototype.getCurrentPins = function() {
  return this.currentPins;
};

bowlingGame.prototype.bowl = function() {
  this.currentFrame += 0.5;
  this.pinsKnockedOverThisTime += (Math.floor(Math.random() * 11));
  return this.getPinsKnockedOver();
};

bowlingGame.prototype.getPinsKnockedOver = function() {
  return this.pinsKnockedOverThisTime;
};
