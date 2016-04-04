const assert = require('assert');
const abz = require('../');

describe('It should work right for 100 percentages', () => {
  describe('It should work with value property', () => {
    assert.equal('MaMaL', abz(
      [
        {
          chance: 100,
          value: 'MaMaL'
        }, {
          chance: 0,
          fn: () => 'Mahdi'
        }, {
          chance: 0,
          value: 'Changiz'
        }
      ]
    ));
  });
  describe('It should work with fn property', () => {
    assert.equal('MaMaL', abz(
      [
        {
          chance: 100,
          fn: () => 'MaMaL'
        }, {
          chance: 0,
          value: 'Mahdi'
        }, {
          chance: 0,
          fn: () => 'Asqar'
        }
      ]
    ));
  });
});

describe('It should return one of the provided values', () => {
  describe('It should return one of the values with more than 0 chance', () => {
    const names = ['MaMaL', 'Mahdi', 'Asqar', 'Meysam', 'Ali', 'Reza', 'Mojtaba', 'Sina'];
    const result = abz(
      [
        {
          chance: 50,
          fn: () => names[0]
        }, {
          chance: 10,
          value: names[1]
        }, {
          chance: 20,
          fn: () => names[2]
        }, {
          chance: 5,
          value: names[3]
        }, {
          chance: 8,
          value: names[4]
        }, {
          chance: 0,
          value: names[5]
        }, {
          chance: 6,
          value: names[6]
        }, {
          chance: 1,
          fn: () => names[7]
        }
      ]
    );
    assert.equal(true, names.indexOf(result) > -1 && names.indexOf(result) !== 5);
  });
});
