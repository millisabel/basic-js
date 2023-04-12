/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let newS1 = [...s1];
  let newS2 = [...s2];
  let count = 0;

  newS1.forEach((s, i) => {
    if(newS2.includes(s)){
      let pos = newS2.indexOf(s);
      count++;
      newS2.splice(pos, 1);
    }
  })
  return count;
}

module.exports = {
  getCommonCharacterCount
};
