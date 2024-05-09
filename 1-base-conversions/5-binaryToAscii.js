// Translate the binary sequences in the
// console.logs below to 8-bit ASCII strings:

/******************************************************************************/

// Helper function to convert a binary string into an array of 8-bit strings
const binaryStringToArray = str => {
  let binary8bitStr = '';
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    binary8bitStr += str[i];
    count++;

    if (count % 8 === 0) {
      if (!str[i + 1]) break;
      binary8bitStr += ',';
    }
  }

  return binary8bitStr.split(',');
};

const base2ToBase10 = function (number) {
  let decimal = 0;
  let exponent = 0;

  for (let i = number.length - 1; i >= 0; i--) {
    decimal += number[i] * Math.pow(2, exponent);
    exponent++;
  }

  return decimal
}

const binaryToAscii = str => {
  // Your code here
  let newStr = '';

  const symbols = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/'];
  const symbolStart = 0b100000;

  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const numberStart = 0b110000;

  const smallLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const smallLettersStart = 0b1100001;

  const bigLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const bigLettersStart = 0b1000001;

  const characters = [symbols, numbers, smallLetters, bigLetters];
  const starts = [symbolStart, numberStart, smallLettersStart, bigLettersStart];

  const chars = binaryStringToArray(str);

  for (let i = 0; i < chars.length; i++) {
    let value = base2ToBase10(chars[i]);

    for (let j = 0; j < characters.length; j++) {
      if (value < starts[j] + characters[j].length && value >= starts[j]) {
        newStr += characters[j][value - starts[j]];
      }
    }
  }

  return newStr;
};
/******************************************************************************/

console.log(binaryToAscii('011000010110001001100011'));
// 'abc'

console.log(binaryToAscii('010000010100001001000011'));
// 'ABC'

console.log(binaryToAscii('010010000110010101101100011011000110111100101100001000000111011101101111011100100110110001100100'));
// 'Hello, world'
