/*jslint node: true */
'use strict';

function bowlingGame() {
  this.totalScore = 0;
}

bowlingGame.prototype.calculateTotalScore = function() {
  return this.totalScore;
}
