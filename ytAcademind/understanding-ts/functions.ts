function add(n1: number, n2: number): number {
    return n1 + n2
}

function printResult(num: number): void {
    console.log(`result is : ${num}`)
}

function addAndHandle(n1: number, n2: number, cb: (r: number) => void): void {
    let result: number = n1 + n2
    cb(result)
}

printResult(add(2, 4))

let addFunc: (a: number, b: number) => number


addFunc = add

printResult(addFunc(1, 2))

let f = (v: number): void => {
    console.log(v)
}
addAndHandle(10, 20, f)