'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

module.exports = function (pattern, string) {
  var matches = [];

  var propertyMatches = pattern.exec(string);

  while (propertyMatches != null) {
    matches.push([].concat(_toConsumableArray(propertyMatches)));
    propertyMatches = pattern.exec(string);
  }

  return matches;
};