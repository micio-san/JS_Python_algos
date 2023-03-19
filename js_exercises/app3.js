// CHALLENGE 1: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20

function addAll() {
  let res = 0;
  for (let i = 0; i <= arguments.length - 1; i++) {
    res += arguments[i];
  }
  //   console.log(res);
}

addAll(2, 5, 6, 7);

// CHALLENGE 2: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) == 17
//un numero primo è un numero divisibile solo per uno e per se stesso

function sumAllPrimes(n) {
  let res = 0;
  function check(i) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        return false;
      }
    }
    return true;
  }

  for (let i = 2; i <= n; i++) {
    if (check(i)) {
      res += i;
    }
  }
  return res;
}

sumAllPrimes(10);
// CHALLENGE 3: SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover numbers in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']

function seekAndDestroy(...arg) {
  const array = arg.filter((item) => Array.isArray(item)).flat(1);
  const param = arg.filter((item) => {
    if (Array.isArray(item)) {
      return false;
    }
    return true;
  });
  let res;
  for (let i = 0; i <= param.length - 1; i++) {
    res = array.filter((item) => item !== param[i]);
  }
  // console.log(res);
}

seekAndDestroy([2, 3, 4, 6, 6, "hello"], "hello");

// CHALLENGE 4: SORT BY HEIGHT
// Some people are standing in a row in a park. There are trees between them which
//cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// ex.
// a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

function sortByHeight(a) {
  const arrayPos = [];
  const arrayVals = a.filter((item) => item !== -1);
  a.map((item, idx) => {
    if (item === -1) {
      arrayPos.push(idx);
    }
  });
  arrayVals.sort((a, b) => a - b);
  for (let i = 0; i <= arrayPos.length - 1; i++) {
    arrayVals.splice(arrayPos[i], 0, -1);
  }
  // console.log(arrayVals);
}

sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]);

/*  CHALLENGE 5: CLASSES
     Create a class called Vehicle with  (name - maxSpeed) and a 
      method called "getMaxSpeed" that returns the "maxSpeed"
      Create a "Spaceship" class that extends "Vehicle" with (numRocketEngines)
*/

class Vehicle {
  constructor(_name, _maxSpeed) {
    this.name = _name;
    this.maxSpeed = _maxSpeed;
  }
  getMaxSpeed() {
    return this.maxSpeed;
  }
}

class Spaceship extends Vehicle {
  constructor(_name, _maxSpeed, _numRocketEngines) {
    super(_name, _maxSpeed);
    this.numRocketEngines = _numRocketEngines;
  }
}

const spaceship = new Spaceship("Enterprise", 1000, 2);

// CHALLENGE 6: MISSING LETTERS
// Find the missing letter in the passed letter range and return it. If all letters are present, return undefined
// ex.
// missingLetters("abce") == "d"
// missingLetters("abcdefghjklmno") == "i"
// missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined

function missingLetters(str) {}

missingLetters("abcdefghjklmno");

/*CHALLENGE 8: COMPARE STRINGS 
Finde the difference between an array a and an array b and return a boolean
ex. findeDifference([dog], [dwg]) == false;
*/

// CHALLENGE 9: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex.
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116]

function evenOddSums() {}
