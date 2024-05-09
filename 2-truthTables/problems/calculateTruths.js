const { or, and, calculateTruthTable } = require('../../utils/truthTableHelpers');

// Implement the imported helper functions from line 1
//    Read the export file for the explanation of how they work

// Example workflow for the problem directly below:
//    A    B     !A || (A && B)
//    -------------------
//    0    1      ?

//    1. !A -> 1
//    2. calculateTruthTable(0, and, 1) -> 0
//    3. calculateTruthTable(1, or, 0) -> 1
//    4. Answer: 1

/******************************************************************************/

// Update arguments to calculate and console.log returned value
calculateTruthTable(0, and, 1); // 0
calculateTruthTable(1, or, 0); // 1

console.log("second table");
console.log("A  B  !A");

for (let A = 0; A <= 1; A++) {
    for (let B = 0; B <= 1; B++) {
        console.log(A, B, not(A));
        calculateTruthTable(B, or, not(A));
        console.log("-------------------");
    }
}

console.log("third table");
console.log("A  B  !B  A && !B");

for (let A = 0; A <= 1; A++) {
    for (let B = 0; B <= 1; B++) {
        console.log(A, B, not(B), and(A, not(B)));
        console.log(not(and(A, not(B))));
        console.log("-------------------");
    }
}

console.log("fourth table");
console.log("A  B  A || !B");

for (let A = 0; A <= 1; A++) {
    for (let B = 0; B <= 1; B++) {
        console.log(A, B, or(A, not(B)));
        console.log(not(or(A, not(B))));
        console.log("-------------------");
    }
}

console.log("fifth table");
console.log("A  B  !A");

for (let A = 0; A <= 1; A++) {
    for (let B = 0; B <= 1; B++) {
        console.log(A, B, not(A));
        calculateTruthTable(A, or, not(A));
        console.log("-------------------");
    }
}

console.log("sixth table");
console.log("A  B  !B");

for (let A = 0; A <= 1; A++) {
    for (let B = 0; B <= 1; B++) {
        console.log(A, B, not(B));
        calculateTruthTable(B, and, not(B));
        console.log("-------------------");
    }
}

console.log("seventh table");
console.log("A  B  C  !C  A && B ");

for (let A = 0; A <= 1; A++) {
    for (let B = 0; B <= 1; B++) {
        for (let C = 0; C <= 1; C++) {
            console.log(A, B, C, not(C), and(A, B));
            calculateTruthTable(and(A, B), or, not(C));
            console.log("-------------------");
        }
    }
}

console.log('eighth table');
console.log("A  B  C  !A  B && C");

for (let A = 0; A <= 1; A++) {
    for (let B = 0; B <= 1; B++) {
        for (let C = 0; C <= 1; C++) {
            console.log(A, B, C, not(A), and(B, C));
            calculateTruthTable(not(A), or, and(B, C));
            console.log("-------------------");
        }
    }
}
