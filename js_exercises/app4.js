/*1:Find Number of Digits
Create a function that will return an integer number corresponding to 
the amount of digits in the given integer num.
 num_of_digits(1000)=> 4
*/

function num_of_digits(num) {
  if (typeof num !== "number") {
    return;
  }
  const str = String(num);
  return str.length;
}

num_of_digits(1000);

/*2: Seven Boom
Create a function that takes an array of numbers and return "Boom!" 
if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".
sevenBoom([1, 2, 3, 4, 5, 6, 7]) => "Boom!"
*/

function sevenBoom(arr) {
  let res = "";
  if (Array.isArray(arr)) {
    const x = arr.every((nu) => nu !== 7);
    res = x ? "there is no 7 in the array" : "Boom!";
  } else {
    res = "This is not an array";
  }
}

sevenBoom([1, 2, 3, 4, 5, 6, 7]);

/*3: Count true
Create a function which returns the number of true values there are in an array.
countTrue([true, false, false, true, false]) => 3
*/

function countTrue(arr) {
  let res = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    arr[i] ? res++ : res;
  }
  //   console.log(res);
}

countTrue([true, false, false, true, false, true]);

/* 4: Tile Teamwork Tactics
In a board game, a piece may advance 1-6 tiles 
forward depending on the number rolled on a dice. 
If you advance your piece onto the same tile as another 
player's piece, both of you earn a bonus.
Can you reach your friend's tile number in the next roll? 
Create a function that takes your position a and your friend's position b 
and returns a boolean representation of whether it's possible to earn 
a bonus on any die roll.
You cannot move backward and if you are already on the same tile, 
return false.
Expect only positive integer inputs
Examples:
possibleBonus(3, 7) => true
possibleBonus(1, 9) => false
possibleBonus(5, 3) => false
*/

function possibleBonus(tile1, tile2) {
  let arr = [];
  for (let i = tile1 + 1; i <= tile1 + 6; i++) {
    arr.push(i);
  }
  const res = arr.some((n) => n === tile2);
}
possibleBonus(3, 9);

/*5:Oddish vs. Evenish
Create a function that determines whether a number is Oddish or Evenish. 
A number is Oddish if the sum of all of its digits is odd, 
and a number is Evenish if the sum of all of its digits is even. 
If a number is Oddish, return "Oddish". Otherwise, return "Evenish".
For example, oddishOrEvenish(121) should return "Evenish", 
since 1 + 2 + 1 = 4. oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5.
Examples
oddishOrEvenish(43) ➞ "Oddish"
4 + 3 = 7
7 % 2 = 1

oddishOrEvenish(373) ➞ "Oddish"
3 + 7 + 3 = 13
13 % 2 = 1

oddishOrEvenish(4433) ➞ "Evenish"
4 + 4 + 3 + 3 = 14
14 % 2 =  0
*/

function oddishOrEvenish(n) {
  const arr = String(n).split("");
  const newArr = arr.map((val) => parseInt(val));
  const total = newArr.reduce((a, c) => a + c);
  let res;
  res = total % 2 == 0 ? "Evenish" : "Oddish";
}
oddishOrEvenish(44);

/*6: Get Days
 Create a function that takes two dates and returns the number of days between 
 the first and second date.Dates may not all be in the same month/year.
Examples: getDays(
  new Date("June 14, 2019"),
  new Date("June 20, 2019")
)=> 6
getDays(
  new Date("December 29, 2018"),
  new Date("January 1, 2019")
) => 3
getDays(
  new Date("July 20, 2019"),
  new Date("July 30, 2019")
)=> 10
*/

function getDays(a, b) {
  const date1 = Date.parse(b);
  const date2 = Date.parse(a);
  const diffy = (date1 - date2) / 1000;
  const days = diffy / 60 / 60 / 24;
}

getDays(new Date("June 14, 2019"), new Date("June 20, 2019"));

