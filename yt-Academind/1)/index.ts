

function addNums(n1: number, n2: number) {
    return n1 + n2
}

document.getElementById('go').addEventListener('click', () => {

    const input1 = document.getElementById('n1')! as HTMLInputElement
    const input2 = document.getElementById('n2')! as HTMLInputElement

    let sum = addNums(+input1.value, +input2.value)
    console.log(sum)
})