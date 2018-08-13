// Welcome. In this kata, you are asked to square every digit of a number.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

// https://www.codewars.com/kata/square-every-digit/train/javascript

function squareDigits(num){
    return parseInt(num.toString().split('').map(digit => +digit * +digit).join(''));
  }

// Below should return 811181

squareDigits(9119);
