const addZeros = require('../utils/addZeros');

// Translate the ASCII strings in the console.logs below to 8-bit binary strings
// Implement the imported helper function addZeros()
//    Read the export file for the explanation of how it works

/******************************************************************************/

const base10ToBase2 = function (number) {
  let binary = '';

  let decimal = number;
  let digit = 0;

  while (Math.pow(2, digit) < decimal) {
    digit++;
  }

  for (let i = digit; i >= 0; i--) {
    if (Math.pow(2, i) <= decimal) {
      binary += '1';
      decimal -= Math.pow(2, i);
    } else {
      binary += '0';
    }
  }

  return addZeros(binary, 8);
}

const asciiTo8bit = str => {
  // Your code here
  let binary = '';

  const symbols = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/'];
  const symbolStart = 32;

  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const numberStart = 48;

  const smallLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const smallLettersStart = 97;

  const bigLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const bigLettersStart = 65;

  const characters = [symbols, numbers, smallLetters, bigLetters];
  const starts = [symbolStart, numberStart, smallLettersStart, bigLettersStart];

  for (let i = 0; i < str.length; i++) {
    let index;
    let value;

    for (let j = 0; j < characters.length; j++) {
      if (characters[j].includes(str[i])) {
        index = characters[j].indexOf(str[i]);
        let decimalValue = starts[j] + index;
        value = base10ToBase2(decimalValue);
        binary += value;
      }
    }
  }

  return binary
};

/******************************************************************************/

console.log(asciiTo8bit('123'));
// 001100010011001000110011

console.log(asciiTo8bit('ABC'));
// 010000010100001001000011

console.log(asciiTo8bit('Hello, world!'));
// 01001000011001010110110001101100011011110010110000100000011101110110111101110010011011000110010000100001
