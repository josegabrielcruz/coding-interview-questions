/**
 * Reverse a linked list
 * @param {*} head Linked list
 * @returns Reversed linked list
 *
 * linkedList = 1 -> 2 -> 3 -> 4 -> 5 -> null
 * reverseLinkedList(linkedList) {
 *
 * prev = null
 * current = 1
 *
 * ITERATION 1:
 *  next = 1.next (2)
 *  1.next = null
 *  prev = 1
 *  current = 2
 * ITERATION 2:
 *  next = 2.next (3)
 *  2.next = 1
 *  prev = 2
 *  current = 3
 * ITERATION 3:
 *  next = 3.next (4)
 *  3.next = 2
 *  prev = 3
 *  current = 4
 * ITERATION 4:
 *  next = 4.next (5)
 *  4.next = 3
 *  prev = 4
 *  current = 5
 * ITERATION 5
 *  next = 5.next (null)
 *  5.next = 4
 *  prev = 5
 *  current = null
 * ITERATION 6:
 *  current === null
 *  break loop
 *
 * return 5 -> 4 -> 3 -> 2 -> 1 -> null
 * }
 */
let reverseLinkedList = (head) => {
  let prev = null;
  let current = head;

  while (current) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
};

/**
 * Given a linked list and numbers m and n, return it back with only positions
 * m to n reversed.
 * @param {*} head Linked list
 * @param {*} m Start
 * @param {*} n End
 * @returns Reversed linked list m to n
 *
 * reverseBetween(linkedList, 3, 5);
 * 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> null
 * 1 -> 2 -> 5 -> 4 -> 3 -> 6 -> 7 -> null
 */
let reverseBetween = (head, m, n) => {
  let currentPos = 1;
  let currentNode = head;
  let start = head;

  // find start node and currentNode
  while (currentPos < m) {
    start = currentNode;
    currentNode = currentNode.next;
    currentPos++;
  }

  let newList = null;
  let tail = currentNode;

  // begin reversal
  while (currentPos >= m && currentPos <= n) {
    const next = currentNode.next;
    currentNode.next = newList;
    newList = currentNode;
    currentNode = next;
    currentPos++;
  }

  start.next = newList;
  tail.next = currentNode;

  // check if m === 1
  if (m > 1) {
    return head;
  } else {
    return newList;
  }
};
