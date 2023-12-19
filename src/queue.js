const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.list = null
  }
  enqueNext(value, element = this.list) {
    if (!element.next) {
      element.next = new ListNode(value)
      return;
    }
    return this.enqueNext(value, element.next)
  }

  getUnderlyingList() {
    return this.list
  }

  enqueue(value) {
    if (!this.list) {
      return this.list = new ListNode(value)
    }
    console.log(value)
    return this.enqueNext(value)
  }

  dequeue() {
    const copy = this.list.value
    this.list = this.list.next
    return copy
  }
}

module.exports = {
  Queue
};
