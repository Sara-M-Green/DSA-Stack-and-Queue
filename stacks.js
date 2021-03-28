class _Node {
    constructor(data, next) {
        this.data = data
        this.next = next
    }
}

class Stack {
    constructor() {
        // starts with an empty 1st node and indicates top of stack
        this.top = null
    }

    push(data) {
        if (this.top === null) {
            this.top = new _Node(data, null)
            return this.top
        }
    
        const node = new _Node(data, this.top)
        this.top = node

    }

    pop() {
        const node = this.top
        this.top = node.next
        return node.data
    }

    peek() {
        if (this.top === null) {
            return console.log('No items in this stack')
        }

        const node = this.top
        return console.log(node.data)
    }

    isEmpty() {
        if (this.top ===  null) {
            return console.log('Stack is empty')
        }

        return console.log('Stack is not empty')
    }

    display() {
        if (this.top === null) {
            return console.log('No items to display')
        }

        while (this.top !== null) {
            console.log(this.top.data)
            this.top = this.top.next
        }
    }
}

function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    // Your code goes here

    let stack = new Stack()

    for (let i = 0; i < s.length; i++) {
        stack.push(s[i])
    }

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== stack.top.data) {
            return console.log (`${s} is not a palindrome`)
        }
    }

    return console.log(`${s} is a palidrome`)
}

// True, true, true, false
// console.log(is_palindrome("dad"));
// console.log(is_palindrome("A man, a plan, a canal: Panama"));
// console.log(is_palindrome("1001"));
// console.log(is_palindrome("Tauhida"));

function matchingParenthesis(expression) {
    const parethesis = new Stack()

    for (let i = 0; i < expression.length; i++) {

        if (expression[i] === "(") {
            parethesis.push({
                data: expression[i],
                index: i
            })
        } else if (expression[i] === ")") {
            try {
                parethesis.pop()
            } catch (error) {
                return `You have an extra ) parethesis at ${i + 1} position`
            }
        }
    }

    if (parethesis.top !== null) {
        return `You have an extra ( at ${parethesis.top.data.index + 1} positon`
    }

    return 'All parenthesis match!'
    
}

// console.log(matchingParenthesis("(()))"));
// console.log(matchingParenthesis("()(()()"));
// console.log(matchingParenthesis("(())"));

function sortStack(stack) {
    let tempStack = new Stack()
    let top = stack.top

    if (!top) {
        return null
    }

    const temp = () => {
        if (!tempStack.top) {
            tempStack.push(stack.pop())
            return
        }

        if (top.value > tempStack.top.value) {
            const big = stack.pop()
            const small = tempStack.pop()

            tempStack.push(small)
            tempStack.push(big)
        } else if ( top.value < tempStack.top.value ) {
            const big = tempStack.pop()
            const small = stack.pop()

            tempStack.push(small)
            tempStack.push(big)
        } else {
            return
        }
    }

    while (top.next) {
        temp()
        top = top.next
    }

    temp()
    
}


function main() {
    const starTrek = new Stack
    const emptyStack = new Stack

    starTrek.push('Kirk')
    starTrek.push('Spock')
    starTrek.push('McCoy')
    starTrek.push('Scotty')

    // console.log(starTrek.isEmpty())
    // console.log(emptyStack.isEmpty())

    // console.log(starTrek.display())


    return
}

// console.log(main())

let stack = new Stack();

    stack.push(5);
    stack.push(10);
    stack.push(1);
    stack.push(3);
    stack.push(100);

console.log(sortStack(stack))



module.exports = Stack