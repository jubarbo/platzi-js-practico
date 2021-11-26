
const pi = Math.PI


let perimetroCuadrado = lado => {
    return lado * 4
} 

let areaCuadrado = lado => {
    return lado * lado
} 

let perimetroTriangulo = (base, lado1, lado2) => {
    return lado1 + lado2 + base
} 
        
let areaTriangulo = (base, altura) => {
    return (base * altura) / 2
} 


let diametroCirculo = (radio) => {
    return radio * 2
} 

let perimetroCirculo = (radio) => {
    const diametro = diametroCirculo(radio)
    return diametro * pi 
} 


let areaCirculo = (radio) => {
    return (radio * radio) * pi
} 
        

console.log(perimetroCuadrado(10))
console.log(areaCuadrado(10))
console.log(perimetroTriangulo(5,4,10))
console.log(areaTriangulo(10,4))
console.log(diametroCirculo(10))
console.log(perimetroCirculo(12))
console.log(areaCirculo(4))