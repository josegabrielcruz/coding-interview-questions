/**
 * Example of a normal recursive solution for finding the factorial of n
 * @param {*} n Number
 * @returns Number equaling the factorial of n
 */
const normalFactorial = (n) => {
  if (n < 1) {
    return 1
  } else {
    return n * normalFactorial(n - 1);
  }
}

/*
WALKTHROUGH:
normalFactorial(4)
4 * normalFactorial(3)
4 * (3 * normalFactorial(2))
4 * (3 * (2 * normalFactorial(1)))
4 * (3 * (2 * 1))
-> 24
*/

/**
 * Example of a tail recursive solution for finding the factorial of n
 * @param {*} n Number
 * @param {*} totalSoFar Number
 * @returns Number equaling the factorial of n
 */
const tailFactorial = (n, totalSoFar = 1) => {
  if (n === 0) {
    return totalSoFar;
  } else {
    return tailFactorial(n - 1, totalSoFar * n);
  }
}

/*
WALKTHROUGH:
tailFactorial(4)
tailFactorial(4,1)
tailFactorial(3,4)
tailFactorial(2,12)
tailFactorial(1,24)
tailFactorial(0,24)
-> 24
*/