/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor (type = true) {
    this.type = type;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  _setKey = (str, key) => {
    while (key.length < str.length) {
      key += key;
    }
    return key;
  }

  encrypt(str, key) {
    if (!str || !key){
      throw new Error ('Incorrect arguments!');
    }

    let j = 0;

    str = str.toUpperCase();
    key = key.toUpperCase();
    key = this._setKey(str, key);

    str = str.split('')
        .map( a => this.alphabet.includes(a) ?
            this.alphabet[(this.alphabet.indexOf(a) + this.alphabet.indexOf(key[j++])) % this.alphabet.length] : a)
        .join('');

    return this.type ? str : str.split('').reverse().join('');
  }

  decrypt(str, key) {
    if (!str || !key){
      throw new Error ('Incorrect arguments!');
    }

    let j = 0;
    str = str.toUpperCase();
    key = key.toUpperCase();
    key = this._setKey(str, key);

    str = str.split('')
        .map( a => this.alphabet.includes(a) ?
            this.alphabet.substr((this.alphabet.indexOf(a) - this.alphabet.indexOf(key[j++])) % this.alphabet.length, 1) : a)
        .join('');

    return this.type ? str : str.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
