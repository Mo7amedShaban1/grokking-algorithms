function swap(arr, x, y) {
  var temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}

const quickSort = (arr) => {
  if (!arr.length) return [];
  if (arr.length <= 1) return arr;
  if (arr.length == 2) {
    arr[0] > arr[1] ? swap(arr, 0, 1) : null;
    return arr;
  }

  var smallest = [];
  var biggest = [];
  var pivot = arr[0];

  for (const element of arr.slice(1)) {
    if (pivot >= element) {
      smallest.push(element);
    } else if (pivot <= element) {
      biggest.push(element);
    }
  }
  return [...quickSort(smallest), pivot, ...quickSort(biggest)];
};

console.log(quickSort([5, 5, 2, 1, 7, 10, 4, 90, 1]));
