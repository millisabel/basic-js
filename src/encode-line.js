
/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let newStr = '';
  let count = 1;

  [...str].sort();

  for (let i = 0; i < str.length; i++) {
    if(str[i] === str[i + 1]){
      count++;
    }else{
      newStr += + count + str[i];
      count = 1;
    }
  }

  return newStr.replace(/[1]/g,'');
}

module.exports = {
  encodeLine
};
