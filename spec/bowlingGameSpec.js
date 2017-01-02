/*jslint node: true */
'use strict';

describe('Bowling Game', function() {

  var game;

  beforeEach(function() {
    game = new bowlingGame();
  });

  it("starts the game on 0 points", function() {
    expect(game.getTotalScore()).toEqual(0);
  });

  it("starts the game on Frame 1", function() {
     expect(game.getCurrentFrame()).toEqual(1);
  });

  it("starts with 10 pins per frame", function() {
     expect(game.getCurrentPins()).toEqual(10);
  });

  it("only allows a player to bowl up to two times per frame", function() {
    game.bowl();
    game.bowl();
    expect(game.getCurrentFrame()).toEqual(2);
  });

  it("randomly knocks down between zero and ten pins", function() {
    game.bowl();
    expect(game.getPinsKnockedOver()).toBeGreaterThan(-1);
    expect(game.getPinsKnockedOver()).toBeLessThan(11);
  });


});
