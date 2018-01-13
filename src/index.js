'use strict';

module.exports = (pattern, string) => {
  const matches = [];

  let propertyMatches = pattern.exec(string);

  while (propertyMatches != null) {
    matches.push([...propertyMatches]);
    propertyMatches = pattern.exec(string);
  }

  return matches;
};
