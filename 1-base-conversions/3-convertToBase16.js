// Convert the integers in the console.logs below to base 16:

/******************************************************************************/

const convertToBase16 = element => {
  // Your code here
  let hex = '';
  const values = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

  if (typeof element === 'string' && element.includes('0b')) {
    const algarisms = ['0000', '0001', '0010', '0011', '0100', '0101', '0110', '0111', '1000', '1001', '1010', '1011', '1100', '1101', '1110', '1111'];
    const number = element.slice(2);

    for (let i = number.length - 1; i >= 3; i -= 4) {
      let bitsGroup = number.slice(i - 3, i + 1);

      while (bitsGroup.length < 4) {
        bitsGroup = '0' + bitsGroup;
      }

      let index = algarisms.indexOf(bitsGroup);
      hex = values[index] + hex;
    }
  } else {
    let decimal = element;
    let power = 0;

    while (Math.pow(16, power) <= decimal) {
      power++;
    }

    for (let i = power - 1; i >= 0; i--) {
      let j = 15

      while (j * Math.pow(16, i) > decimal && j > 0) {
        j--;
      }

      hex += `${values[j]}`;
      decimal -= j * Math.pow(16, i);
    }
  }

  return '0x' + hex;
};

/******************************************************************************/

console.log(convertToBase16(4)); // 0x4
console.log(convertToBase16(65)); // 0x41
console.log(convertToBase16(256)); // 0x100
console.log(convertToBase16(123)); // 0x7b
console.log(convertToBase16(1000)); // 0x3e8

console.log('––––––');

console.log(convertToBase16('0b1100')); // 0xc
console.log(convertToBase16('0b0101')); // 0x5
console.log(convertToBase16('0b1000')); // 0x8
console.log(convertToBase16('0b0111')); // 0x7

console.log('––––––');

console.log(convertToBase16('0b10100101')); // 0xa5
console.log(convertToBase16('0b11111111')); // 0xff
console.log(convertToBase16('0b01010101')); // 0x55
console.log(convertToBase16('0b00110011')); // 0x33
