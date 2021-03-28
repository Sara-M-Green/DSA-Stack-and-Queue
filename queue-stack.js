import Stack from './stacks';

class queueStack extends Stack {
    constructor() {
        super()
        this.first = this.top
        this.last = null
    }

    enqueue(item) {
        if (this.first === null) {
            this.push(item)
            this.last = this.top
        } else {
            const tempStack = new Stack()
            while (this.top) {
                this.push(tempStack.pop())
            }
            let currNode = this.top
            while (currNode.next !== null) {
                currNode = currNode.next
            }
            this.last = currNode
        }
        this.first = this.top
    }

    dequeue() {
        this.pop()
        this.first = this.top
    }
}

modult.exports = queueStack