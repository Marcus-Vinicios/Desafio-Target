let distancia = 100
let veloCarro = 110
let tempoCarro = (distancia / 2) / veloCarro
console.log(`Tempo de viagem do carro ~= ${(tempoCarro * 60).toFixed()} minutos`)

let qtdPedagio = 2
let veloCaminhao = 80
let tempoCaminhao = (distancia / 2) / (veloCaminhao - (qtdPedagio / 60))
console.log(`Tempo de viagem do carro ~= ${(tempoCaminhao * 60).toFixed()} minutos`)

if (tempoCarro < tempoCaminhao) {
    console.log("O carro estará mais proximo de Ribeirão Preto quando os dois se cruzarem, pois o mesmo já terá percorrido uma maior distância.")
}else {
    console.log("O caminhão estará mais proximo de Ribeirão Preto quando os dois se cruzarem, pois o mesmo já terá percorrido uma maior distância.")
}