const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');
const {replaceGetter} = require("sinon");

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor() {
    this.rooted = null
  }

  getLastLeafOfTree(data, leaf) {
    if (data <= leaf.data) {
      if (leaf.left) {
        return this.getLastLeafOfTree(data, leaf.left)
      }
      return leaf.left = new Node(data)
    }
    if (leaf.right) {
      return this.getLastLeafOfTree(data, leaf.right)
    }
    return leaf.right = new Node(data)
  }

  findLeaf(data, leaf = this.rooted) {
    if (!leaf) {
      return null
    }
    if (leaf.data === data) {
      return leaf
    }
    if (data <= leaf.data || !leaf.data) {
      return this.findLeaf(data, leaf.left)
    }
    return this.findLeaf(data, leaf.right)
  }

  removeLeaf(data, leaf = this.rooted) {
    if (!leaf) {
      return null
    }
    if (leaf.data === data) {
      return leaf = null
    }
    if (data <= leaf.data) {
      return this.removeLeaf(data, leaf.left)
    }
    return this.removeLeaf(data, leaf.right)
  }

  minLeaf(leaf) {
  }

  root() {
    return this.rooted
  }

  add(data) {
    if (!this.rooted) {
      this.rooted = new Node(data)
      return
    }
    const parentNode = this.rooted
    this.getLastLeafOfTree(data, parentNode)
  }

  find(data) {
    const parentNode = this.rooted
    return this.findLeaf(data, parentNode)
  }

  has(data) {
    return this.findLeaf(data)?.data === data
  }

  remove(data) {
    return this.removeLeaf(data)
  }

  min() {
    return this.minLeaf(this.rooted)
  }

  max() {
    // let max = -Infinity
    // for (let i = 0; i < this.data.length; i += 1) {
    //   if (max < this.data[i]) {
    //     max = this.data[i]
    //   }
    // }
    // return max
  }
}

module.exports = {
  BinarySearchTree
};