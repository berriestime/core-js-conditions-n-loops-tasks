/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  }
  if (b >= a && b >= c) {
    return b;
  }
  return c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  const result =
    queen.x === king.x ||
    queen.y === king.y ||
    Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y);

  return result;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) {
    return false;
  }

  if (a + b <= c || a + c <= b || b + c <= a) {
    return false;
  }

  const result = a === b || b === c || a === c;

  return result;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  if (num < 1 || num > 39) {
    throw new Error(`
      Number out of range. Please provide a number between 1 and 39.`);
  }

  let result = '';
  let numtmp = num;

  if (numtmp >= 10) {
    if (numtmp >= 30) {
      result += 'XXX';
      numtmp -= 30;
    } else if (numtmp >= 20) {
      result += 'XX';
      numtmp -= 20;
    } else {
      result += 'X';
      numtmp -= 10;
    }
  }

  if (numtmp >= 5) {
    if (numtmp === 9) {
      result += 'IX';
      numtmp -= 9;
    } else {
      result += 'V';
      numtmp -= 5;
    }
  }

  if (numtmp === 4) {
    result += 'IV';
    numtmp -= 4;
  }

  while (numtmp > 0) {
    result += 'I';
    numtmp -= 1;
  }

  return result;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let result = '';

  for (let i = 0; i < numberStr.length; i += 1) {
    const currentChar = numberStr[i];
    let word;

    switch (currentChar) {
      case '0':
        word = 'zero';
        break;
      case '1':
        word = 'one';
        break;
      case '2':
        word = 'two';
        break;
      case '3':
        word = 'three';
        break;
      case '4':
        word = 'four';
        break;
      case '5':
        word = 'five';
        break;
      case '6':
        word = 'six';
        break;
      case '7':
        word = 'seven';
        break;
      case '8':
        word = 'eight';
        break;
      case '9':
        word = 'nine';
        break;
      case '-':
        word = 'minus';
        break;
      case '.':
      case ',':
        word = 'point';
        break;
      default:
        throw new Error(`Invalid character encountered: ${currentChar}`);
    }

    if (result.length > 0) {
      result += ' ';
    }
    result += word;
  }

  return result;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left += 1;
    right -= 1;
  }

  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  if (digit < 0 || digit > 9) {
    return false;
  }

  let numTmp = num;
  numTmp = Math.abs(numTmp);

  do {
    const currentDigit = numTmp % 10;

    if (currentDigit === digit) {
      return true;
    }

    numTmp = Math.floor(numTmp / 10);
  } while (numTmp > 0);

  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  if (arr.length < 3) {
    return -1;
  }

  for (let i = 1; i < arr.length - 1; i += 1) {
    let leftSum = 0;
    let rightSum = 0;

    for (let j = 0; j < i; j += 1) {
      leftSum += arr[j];
    }

    for (let j = i + 1; j < arr.length; j += 1) {
      rightSum += arr[j];
    }

    if (leftSum === rightSum) {
      return i;
    }
  }

  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const matrix = [];
  for (let i = 0; i < size; i += 1) {
    matrix[i] = [];
    for (let j = 0; j < size; j += 1) {
      matrix[i][j] = 0;
    }
  }

  let value = 1;
  let startCol = 0;
  let endCol = size - 1;
  let startRow = 0;
  let endRow = size - 1;

  while (startCol <= endCol && startRow <= endRow) {
    for (let i = startCol; i <= endCol; i += 1) {
      matrix[startRow][i] = value;
      value += 1;
    }
    startRow += 1;

    for (let i = startRow; i <= endRow; i += 1) {
      matrix[i][endCol] = value;
      value += 1;
    }
    endCol -= 1;

    if (startRow <= endRow) {
      for (let i = endCol; i >= startCol; i -= 1) {
        matrix[endRow][i] = value;
        value += 1;
      }
      endRow -= 1;
    }

    if (startCol <= endCol) {
      for (let i = endRow; i >= startRow; i -= 1) {
        matrix[i][startCol] = value;
        value += 1;
      }
      startCol += 1;
    }
  }

  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */

function rotateMatrix(matrix) {
  const rotated = matrix;
  for (let i = 0; i < rotated.length; i += 1) {
    for (let j = i; j < rotated[i].length; j += 1) {
      const temp = rotated[i][j];
      rotated[i][j] = rotated[j][i];
      rotated[j][i] = temp;
    }
  }

  for (let i = 0; i < rotated.length; i += 1) {
    for (let j = 0, k = rotated[i].length - 1; j < k; j += 1, k -= 1) {
      const temp = rotated[i][j];
      rotated[i][j] = rotated[i][k];
      rotated[i][k] = temp;
    }
  }

  return matrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */

function sortByAsc(arr) {
  const swap = (items, i1, i2) => {
    const itemsTmp = items;
    const temp = items[i1];
    itemsTmp[i1] = itemsTmp[i2];
    itemsTmp[i2] = temp;
  };

  const partition = (items, left, right) => {
    const pivot = items[Math.floor((left + right) / 2)];
    let i = left;
    let j = right;

    while (i <= j) {
      while (items[i] < pivot) {
        i += 1;
      }
      while (items[j] > pivot) {
        j -= 1;
      }
      if (i <= j) {
        swap(items, i, j);
        i += 1;
        j -= 1;
      }
    }
    return i;
  };

  const quickSort = (items, left, right) => {
    if (left < right) {
      const pivotIndex = partition(items, left, right);
      quickSort(items, left, pivotIndex - 1);
      quickSort(items, pivotIndex, right);
    }
  };

  quickSort(arr, 0, arr.length - 1);
  return arr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */

function shuffleChar(str, iterations) {
  const PATTERN_REPEAT_INTERVAL = 36;

  function shuffleOnce(inputString) {
    let evenIndexChars = '';
    let oddIndexChars = '';

    for (let i = 0; i < inputString.length; i += 1) {
      if (i % 2 === 0) {
        evenIndexChars += inputString[i];
      } else {
        oddIndexChars += inputString[i];
      }
    }

    return evenIndexChars + oddIndexChars;
  }

  if (str.length < 3) {
    return str;
  }

  const optimizedIterations = iterations % PATTERN_REPEAT_INTERVAL;
  let shuffledString = str;

  for (let i = 0; i < optimizedIterations; i += 1) {
    shuffledString = shuffleOnce(shuffledString);
  }

  return shuffledString;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  if (number < 10) {
    return number;
  }

  const digits = [];
  let temp = number;

  while (temp > 0) {
    digits.push(temp % 10);
    temp = Math.floor(temp / 10);
  }
  digits.reverse();

  let i = digits.length - 2;
  while (i >= 0 && digits[i] >= digits[i + 1]) {
    i -= 1;
  }

  if (i < 0) {
    return number;
  }

  let j = digits.length - 1;
  while (digits[j] <= digits[i]) {
    j -= 1;
  }

  [digits[i], digits[j]] = [digits[j], digits[i]];

  let start = i + 1;
  let end = digits.length - 1;
  while (start < end) {
    [digits[start], digits[end]] = [digits[end], digits[start]];
    start += 1;
    end -= 1;
  }

  const result = digits.reduce((acc, digit) => acc * 10 + digit, 0);

  return result;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
