/*jslint node: true */
'use strict';

describe('A Frame', function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it("starts with 10 pins", function() {
    expect(frame.getCurrentPins()).toEqual(10);
  });

});
