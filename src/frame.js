/*jslint node: true */
'use strict';

function Frame() {
  this.currentPins = 10;
}

Frame.prototype.getCurrentPins = function() {
  return this.currentPins;
};
