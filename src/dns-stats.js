/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let arr = [];
  let obj = {}

  for (let i = 0; i < domains.length; i++) {
    arr.push(domains[i].split('.').reverse());
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      let newArr = '.' + arr[i].slice(0, j + 1).join('.');
      if(obj.hasOwnProperty(newArr)){
        obj[newArr] += 1;
      }
      else{
        obj[newArr] = 1;
      }
    }
  }

  return obj;
}

module.exports = {
  getDNSStats
};
