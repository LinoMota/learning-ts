// basic example
const last = <T>(arr: T[]): T => {
    return arr[arr.length - 1]
}

const l = last([1, 2, 3])

const l2 = last<string>(["a", "b", "c"])

const makeArray = <X, Y = number>(x: X, y: Y): [X, Y] => {
    return [x, y]
}

const arr = makeArray(20, '20')
const arr2 = makeArray([], '10')
const arr3 = makeArray('2', [])
const arr4 = makeArray<string, null>("a", null)

const makeFullName = <T extends { firstName: string; lastName: string }>(obj: T) => {
    return {
        ...obj,
        fullName: obj.firstName + ' ' + obj.lastName
    }
}

const v4 = makeFullName({ firstName: "Lino", lastName: "Mota", age: 20 })

// interfaces

interface Tab<T> {
    id : string;
    position : number;
    data : T;
}

type NumberTab = Tab<number>
type StringTab = Tab<string>

