class _Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
    }

    enqueue(data) {
        const node = new _Node(data)

        if (this.first === null) {
            this.first = node
        }

        if (this.last) {
            this.last.next = node
        }

        this.last = node
    }

    dequeue() {
        if (this.first === null) {
            return
        }

        const node = this.first
        this.first = this.first.next

        if (node === this.last) {
            this.last = null
        }

        return node.value
    }


}

class DoubleQueue {
    constructor() {
      this.first = null;
      this.last = null;
    }
  
    enqueue(data) {
      const newNode = new _Node(data, this.last);
      if (this.first === null) this.first = newNode;
      if (this.last) this.last.next = newNode;
      this.last = newNode;
    }
  
    dequeue() {
      if (!this.first) return null;
      const firstNode = this.first;
      if (firstNode.next === null) this.last = null;
      else firstNode.next.prev = null;
      this.first = firstNode.next;
      return firstNode.value;
    }
  }

function peek(queue) {

    if (queue.first === null) {
        return
    }

    return console.log(queue.first.value)
}

function main() {
    const starTrek = new Queue()

    starTrek.enqueue('Kirk')
    starTrek.enqueue('Spock')
    starTrek.enqueue('Uhura')
    starTrek.enqueue('Sulu')
    starTrek.enqueue('Checkov')

    // peek(starTrek)
    // isEmpty(starTrek)
    // display(starTrek)

    starTrek.dequeue()
    starTrek.dequeue()

    display(starTrek)
}

function isEmpty(queue) {
    if (queue.first === null) {
        return console.log('Queue is empty')
    }
    return console.log('Queue is not empty')
}

function display(queue) {
    if (queue.first === null) {
        return console.log('Queue is empty')
    }

    while (queue.first !== null) {
        console.log(queue.first.value)
        queue.first = queue.first.next
    }

    return
}

// console.log(main())

const starTrekDoubleQ = new DoubleQueue()

starTrekDoubleQ.enqueue('Kirk')
starTrekDoubleQ.enqueue('Spock')
starTrekDoubleQ.enqueue('Uhura')
starTrekDoubleQ.enqueue('Sulu')
starTrekDoubleQ.enqueue('Checkov ')

// console.log(peek(starTrekDoubleQ))

function ophidianBank(queue) {
    while (queue.first) {
        let person = queue.dequeue()
        let random = Math.random()
        if (random < 0.25) {
            queue.enqueue(person)
            console.log(
                `${person}'s paperwork isnt right. Back to the end of the line`
            )
        } else {
            console.log(`${person} was served`)
        }
    }

    console.log('Everyone has been served')
}

const bank = new Queue()
bank.enqueue("Person A");
bank.enqueue("Person B");
bank.enqueue("Person C");
bank.enqueue("Person D");
bank.enqueue("Person E");
bank.enqueue("Person F");

console.log(ophidianBank(bank))

module.exports = Queue



