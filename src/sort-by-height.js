/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let j = 0;
  const newArr = arr.filter(num => num !== -1);
  newArr.sort((a, b) => a - b);

  arr.forEach((item, i, arr) => {
    if (item !== -1) {
      arr[i] = newArr[j];
      j++;
    }
  });
  return arr;
}

module.exports = {
    sortByHeight
};
