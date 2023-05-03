console.log('Desafio-05')
let str = 'JavaScript' //entrada de valor;
let str2 = '' //variavel de armazenamento;
console.log(`String original: ${str}`)

//operação de inversão da posição dos caracteres;
for (i = (str.length) - 1; i >= 0; i--) {
    str2 += str[i] //atribuição dos caracteres invertidos;
}
console.log(`String invertida: ${str2}`)