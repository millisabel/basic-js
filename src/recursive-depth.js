/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth( arr, deep = 0 ) {
    let currentDeep = deep + 1;
    let newDeep = 0;
    arr.map(el => {
      if (Array.isArray(el)){
        newDeep =  Math.max(newDeep,this.calculateDepth(el, currentDeep));
      }
    });
    return Math.max(currentDeep, newDeep);
  }
}

module.exports = {
  DepthCalculator
};
