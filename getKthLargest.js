/**
 * Given an unsorted array, return the kth largest element.
 * It is the kth largest element in sorted order, not the kth
 * distinct element.
 * 
 * TODO:
 * Add documentation
 * Add walkthroughs
 */

const array = [5,3,1,6,4,2];
const kToFind = 4;

/**
 * 
 * @param {*} array 
 * @param {*} i 
 * @param {*} j 
 */
const swap = (array, i, j) => {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

/**
 * 
 * @param {*} array 
 * @param {*} left 
 * @param {*} right 
 * @returns 
 */
const getPartition = (array, left, right) => {
  const pivotElement = array[right];
  let partitionIndex = left;
  for (let j = left; j < right; j++) {
    if (array[j] < pivotElement) {
      swap(array, partitionIndex, j);
      partitionIndex++;
    }
  }
  swap(array, partitionIndex, right);
  return partitionIndex;
};

/**
 * 
 * @param {*} array Array of numbers to sort
 * @param {*} left Number
 * @param {*} right Number
 */
const quickSort = (array, left, right) => {
  if (left < right) {
    const partitionIndex = getPartition(array, left, right);
    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, right);
  }
};

// const quickSelect = (array, left, right, indexToFind) => {
//   if (left < right) {
//     const partitionIndex = getPartition(array, left, right);
//     if (partitionIndex === indexToFind) {
//       return array[partitionIndex];
//     } else if (indexToFind < partitionIndex) {
//       return quickSelect(array, left, partitionIndex - 1, indexToFind);
//     } else {
//       return quickSelect(array, partitionIndex + 1, right, indexToFind);
//     }
//   }
// };

/**
 * 
 * @param {*} array Array of numbers to sort
 * @param {*} k Kth number to find
 * @returns Kth largest number
 */
const getKthLargest = (array, k) => {
  const indexToFind = array.length - k;
  quickSort(array, 0, array.length - 1);
  return array[indexToFind];
};

console.log(getKthLargest(array, kToFind));