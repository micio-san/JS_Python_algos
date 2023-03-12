// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
  const arr = str.split("");
  let answer = "";
  for (let i = arr.length - 1; i >= 0; i--) {
    answer += arr[i];
  }
  return answer;
}

reverseString("gatto");

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
  const arr1 = str.split("");
  const arr2 = [...arr1].reverse();
  let answer;
  for (let i = 0; i <= arr1.length - 1; i++) {
    if (arr1[0] !== arr2[0]) {
      answer = `${str} is not a palindrome`;
      break;
    } else {
      answer = `${str} is a palindrome`;
    }
  }
  return answer;
}

isPalindrome("racecar");

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
  const str = String(int);
  let strRes = [];
  for (let i = str.length - 1; i >= 0; i--) {
    strRes.push(str[i]);
  }
  let res = parseInt(strRes.join(""), 10);
  return res;
}

reverseInt(789);

// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
  const arr = str.split(" ");
  const arrC = arr.map((string) => {
    return string.replace(str[0], str[0].toUpperCase());
  });

  return arrC.join(" ");
}

capitalizeLetters("gatto is gatto");

// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
  const newString = str.toLowerCase().replaceAll(" ", "");
  let mapOfChars = {};
  let array = newString.split("");
  for (let i = 0; i <= array.length - 1; i++) {
    if (!mapOfChars[array[i]]) {
      mapOfChars[array[i]] = 1;
    } else {
      mapOfChars[array[i]] = mapOfChars[array[i]] + 1;
    }
  }
  let emoh = Object.keys(mapOfChars).map((el) => {
    return (array = [el, mapOfChars[el]]);
  });
  emoh.sort((a, b) => b[1] - a[1]);
  console.log(
    'The letter that appears the most is "' +
      emoh[0][0] +
      '" which appears a total of ' +
      emoh[0][1] +
      " times"
  );
}
maxCharacter("je suis pas dupe");

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100.
//  For multiples of 3, instead of the number, print "Fizz",
// for multiples of 5 print "Buzz". For numbers which are
// multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz", i);
    } else if (i % 3 === 0) {
      console.log("Fizz", i);
    } else if (i % 5 === 0) {
      console.log("Buzz", i);
    }
  }
}
// fizzBuzz();
