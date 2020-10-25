
type Combinable = number | string
type ConversionDescriptor = 'as-number' | 'as-text'
function combine(
    input1: Combinable,
    input2: Combinable,
    resultConversion: ConversionDescriptor
) {
    let result;

    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number')
        result = +input1 + +input2
    else
        result = input1.toString() + input2.toString()

    return result
}
const combinedAge = combine(30, 20, 'as-number')
const combinedName = combine('Lino', 'Mota', 'as-text')
console.log(combinedAge)
console.log(combinedName)