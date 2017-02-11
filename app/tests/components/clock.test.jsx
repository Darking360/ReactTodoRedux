import React from 'react'
import ReactDOM from 'react-dom'
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var expect = require('expect');
import Clock from 'Clock'

describe('Clock component', () => {
  it('Should exists', () => {
    expect(Clock).toExist();
  });

  describe('Render', () => {
    it("Should render Clock component", () => {
      var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
      var $el = $(ReactDOM.findDOMNode(clock));
      var actualText = $el.find(".clock-text").text();
      expect(actualText).toBe("01:02");
    });
  });

  describe('Format seconds', () => {
    it("Should format seconds", () => {
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      var expected = '10:15';
      var actual = clock.formatSeconds(615);
      expect(actual).toBe(expected);
    });
  });

  describe('Format seconds when mins/secs are less than 10', () => {
    it("Should format seconds", () => {
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      var expected = '01:01';
      var actual = clock.formatSeconds(61);
      expect(actual).toBe(expected);
    });
  });

});
