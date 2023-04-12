/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {

  if (!options) {
    return str;
  }

  let string = String(str);
  let newString = '';

  const addition = String(options.addition);
  const repeatTimes = options.repeatTimes  || 1;
  const separator = options.separator || '+';
  const additionRepeatTimes = options.additionRepeatTimes  || 1;
  const additionSeparator = options.additionSeparator || '|';

  if(addition !== 'undefined'){
    newString = (addition + additionSeparator).repeat(additionRepeatTimes);

    if(additionSeparator.length){
      newString = newString.slice(0, -1 * additionSeparator.length);
    }
  }

  newString = (string + newString + separator).repeat(repeatTimes);
  if(separator.length){
    newString = newString.slice(0, -1 * separator.length);
  }


  return newString;
}

module.exports = {
  repeater
};
