type Node<T> = {
    value: T,
    next?: Node<T>
}

export default class LinkedList<T> {
    public length: number
    private head?: Node<T>
    private tail?: Node<T>
    constructor() {
        this.length = 0
        this.head = undefined
        this.tail = undefined

    }
    prepend(item: T): void {
        const node = { value: item } as Node<T>
        this.length++
        if (!this.head) {
            this.head = node
            return
        }
        node.next = this.head 
        this.head.next = node

    }
}


const ll = new LinkedList()
ll.prepend(1)
ll.prepend(2)
ll.prepend(3)
console.log(ll);

