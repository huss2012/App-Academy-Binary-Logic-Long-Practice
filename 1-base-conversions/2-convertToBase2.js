// Convert the integers in the console.logs below to base 2

/******************************************************************************/

const convertToBase2 = element => {
  // Your code here
  let binary = '0b';

  if (typeof element === 'string' && element.includes('0x')) {
    const digits = element.split('').slice(2);
    const algarisms = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    const values = ['0', '1', '10', '11', '100', '101', '110', '111', '1000', '1001', '1010', '1011', '1100', '1101', '1110', '1111'];

    for (let i = digits.length - 1; i >= 0; i--) {
      let index = algarisms.indexOf(digits[i]);
      digits[i] = values[index];

      while (digits[i].length < 4 && i > 0) {
        digits[i] = '0' + digits[i];
      }
    }

    binary += digits.join('');
  } else {
    let decimal = element;
    let digit = 0;

    while (Math.pow(2, digit) < decimal) {
      digit++;
    }

    for (let i = digit; i >= 0; i--) {
      if (Math.pow(2, i) <= decimal) {
        binary += '1';
        decimal -= Math.pow(2, i);
      } else if (i !== digit) {
        binary += '0';
      }
    }
  }

  return binary;
};

/******************************************************************************/

console.log(convertToBase2(4)); // 0b100
console.log(convertToBase2(65)); // 0b1000001
console.log(convertToBase2(256)); // 0b100000000
console.log(convertToBase2(123)); // 0b1111011
console.log(convertToBase2(1000)); // 0b1111101000

console.log('––––––');

console.log(convertToBase2('0xf')); // 0b1111
console.log(convertToBase2('0xfa')); // 0b11111010
console.log(convertToBase2('0x1234')); // 0b1001000110100
console.log(convertToBase2('0xc9a1')); // 0b1100100110100001
console.log(convertToBase2('0xbf12')); // 0b1011111100010010
