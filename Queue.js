class _Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }

    //add data to the queue
    enqueue(data) {
        const node = new _Node(data);

        if(this.first === null) {
            this.first = node;
        }
        if(this.last) {
            this.last.next = node;
        }
        this.last = node;
    }

    //remove data from queue
    dequeue() {
        if(this.first === null) {
            return;
        }
        const node = this.first;
        this.first = this.first.next;
        if(node === this.last) {
            this.last = null;
        }
        return node.value;
    }
}

const peek = (queue) => {
    if(!queue.first) {
        console.log('Queue is empty');
    }
    console.log(queue.first);
    return queue.first;
}

const isEmpty = (queue) => {
    if(!queue.first) {
        return true;
    }
    return false;
}

const display = (queue) => {
    let curr = queue.first;
    while(curr !== null) {
        console.log(curr.value);
        curr = curr.next;
    }
    return;
}