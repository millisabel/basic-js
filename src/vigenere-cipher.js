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
  constructor(direct = true) {
    this.direct = direct;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  charIndex = (str) => str.toUpperCase().split('').map(el => {
    return this.alphabet.indexOf(el) === -1 ? el : this.alphabet.indexOf(el)
  })

  encrypt(message, key) {
    if (typeof message === 'string' && typeof key === 'string') {
      let encrypted = '';

      let messageNum = this.charIndex(message);
      let keyNum = this.charIndex(key);
      if (keyNum.length < messageNum.length) {
        keyNum = Array(Math.ceil(messageNum.length / keyNum.length)).fill(keyNum).flat();
      }
      keyNum.length = messageNum.length;
      let keySkip = 0;

      for (let i = 0; i < message.length; i++) {
        if (typeof messageNum[i] === 'string') {
          encrypted += messageNum[i];
          keySkip += 1;
        } else {
          encrypted += this.alphabet.charAt((messageNum[i] + keyNum[i - keySkip]) % 26)
        }
      }
      if (this.direct) {
        return encrypted;
      } else {
        encrypted = encrypted.split('').reverse().join('')
        return encrypted
      }

    } else {
      throw Error('Incorrect arguments!')
    }
  }

  decrypt(message, key) {
    if (typeof message === 'string' && typeof key === 'string') {
      let decrypted = '';

      let messageNum = this.charIndex(message);
      let keyNum = this.charIndex(key);
      if (keyNum.length < messageNum.length) {
        keyNum = Array(Math.ceil(messageNum.length / keyNum.length)).fill(keyNum).flat();
      }
      keyNum.length = messageNum.length;
      let keySkip = 0;

      for (let i = 0; i < message.length; i++) {
        if (typeof messageNum[i] === 'string') {
          decrypted += messageNum[i];
          keySkip += 1;
        } else {
          if (messageNum[i] - keyNum[i - keySkip] >= 0) {
            decrypted += this.alphabet.charAt((messageNum[i] - keyNum[i - keySkip]) % 26)
          } else {
            decrypted += this.alphabet.charAt((messageNum[i] - keyNum[i - keySkip] + 26) % 26)
          }
        }
      }
      if (this.direct) {
        return decrypted;
      } else {
        decrypted = decrypted.split('').reverse().join('')
        return decrypted
      }
    } else {
      throw Error('Incorrect arguments!')
    }
  }
}

const directMachine = new VigenereCipheringMachine();
const reverseMachine = new VigenereCipheringMachine(false);
directMachine.encrypt('attack at dawn!', 'alphonse');
// reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse');
// console.log(directMachine.encrypt('attack at dawn!', 'alphonse'))


module.exports = {
  VigenereCipheringMachine
};
