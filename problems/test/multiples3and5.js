const expect = require('chai').expect

import multiples from '../multiples3and5'

describe('multiples of 3 and 5 less than X', function() {
  it('should return a number', () => {
    const result = multiples();
    expect(result).to.be.a('number')
  });
  it('should return 23 with X = 10', () => {
    const result = multiples(10);
    expect(result).to.equal(23)
  });
  it('should return 233168 with X = 1000', () => {
    const result = multiples(1000);
    expect(result).to.equal(233168)
  });
});
