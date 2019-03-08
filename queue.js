'use strict';

class _Node {
  constructor(value) {
    this.value = value,
    this.next = null,
    this.prev = null
  }
}

class Queue {
  constructor() {
    this.first = null,
    this.last = null
  }
  peek() {
    return this.first.value;
  }
  enqueue(data) {
    const node = new _Node(data);
    //if there is something on the queue already
    //then take the node that is currently at the end of the queue
    //and link it to the new node
    if (this.last) {
      node.next = this.last;
      this.last.prev = node;
    }
    //make the new node the last item on the queue
    this.last = node;
    //if the queue is empty, 
    //make the node the first node on the queue
    if (this.first === null) {
      this.first = node;
    }

  }
  dequeue(data) {
    const node = this.first;
    this.first = node.prev;

    //if this is the last item in the queue
    if (node === this.last) {
        this.last = null;
    }

    return node.value;
  }
}

const display = queue => {
  let node = queue.first;
  while (node !== null) {
      console.log(node.value);
      node = node.prev;
  }
};

const newQ = new Queue;
newQ.enqueue('Luke Skywalker');
newQ.enqueue('Leia Organa');
newQ.enqueue('Han Solo');

module.exports = {
  Queue,
  display
};
