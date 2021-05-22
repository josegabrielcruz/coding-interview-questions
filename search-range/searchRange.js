/**
 * SEARCH RANGE
 * Given an array of integers sorted in ascending order, return the
 * starting and ending index of a given target value in an array, i.e. [x,y]
 */

/**
 * Get index of the target in a given array
 * @param {*} array Array of integers
 * @param {*} left Number, Left starting index
 * @param {*} right Number, Right starting index
 * @param {*} target Number to find
 * @returns Index of target
 */
const binarySearch = (array, left, right, target) => {
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const foundVal = array[mid];

    if (foundVal === target) {
      return mid;
    } else if (foundVal < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

/**
 * Search for the target's starting and ending index
 * @param {*} nums Array of integers
 * @param {*} target Number to find
 * @returns Array, [startIndex, endIndex]
 */
const searchRange = (nums, target) => {
  if (nums.length === 0) return [-1, -1];

  const firstPos = binarySearch(nums, 0, nums.length - 1, target);

  if (firstPos === -1) return [-1, -1]; // target was not found

  let startPos = firstPos;
  let endPos = firstPos;
  let temp1, temp2;

  while (startPos !== -1) {
    temp1 = startPos;
    startPos = binarySearch(nums, 0, startPos - 1, target);
  }
  startPos = temp1;

  while (endPos !== -1) {
    temp2 = endPos;
    endPos = binarySearch(nums, endPos + 1, nums.length - 1, target);
  }
  endPos = temp2;

  return [startPos, endPos];
};
