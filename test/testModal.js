/*global describe, it */

var   chai = require('chai'),
    assert = chai.assert,
    expect = chai.expect;

(function () {

  describe('Basic assertions', function () {
    it('should pass basic assertions', function () {
      expect(true).to.equal(true);
    });
  });

})();