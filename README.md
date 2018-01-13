# regex-matches
> This is only boilerplate - Not a real module

[![travis](https://img.shields.io/travis/ecrmnn/regex-matches/master.svg?style=flat-square)](https://travis-ci.org/ecrmnn/regex-matches/builds)
[![npm version](https://img.shields.io/npm/v/regex-matches.svg?style=flat-square)](http://badge.fury.io/js/regex-matches)
[![npm downloads](https://img.shields.io/npm/dm/regex-matches.svg?style=flat-square)](http://badge.fury.io/js/regex-matches)
[![npm license](https://img.shields.io/npm/l/regex-matches.svg?style=flat-square)](http://badge.fury.io/js/regex-matches)
[![prs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![eslint](https://img.shields.io/badge/code_style-airbnb-blue.svg?style=flat-square)](https://github.com/airbnb/javascript)

### Installation
```bash
npm install regex-matches --save
```

### Usage
```javascript
const re = require('regex-matches')

re(/\b\w*[Oo]\w*\b/, 'the quick brown fox jumps over the lazy dog');

//=> [
//=>   ['brown'],
//=>   ['fox'],
//=>   ['over'],
//=>   ['dog']
//=> ]

// Result when using capture groups
re(/\b\w*([Oo])\w*\b/, 'the quick brown fox jumps over the lazy dog');

//=> [
//=>   ['brown', 'o],
//=>   ['fox', 'o],
//=>   ['over', 'o],
//=>   ['dog', 'o]
//=> ]
```

### License
MIT © [Daniel Eckermann](http://danieleckermann.com)
