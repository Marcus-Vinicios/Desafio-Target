console.log('Desafio-02')
const v1 = 34
const i = [0, 1]

while (i[i.length - 1] < v1) {
    const v2 = i[i.length - 1] + i[i.length - 2]
    i.push(v2)
    console.log(v2)
}

if (i[i.length - 1] === v1) {
    console.log(`O número ${v1} pertence à sequência de Fibonacci.`)
} else {
    console.log(`O número ${v1} não pertence à sequência de Fibonacci.`)
}