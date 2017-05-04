class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

export default class LinkedList {
    constructor() {
        this.first = null;
        this.last = null;
    }

    push(data) {
        const node = new Node(data);
        if (this.first === null) {
            this.first = this.last = node;
        } else {
            const temp = this.last;
            this.last = node;
            node.prev = temp;
            temp.next = node;
        }
    }

    pop(data) {
        if (this.last === null) return null;
        const temp = this.last;
        this.last = this.last.prev;
        return temp;
    }

    shift() {
        if (this.first === null) return null;
        const temp = this.first;
        this.first = this.first.next;
        return temp;
    }

    unshift(data) {
        const node = new Node(data);
        if (this.first === null) {
            this.first = this.last = node;
        } else {
            const temp = this.first;
            this.first = node;
            node.next = temp;
            temp.prev = node;
        }
    }
};
