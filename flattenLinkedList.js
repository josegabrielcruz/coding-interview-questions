/**
 * Given a doubly linked list, list nodes also have a child property that can
 * point to a separate doubly linked list. These child lists can also have one
 * or more child doubly linked lists of their own, and so on.
 * 
 * Return the list as a single level flattened doubly linked list.
 *  
 * @param {*} head Doubly inked list
 * @returns Flattened doubly linked list
 * 
 * WALKTHROUGH:
 * linkedList = 1-2-3-4-5-6
 *                |     |
 *                7-8-9 12-13
 *                  |
 *                  10-11
 *
 * flatten(linkedList) {
 * currentNode = 1
 * 
 * while (currentNode !== null) {
 * 
 * if (currentNode.child === null) {
 * currentNode = currentNode.next
 * }
 * else
 * {
 * >-- Loop ---------------------------------------
 *
 * 1 node does not have children, keep moving to 2 node
 *
 * 1-[2-3]-4-5-6
 *    |      |
 *    [7-8-9]12-13
 *       |
 *       10-11
 *
 * currentNode = 2
 * tail = 9
 * tail.next = 3
 * tail.next.prev = tail
 * currentNode.next = currentNode.child
 * currentNode.next.prev = currentNode
 * currentNode.child = null
 * ------------------------------------------------|
 *
 * >-- Loop ---------------------------------------
 *
 * 7 node does not have children, keep moving t0 8 node
 *
 * 1-2-7-[8-9]-3-4-5-6
 *        |        |
 *       [10-11]   12-13
 *
 * currentNode = 8
 * tail = 11
 * tail.next = 9
 * tail.next.prev = tail
 * currentNode.next = currentNode.child
 * currentNode.next.prev = currentNode
 * currentNode.child = null
 * ------------------------------------------------|
 *
 * >-- Loop ---------------------------------------
 *
 * 10,11,9,3,4 nodes have no children, keep moving to 5 node
 *
 * 1-2-7-8-10-11-9-3-4-[5-6]
 *                      |
 *                     [12-13]
 *
 * currentNode = 5
 * tail = 13
 * tail.next = 6
 * tail.next.prev = tail
 * currentNode.next = currentNode.child
 * currentNode.next.prev = currentNode
 * currentNode.child = null
 * -----------------------------------------------|
 *
 * }
 * }
 * return head
 * }
 */

let flatten = (head) => {
  if (!head) return head;

  let currentNode = head;

  while (currentNode !== null) {
    if (currentNode.child === null) {
      currentNode = currentNode.next;
    } else {
      let tail = currentNode.child;

      while (tail.next !== null) {
        tail = tail.next;
      }

      tail.next = currentNode.next;

      if (tail.next !== null) {
        tail.next.prev = tail;
      }

      currentNode.next = currentNode.child;
      currentNode.next.prev = currentNode;
      currentNode.child = null;
    }
  }

  return head;
};
