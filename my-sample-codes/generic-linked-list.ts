class ListItem<T>{
    data: T;
    next: ListItem<T>

    constructor(data: T) {
        this.data = data
        this.next = null
    }

}

class LinkedList<T>{

    _root: ListItem<T>;
    _size: number;

    constructor() {
        this._size = 0
        this._root = null
    }

    public empty(): boolean {
        return this._root === null && this._size === 0
    }

    public push(data: T): void {
        let newEl = new ListItem<T>(data)

        if (this.empty())
            this._root = newEl
        else {
            let lastEl: ListItem<T>

            for (lastEl = this._root; lastEl.next != null; lastEl = lastEl.next);

            lastEl.next = newEl
        }
        this._size++
    }

    public pop(): T | null {
        let rtn

        if (this.empty())
            rtn = null
        else {
            if (this._root.next === null) {
                rtn = this._root.data
                this._root = null
            } else {
                let penult: ListItem<T>

                for (penult = this._root; penult.next.next != null; penult = penult.next);
                rtn = penult.next.data

                penult.next = penult.next.next

            }
            this._size--
        }

        return rtn
    }

    public print(): void {
        console.log(`List size : ${this._size}\nList items : `)
        if (this.empty()) {
            console.log("Empty")
        } else {
            let aux: ListItem<T>
            for (aux = this._root; aux !== null; aux = aux.next)
                console.log(aux.data)
        }
    }
}


// let lista = new LinkedList<number>()

// lista.push(1)
// lista.push(2)
// lista.push(3)
// lista.print()


let listaSring = new LinkedList<string>()


listaSring.push("L")
listaSring.push("I")
listaSring.push("I")
listaSring.pop()
listaSring.push("N")
listaSring.push("O")

listaSring.print()

