function swap(arr, xp, yp) {
  var temp = arr[xp];
  arr[xp] = arr[yp];
  arr[yp] = temp;
}

const selectionSort = (arr) => {
  var i, j;
  var arrLength = arr.length;

  for (i = 0; i <= arrLength - 1; i++) {
    for (j = i + 1; j <= arrLength - 1; j++) {
      if (arr[i] > arr[j]) {
        swap(arr, i, j);
      }
    }
  }

  return arr;
};

const sortedArr = selectionSort([3, 2, 1, 5, 9, 7, 6, 10, 8, 4]);
console.log(sortedArr);
