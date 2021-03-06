class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    push(data) {
        if(this.top === null) {
            this.top = new _Node(data, null);
            return this.top;
        }
        const node = new _Node(data, this.top);
        this.top = node;
    }

    pop() {
        const node = this.top;
        this.top = node.next;
        return node.data;
    }
}

const peek = (stack) => {
    if(!stack.top) {
        console.log('Empty');
        return;
    }
    console.log(stack.top);
    return stack.top;
}

const isEmpty = (stack) => {
    if(!stack.top) {
        return true;
    }
    return false;
}

const display = (stack) => {
    if(!stack.top) {
        console.log("Stack is empty");
        return ;
    }
    let curr = stack.top;
    while(curr !== null) {
        console.log(curr.data);
        curr = curr.next;
    }
    return;
}

const starTrek = new Stack();

starTrek.push('Kirk');
starTrek.push('Spock');
starTrek.push('McCoy');
starTrek.push('Scotty');

console.log(starTrek);