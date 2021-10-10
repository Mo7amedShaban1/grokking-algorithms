const list = Array.from(Array(1000), (value, index) => index);

// Method 1:
const binarySearch1 = (list, target) => {
  var low = 0;
  var high = list.length - 1;

  while (low <= high) {
    const mid = parseInt(low + (high - low) / 2);
    const guess = list[mid];

    if (target === guess) {
      return mid;
    } else if (target > guess) {
      low = mid + 1;
    } else if (target < guess) {
      high = mid - 1;
    }
  }

  return -1;
};

// Method 2:
const binarySearch2 = (list, target, start, end) => {
  if (start > end) return -1;

  var middle = parseInt(start + (end - start) / 2);

  if (list[middle] === target) return middle;

  if (list[middle] > target)
    return binarySearch2(list, target, start, middle - 1);
  if (list[middle] < target)
    return binarySearch2(list, target, middle + 1, end);
};

console.log(binarySearch1(list, 400));
console.log(binarySearch2(list, 498, 0, list.length - 1));
