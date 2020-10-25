
class StackItem<T> {
    data: T
    next: StackItem<T>

    constructor(data) {
        this.data = data
        this.next = null
    }
}


class Stack<T> {

    private _root: StackItem<T>
    private _size: number

    constructor() {
        this._size = 0
        this._root = null
    }

    public empty(): boolean {
        return this._root === null && this._size === 0
    }

    public top(): T | null {
        return (this.empty()) ? null : this._root.data
    }

    public push(data: T): void {

        let newEl = new StackItem<T>(data)

        if (this.empty())
            this._root = newEl
        else {
            newEl.next = this._root
            this._root = newEl
        }

        this._size++
    }

    public pop(): T | null {

        if (this.empty())
            return null

        let val = this.top()

        let newRoot = this._root.next
        this._root = newRoot

        this._size--

        return val
    }

    public size() {
        return this._size
    }

    public printStack(): void {
        console.log(`Stack size : ${this._size}\nStack items : `)
        if (this.empty())
            console.log("Empty")
        else {
            for (let el = this._root; el != null; el = el.next)
                console.log(el.data)
        }
    }

}

let pilha = new Stack<number>()

pilha.push(1)
pilha.push(2)
pilha.push(3)

pilha.printStack()


let pilhaSring = new Stack<string>()

pilhaSring.push("O")
pilhaSring.push("N")
pilhaSring.push("I")
pilhaSring.push("L")

pilhaSring.printStack()

