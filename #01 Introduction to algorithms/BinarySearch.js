const binarySearch = (list, item) => {
  var low = 0;
  var high = list.length - 1;

  while (low <= high) {
    const mid = parseInt(low + (high - low) / 2);
    const guess = list[mid];

    if (item === guess) {
      return mid;
    } else if (item > guess) {
      low = mid + 1;
    } else if (item < guess) {
      high = mid - 1;
    }
  }

  return null;
};

const list = Array.from(Array(1000000), (value, index) => index);

binarySearch(list, 99999);
