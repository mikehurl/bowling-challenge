/*jslint node: true */
'use strict';

describe('Bowling Game', function() {

  var game;

  beforeEach(function() {
    game = new bowlingGame();
  });

  it("starts the game on 0 points", function() {
    expect(game.calculateTotalScore()).toEqual(0);
   });

   it("starts the game on Frame 1", function() {
     expect(game.getCurrentFrame()).toEqual(1);
   });

 });
