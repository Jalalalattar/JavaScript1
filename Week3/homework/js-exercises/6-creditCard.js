
"use strict";

function creditCardValidator(number) {
  if (cardlength(number) !== 16) {
    return "Error: Credit card number must be 16 digits!";

  } else if (isNaN(number)) {
    return "Error: Invalid characters!";

  } else if (isSame(number)) {
    return "Error: Only one type of number!";

  } else if (isnotGreaterThanSixteen(number)) {
    return "Error: Sum of your credit card numbers less than 16!";

  } else if (isOdd(number)) {
    return "Error: Odd final number!";
    
  } else {
    return "Your credit card is valid!";
  }
}

function cardlength(number) {
  return number.toString().length;
}

function isSame(number) {
  let counter = 0;
  let stringOfNumber = number.toString();
  for (let index in stringOfNumber) {
    if (stringOfNumber[index] == stringOfNumber[0]) {
      counter++;
    }
  }
  if (counter === 16) {
    return true;
  }
  return false;
}
function isnotGreaterThanSixteen(number) {
  let sum = 0;
  while (number) {
    sum += number % 10;
    number = Math.floor(number / 10);
  }
  if (sum <= 16) {
    return true;
  }
  return false;
}
function isOdd(number) {
  if (number % 2 == 1) {
    return true;
  }
  return false;
}
console.log(`Example 1: ${creditCardValidator('9999777788880000')}`);
console.log(`Example 2: ${creditCardValidator('6666666666661666')}`);
console.log(`Example 3: ${creditCardValidator('a92332119c011112')}`);
console.log(`Example 4: ${creditCardValidator('4444444444444444')}`);
console.log(`Example 5: ${creditCardValidator('1111111111111110')}`);
console.log(`Example 6: ${creditCardValidator('6666666666666661')}`);