/* 7: Nums In Str
Create a function that takes an array of strings and returns an array 
with only the strings that have numbers in them. 
If there are no strings containing numbers, return an empty array.
The strings can contain white spaces or any type of characters.
Bonus: Try solving this without RegEx.
Examples:
numInStr(["1a", "a", "2b", "b"]) => ["1a", "2b"]
numInStr(["abc", "abc10"]) => ["abc10"]
numInStr(["abc", "ab10c", "a10bc", "bcd"]) => ["ab10c", "a10bc"]
numInStr(["this is a test", "test1"]) => ["test1"]
*/

function numInStr(arr) {
  const multiArr = arr.map((val) => {
    return val.split("");
  });
  let onlyNums = [];

  const check = multiArr.forEach((arr) => {
    if (Array.isArray(arr)) {
      arr.forEach((n) => {
        let resp = /[0-9]/.test(n);
        if (resp) onlyNums.push(arr.join(""));
      });
    }
  });
}

numInStr(["1a", "a", "2b", "b"]);

/* 8:
Histogram Function
Build a function that creates histograms. 
Every bar needs to be on a new line and its length corresponds 
to the numbers in the array passed as an argument. 
The second argument of the function represents the character to be used for the bar.
histogram(arr, char) ➞ str
Examples
histogram([1, 3, 4], "#") => "#\n###\n####"
#
###
####
histogram([6, 2, 15, 3], "=") ➞ "======\n==\n===============\n==="
======
==
===============
===
histogram([1, 10], "+") ➞ "+++++++++++"
*/

function histogram(arr, char) {
  let res = [];
  arr.forEach((val) => {
    for (let i = 1; i <= val; i++) {
      res.push(char);
    }
    res.splice(val - 1, 0, "\n");
  });
  const answer = res.join("");
}

histogram([1, 3], "$");

/* 9:
Positive Dominant
An array is positive dominant if it contains
more unique positive values than unique negative values. 
Write a function that returns true if an array is positive dominant.
0 counts as neither a positive nor a negative value. 
Examples
isPositiveDominant([1, 1, 1, 1, -3, -4]) ➞ false
There is only 1 unique positive value (1).
There are 2 unique negative values (-3, -4).

isPositiveDominant([5, 99, 832, -3, -4]) => true
isPositiveDominant([5, 0]) => true
isPositiveDominant([0, -4, -1]) => false
*/

function isPositiveDominant(arr) {
  const arrSe = new Set(arr);
  //postivi/negativi
  let answers = [0, 0];
  const check = arrSe.forEach((val) => {
    if (val === 0) return;
    Math.sign(val) === 1 ? answers[0]++ : answers[1]++;
  });
  const res = answers[0] > answers[1] ? true : false;
}
isPositiveDominant([0, -4, -1]);

/*10: Grocery Price
Create a function that takes an array of objects (groceries)
 which calculates the total price and returns it as a number. 
 There might be a floating point precision problem in here.
 A grocery object has a product, a quantity and a price, for example:
{
  "product": "Milk",
  "quantity": 1,
  "price": 1.50
}
Examples
getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 }
]) => 1.5

getTotalPrice([
  { product: "Milk", quantity: 2, price: 1.50 },
  { product: "Cereals", quantity: 1, price: 2.50 }
]) => 5.5
getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 },
  { product: "Eggs", quantity: 12, price: 0.10 },
  { product: "Bread", quantity: 2, price: 1.60 },
  { product: "Cheese", quantity: 1, price: 4.50 }
]) => 10.4
*/

function getTotalPrice(arr) {
  const newArr = arr.map((prod) => {
    return [(prod.price *= prod.quantity)].join();
  });
  const res = newArr.reduce((a, c) => parseFloat(a) + parseFloat(c));
}

getTotalPrice([
  { product: "Milk", quantity: 2, price: 1.5 },
  { product: "Cereals", quantity: 1, price: 2.5 },
]);
