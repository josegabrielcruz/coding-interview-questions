/**
 * Detect where a cycle begins in a linked list.
 * 
 * @param {*} head Linked list
 * @returns Position where the cycle starts
 */
const findCycle = (head) => {
  let currentNode = head;
  const seenNodes = new Set();

  while (!seenNodes.has(currentNode)) {
    if (currentNode.next === null) {
      return false;
    }
    seenNodes.add(currentNode);
    currentNode = currentNode.next;
  }
  return currentNode;
};

/*
 * WALKTHROUGH:
 * 
 *             4 - 5
 *           /      \
 * 1 - 2 - 3         6
 *           \      /
 *            8 - 7
 * 
 * // run while seenNodes doesn't contain currentNode
 * while (!seenNodes.has(currentNode)) {
 * 
 * >---Loop 1 --------------------------
 * seenNodes.add(1)
 * currentNode = 2
 * -------------------------------------|
 * >---Loop 2 --------------------------
 * seenNodes.add(2)
 * currentNode = 3
 * -------------------------------------|
 * >---Loop 3 --------------------------
 * seenNodes.add(3)
 * currentNode = 4
 * -------------------------------------|
 * >---Loop 5 --------------------------
 * seenNodes.add(5)
 * currentNode = 6
 * -------------------------------------|
 * >---Loop 6 --------------------------
 * seenNodes.add(6)
 * currentNode = 7
 * -------------------------------------|
 * >---Loop 7 --------------------------
 * seenNodes.add(7)
 * currentNode = 8
 * -------------------------------------|
 * >---Loop 8 --------------------------
 * currentNode = 8
 * seenNodes.has(8) = true
 * break out of loop
 * -------------------------------------|
 * }
 * 
 * return 8
 */

/**
 * Detect where a cycle begins in a linked list.
 * (Floyd's tortoise and hare algorithm)
 * 
 * @param {*} head Linked list
 * @returns Position where cycle starts
 */
const tortoiseAndHare = (head) => {
  let hare = head;
  let tortoise = head;

  while (true) {
    hare = hare.next;
    tortoise = tortoise.next;

    if (hare === null || hare.next === null) {
      return false;
    } else {
      hare = hare.next;
    }

    if (tortoise === hare) {
      break;
    }
  }

  let p1 = head;
  let p2 = tortoise;

  while (p1 !== p2) {
    p1 = p1.next;
    p2 = p2.next;
  }

  return p1;
};

/* WALKTHROUGH:
 * 
 *             4 - 5
 *           /      \
 * 1 - 2 - 3         6
 *           \      /
 *            8 - 7
 * 
 * hare = 1
 * tortoise = 1
 * 
 * while (true) {
 * >---Loop 1------------------------
 * hare = 1.next // 2
 * tortise = 1.next // 2
 * 
 * hare and hare.next !== null
 * hare = 2.next // 3
 * 
 * tortoise !== hare
 * ---------------------------------|
 * >---Loop 2------------------------
 * hare = 2.next // 3
 * tortise = 3.next // 4
 * 
 * hare and hare.next !== null
 * hare = 4.next // 5
 * 
 * tortoise !== hare
 * ---------------------------------|
 * >---Loop 3------------------------
 * hare = 3.next // 4
 * tortise = 5.next // 6
 * 
 * hare and hare.next !== null
 * hare = 6.next // 7
 * 
 * tortoise !== hare
 * ---------------------------------|
 * >---Loop 4------------------------
 * hare = 4.next // 5
 * tortise = 7.next // 8
 * 
 * hare and hare.next !== null
 * hare = 8.next // 3
 * 
 * tortoise !== hare
 * ---------------------------------|
 * >---Loop 5------------------------
 * hare = 5.next // 6
 * tortise = 3.next // 4
 * 
 * hare and hare.next !== null
 * hare = 4.next // 5
 * 
 * tortoise !== hare
 * ---------------------------------|
 * >---Loop 6------------------------
 * hare = 6.next // 7
 * tortise = 5.next // 6
 * 
 * hare and hare.next !== null
 * hare = 6.next // 7
 * 
 * tortoise !== hare
 * ---------------------------------|
 * >---Loop 7------------------------
 * hare = 7.next // 8
 * tortise = 7.next // 8
 * 
 * hare and hare.next !== null
 * hare = 8.next // 3
 * 
 * tortoise !== hare
 * ---------------------------------|
 * >---Loop 8------------------------
 * hare = 8.next // 3
 * tortise = 3.next // 4
 * 
 * hare and hare.next !== null
 * hare = 4.next // 5
 * 
 * tortoise !== hare
 * ---------------------------------|
 * >---Loop 9------------------------
 * hare = 3.next // 4
 * tortise = 5.next // 6
 * 
 * hare and hare.next !== null
 * hare = 6.next // 7
 * 
 * tortoise !== hare
 * ---------------------------------|
 * >---Loop 10-----------------------
 * hare = 4.next // 5
 * tortise = 7.next // 8
 * 
 * hare and hare.next !== null
 * hare = 8.next // 3
 * 
 * tortoise !== hare
 * ---------------------------------|
 * >---Loop 11-----------------------
 * hare = 5.next // 6
 * tortise = 3.next // 4
 * 
 * hare and hare.next !== null
 * hare = 4.next // 5
 * 
 * tortoise !== hare
 * ---------------------------------|
 * >---Loop 12-----------------------
 * hare = 6.next // 7
 * tortise = 5.next // 6
 * 
 * hare and hare.next !== null
 * hare = 6.next // 7
 * 
 * tortoise !== hare
 * ---------------------------------|
 * >---Loop 13-----------------------
 * hare = 7.next // 8
 * tortise = 7.next // 8
 * 
 * hare and hare.next !== null
 * hare = 8.next // 3
 * 
 * tortoise !== hare
 * ---------------------------------|
 * >---Loop 14-----------------------
 * hare = 8.next // 3
 * tortise = 3.next // 4
 * 
 * hare and hare.next !== null
 * hare = 4.next // 5
 * 
 * tortoise !== hare
 * ---------------------------------|
 * >---Loop 15-----------------------
 * hare = 3.next // 4
 * tortise = 5.next // 6
 * 
 * hare and hare.next !== null
 * hare = 6.next // 7
 * 
 * tortoise !== hare
 * ---------------------------------|
 * >---Loop 16-----------------------
 * hare = 4.next // 5
 * tortise = 7.next // 8
 * 
 * hare and hare.next !== null
 * hare = 8.next // 3
 * 
 * tortoise !== hare
 * ---------------------------------|
 * >---Loop 17-----------------------
 * hare = 5.next // 6
 * tortise = 3.next // 4
 * 
 * hare and hare.next !== null
 * hare = 4.next // 5
 * 
 * tortoise !== hare
 * ---------------------------------|
 * >---Loop 18-----------------------
 * hare = 6.next // 7
 * tortise = 5.next // 6
 * 
 * hare and hare.next !== null
 * hare = 6.next // 7
 * 
 * tortoise === hare
 * break loop
 * ---------------------------------|
 * }
 * 
 * p1 = 1
 * p2 = 7
 * 
 * while (p1 !== p2) {
 * >---Loop 1------------------------
 * p1 = 1.next // 2
 * p2 = 7.next // 8
 * ---------------------------------|
 * >---Loop 2------------------------
 * p1 = 2.next // 3
 * p2 = 8.next // 3
 * ---------------------------------|
 * >---Loop 3------------------------
 * p1 === p2 // 3 = 3
 * break loop
 * ---------------------------------|
 * }
 * 
 * return p1 // 3
 */