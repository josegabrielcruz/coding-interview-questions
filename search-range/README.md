# Search Range

## Prerequisites:

* Big O Notation
* Binary search (how/why it works)

## Question:

#### **Given an array of integers sorted in ascending order, return the starting and ending index of a given target value in an array, i.e. [x,y].**

#### **Your solution should run in O(log n) time.**

## Requirements

The first thing we'll do is identify the requirements. You'll notice that the question is asking for the starting and ending index of a given target, not _just_ the index where its initially found. So, we'll need to return an array with two values: `[startingIndex, endingIndex]`

The question also mentions a time complexity requirement of O(log n). To achieve that kind of time complexity we'll want to leverage a binary search function.

**What we need to return:** `[startingIndex, endingIndex]` or `[-1,-1]` if target is not found.

**Time complexity:** O(log n)

## Walkthrough

Let's go ahead and get the time complexity requirement out of the way. Since the time complexity requirement is O(log n) we'll want to leverage a binary search algorithm.

If you're unfamiliar with binary search algorithms here's a good video breaking down how binary search works and why its time complexity is O(log n): [Binary Search algorithm in JavaScript](https://www.youtube.com/watch?v=7lGiPItOVCM)

### Helper function(s)

We'll be using this binary search function as a helper function:

```javascript
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
```
We'll be leveraging this function to get the index of the target we give it. (One minor difference between this binary search function and a standalone binary search function is that ours will be expecting a left and right value.)

### Main function

Here is our main function:

```javascript
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
```
First, we'll check if the array that we're given is empty. If it is we'll just need to return [-1,-1]: 

```javascript
if (nums.length === 0) return [-1, -1];
```

Next, we'll create a variable called `firstPos`. This variable is our starting point. We run an initial search on the `target` value given and set `firstPos` to the result of that search:

```javascript
const firstPos = binarySearch(nums, 0, nums.length - 1, target);
```

Now we'll do a quick check to see if the target was found or not. If its not found we'll return [-1,-1]:

```javascript
if (firstPos === -1) return [-1, -1];
```

Next, we'll initialize some variables:

```javascript
let startPos = firstPos;
let endPos = firstPos;
let temp1, temp2;
```

Here `startPos` and `endPos` will act as our left and right pointers for the binary search function. The `temp1` and `temp2` variables will act as placeholders once we start searching.

Now we're ready to begin traversing the `nums` array with our while loops:

```javascript
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
```

So, why do we have two while loops here? Well, the requirements tell us that we need to find the starting index and ending index of the target. If we are given an array that looks like this: `[1,2,3,4,5,5,5,6,7]`, and our target is 5, our `firstPos` variable will be 4, which means that our `startPos` and `endPos` variables will be 4 as well. At this point we don't know if there are more targets to the left or right of our `firstPos`.

This is the problem that the while loops will solve. Each loop iteration will call `binarySearch` until its scanned through all of the numbers in the array. The first loop will scan to the left looking for targets, the second loop will scan to the right looking for targets.

Let's walk through the first while loop:

```javascript
while (startPos !== -1) {
   temp1 = startPos;
   startPos = binarySearch(nums, 0, startPos - 1, target);
}
```

We'll only run the loop while `startPos` is not equal to -1. When `startPos` is equal to -1 it means that the `binarySearch` function has completed its search. 

The first iteration of the loop will set `temp1` to `startPos` (which is currently set to `firstPos`) because we'll need to remember that value once we're done looping. 

Next we set `startPos` to the return value of `binarySearch(nums, 0, startPos - 1, target)`. Notice that on each iteration we're setting the third argument to `startPos - 1`. So if we look at this array again: `[1,2,3,4,5,5,5,6,7]` we'll be starting at index 4. This means that this while loop will only be scanning these numbers: `[1,2,3,4,5` because we're moving `startPos` to the left by sending `startPos - 1` as the `right` argument for `binarySearch`.

As soon as `binarySearch` is done searching it will return a `-1` and the exit condition will have been met and we break out of the loop.

Now we'll reset `startPos` to `temp1`:

```javascript
startPos = temp1;
```

`temp1` is going to equal the last position where the `target` was found before we exited the loop. In this case, `temp1` is equal to 4. This is because, given this array: `[1,2,3,4,5,5,5,6,7]`, our `startPoint` happened to land on the first instance of the `target` which means that there wasn't anymore targets to the left of it so our while loop exited immediately after that first iteration.

So, we now have the required starting index of the given target: 4

Let's walk through the second while loop:

```javascript
while (endPos !== -1) {
  temp2 = endPos;
  endPos = binarySearch(nums, endPos + 1, nums.length - 1, target);
}
```

The process here is basically the same as the first loop. The only differences are the `left` and the `right` arguments we'll be sending to `binarySearch`. Here, `left` will be `endPos + 1` and right will be `nums.length - 1`. Given that same array that we've been using `endPos` is currently 4. `right` will just be the index of the last element in the array. All that this means is that we'll be scanning these numbers: `5,5,5,6,7]` and in each iteration we'll add 1 to `endPos` to keep scanning.

One more difference here is that now there are multiple targets that we'll encounter in the search. There will be two iterations where `binarySearch` finds the `target` before exiting.

Once we exit, we'll reset `endPos` to the last value of `temp2` before the loop exited, which will be 6:

```javascript
endPos = temp2;
```

Now we have the required ending index and we'll return an array containing those values:

```javascript
return [startPos, endPos]; //[4,6]
```



//