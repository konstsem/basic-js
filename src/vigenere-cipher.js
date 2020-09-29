class VigenereCipheringMachine {
  constructor(direction = true) {
    this.direction = direction;
  }

    encrypt() {
      const [str, key] = [...arguments];
      const table = (key.repeat(str.length / key.length) + key.slice(0, str.length % key.length)).toUpperCase();
      if (!str || !key) throw new Error('arguments is not given');
      const strToUpperCase = String(str).toUpperCase();
      const strAsArr = this.direction ? strToUpperCase.split('') : strToUpperCase.split('').reverse();
      let index = 0;
      const result = strAsArr.map((letter) => {
        if (letter.charCodeAt() >= 'A'.charCodeAt() && letter.charCodeAt() <= 'Z'.charCodeAt()) {
          let newCharCode = letter.charCodeAt() + table[index].charCodeAt() - 'A'.charCodeAt();
          if (newCharCode > 'Z'.charCodeAt()) newCharCode = newCharCode - 1 - 'Z'.charCodeAt() + 'A'.charCodeAt();
          index += 1;
          return String.fromCharCode(newCharCode);
        }
        return letter;
      });
      return this.direction ? result.join('') : result.reverse().join('');
    }

    decrypt() {
      const [str, key] = [...arguments];
      const table = (key.repeat(str.length / key.length) + key.slice(0, str.length % key.length)).toUpperCase();
      if (!str || !key) throw new Error('arguments is not given');
      const strToUpperCase = String(str).toUpperCase();
      const strAsArr = strToUpperCase.split('');
      let index = 0;
      return strAsArr.map((letter) => {
        if (letter.charCodeAt() >= 'A'.charCodeAt() && letter.charCodeAt() <= 'Z'.charCodeAt()) {
          let newCharCode = letter.charCodeAt() - table[index].charCodeAt() + 'A'.charCodeAt();
          if (newCharCode < 'A'.charCodeAt()) newCharCode = newCharCode + 1 + 'Z'.charCodeAt() - 'A'.charCodeAt();
          index += 1;
          return String.fromCharCode(newCharCode);
        }
        return letter;
      }).join('');
    }
}

module.exports = VigenereCipheringMachine;
