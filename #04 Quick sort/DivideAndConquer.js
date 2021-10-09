// Divide a farm into squares all of them has to be equal to each other and to be as big as possible
const divideFarmIntoSquare = (width, hight) => {
  // Base case
  if (width === hight)
    return `The biggest square size you can get is ${width}m * ${hight}m`;
  // Recursive case
  if (width > hight) {
    return divideFarmIntoSquare(width - hight, hight);
  } else {
    return divideFarmIntoSquare(width, hight - width);
  }
};

const biggestSquare = divideFarmIntoSquare(90, 80);
console.log(biggestSquare);

const sumUp = (arr) => {
  // Base case
  if (!arr.length) return 0;
  // Recursive case
  const x = arr.shift();
  return x + sumUp(arr);
};

const result = sumUp([1, 2, 3]);
console.log(result);

// When you're writing a recursive function involving an array the base case is often an empty array or an array with one element. if you're suck try that first

const counter = (arr) => {
  // Base case
  if (!arr.length) return 0;
  // Recursive case
  arr.pop();
  return 1 + counter(arr);
};
const counterResult = counter([1, 2, 3]);
console.log(counterResult);

const maximumNum = (list) => {
  if (list.length === 1) return list[0];
  if (list.length == 2) return list[0] > list[1] ? list[0] : list[1];

  var m = maximumNum(list.slice(1));
  return list[0] > m ? list[0] : m;
};
const max = maximumNum([10, 200, 4, 10, 100, 1000, 555]);
console.log(max);
