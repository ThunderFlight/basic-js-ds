const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
let arr = []

function getArr(l) {

  arr.push(l.value)
  if (!l.next) {
    return arr
  }
  return getArr(l.next)
}

let listNode = null

function createNodeList(array) {
  return array.reverse().reduce((element, current) => {
    if (element) {
      const node = new ListNode(current);
      node.next = element;
      return node;
    }

    return new ListNode(current);
  }, null);
}

function removeKFromList(l, k) {
  arr = []
  const filteredArray = getArr(l).filter((item) => item !== k);
  if (!listNode) {
    listNode = new ListNode(filteredArray[0])
  }
  return createNodeList(filteredArray.slice(0,filteredArray.length), listNode)

}

module.exports = {
  removeKFromList
};
