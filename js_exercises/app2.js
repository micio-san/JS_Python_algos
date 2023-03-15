// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

// SOLUTION 1 - Return a single longest word
// SOLUTION 2 - Return an array and include multiple words if they have the same length
// SOLUTION 3 - Only return an array if multiple words, otherwise return a string

function longestWord(sen) {
  const arrayFr = sen.split(" ");
  let solution1;
  let solution2;
  let solution3;
  //solution One
  const arrayOne = arrayFr.sort((a, b) => {
    return b.length - a.length;
  });
  solution1 = arrayOne[0];

  //Solution 2
  solution2 = arrayOne.filter((el) => {
    return el.length === arrayOne[0].length;
  });
  //solution 3
  if (solution2.length !== 1) {
    solution3 = solution2;
  } else {
    solution3 = String(solution2);
  }
}

longestWord("I have a wonderful beautiful cat ");

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {
  let idx = 0;
  let answer = [];
  const chunk = () => {
    let smC = [];
    for (let i = idx * len; i < idx * len + len; i++) {
      smC.push(arr[i]);
    }
    const cw = smC.filter((val) => val !== undefined && val);
    answer.push(cw);
  };

  while (idx <= Math.floor(arr.length / len)) {
    chunk();
    idx++;
  }
  // console.log(answer);
}
chunkArray([1, 2, 3, 4, 5, 6, 7], 2);

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {
  let answer = [];
  for (let i = 0; i <= arrays.length - 1; i++) {
    if (Array.isArray(arrays[i])) {
      answer.push(...arrays[i]);
    } else answer.push(arrays[i]);
  }
}
flattenArray([[1, 2], [3, 4], [5, 6], [7]]);

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {
  let answer;
  function changeStr(str) {
    let newStr = str.toLowerCase().replaceAll(" ", "").split("").sort();
    return newStr;
  }
  const newStr1 = changeStr(str1).join("");
  const newStr2 = changeStr(str2).join("");
  answer = newStr1 === newStr2 ? "true" : "false";
}
isAnagram("Dormitory", "dirty room");

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {
  str.toLowerCase();
  let newStr = [];
  for (let i = 0; i <= str.length - 1; i++) {
    switch (str.charCodeAt(i)) {
      case 122:
      case 90:
        newStr.push(97);
        break;
      case 98:
      case 104:
      case 110:
      case 100:
      case 116:
        newStr.push(str.charCodeAt(i) + 1 - 32);
        break;
      case 32:
        newStr.push(str.charCodeAt(i));
        break;
      default:
        newStr.push(str.charCodeAt(i) + 1);
    }
  }
  let answ = "";
  newStr.map((n) => {
    let l = String.fromCharCode(n);
    answ += l;
  });
  // console.log(answ);
}

letterChanges("hello there");

//CHALLENGE 6: Write a method that returns a deep array like [[key, value]]
//ex Result: ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]
function checkIfObj(val) {
  return !Array.isArray(val) && typeof val === "object" && val !== null;
}
const makePairs = (object) => {
  let answer;
  if (checkIfObj(object)) {
    answer = Object.entries(object);
  }
  return answer;
};

makePairs({ a: 1, b: 2, c: 3, d: 4, e: 5 });
