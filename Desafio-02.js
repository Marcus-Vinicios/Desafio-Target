console.log('Desafio-02')
const v1 = 21 //entrada de valor;
const i = [0, 1] //array de armazenamento dos valores;

while (i[i.length - 1] < v1) {
    const v2 = i[i.length - 1] + i[i.length - 2] //soma dos valores do array;
    i.push(v2) //inserção de valores no array;
    console.log(v2)
}

//verifica se o numero pertence ou não à sequencia de Fibonacci
if (i[i.length - 1] === v1) {
    console.log(`O número ${v1} pertence à sequência de Fibonacci.`)
} else {
    console.log(`O número ${v1} não pertence à sequência de Fibonacci.`)
}