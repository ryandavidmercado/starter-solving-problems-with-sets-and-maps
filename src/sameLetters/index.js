/**
 * return a Map of the unique letters and arrays of words that are made up of those letters
 * @param {array} words An array  of words
 */

function pushToMapArray(map, key, element) {
  if (map.has(key)) {
    map.set(key, [...map.get(key), element]);
  } else {
    map.set(key, [element]);
  }
}

function sameLetters(words) {
  const letterMap = new Map();
  words.forEach((word) => {
    const letterSet = new Set();
    for (let char of word) {
      const lowerChar = char.toLowerCase();
      letterSet.add(lowerChar);
    }
    const letterString = [...letterSet].sort().join("");
    pushToMapArray(letterMap, letterString, word);
  });
  return letterMap;
}

module.exports = sameLetters;
