/*jslint node: true */
'use strict';

describe('Bowling Game', function() {

  var game;

  beforeEach(function() {
    game = new bowlingGame();
  });

  it("starts the game on 0 points", function() {
    expect(game.totalScore).toEqual(0)
   });

 });
