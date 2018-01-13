'use strict';

const { it, describe } = require('mocha');
const { expect } = require('chai');
const fs = require('fs');
const re = require('../dist');

describe('Regex Matches Test Suite', () => {
  it('should find matches', () => {
    const string = fs.readFileSync('./test/stubs/sample.txt', 'utf-8');
    const matches = re(/([A-Z])\w+/g, string);
    expect(matches.length).to.eql(27);
  });

  it('should find words with o', () => {
    const matches = re(/\b\w*[Oo]\w*\b/g, 'the quick brown fox jumps over the lazy dog');
    expect(matches).to.eql([['brown'], ['fox'], ['over'], ['dog']]);
  });

  it('should contain capture groups', () => {
    const matches = re(/\b\w*([Oo])\w*\b/g, 'the quick brown fox jumps over the lazy dog');
    expect(matches).to.eql([['brown', 'o'], ['fox', 'o'], ['over', 'o'], ['dog', 'o']]);
  });
});
