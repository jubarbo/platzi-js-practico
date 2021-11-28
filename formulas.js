
const calcPromedio = lista => {

    const sumaLista = lista.reduce(
        function(acumulado = 0, nuevo) {
            return acumulado = acumulado + nuevo
        }
    )

    const promedio = sumaLista / lista.length

    return promedio
}


const esPar = numero => {
    if(numero % 2 === 0) {
        return true
    } else {
        return false
    } 
}


const calcMediana = lista => {

    lista.sort(function(a, b){return a - b})
    const mitad = parseInt(lista.length / 2) 

    if(esPar(lista.length)) {

        const el1 = lista[mitad - 1]; 
        const el2 = lista[mitad];
        
        const mediana = calcPromedio([el1, el2])
        return mediana
    } else {

        const mediana = lista[mitad];       

        return mediana;
    } 

}


const calcModa = lista => {

    //creo lista para conteo
    const listaCount = {};

    //map para contar cada elemento
    lista.map(
        function(elem) {
            if(listaCount[elem]) {
                listaCount[elem] += 1
            } else {
                listaCount[elem] = 1
            }
        }
    )

    //sort para ordenar la cantidad 
    const ordenados = Object.entries(listaCount).sort(
        function (el1, el2) {
            return el1[1] - el2[1] 
        }
    )

    const moda = ordenados[ordenados.length - 1]


    return moda
  
}

const valores = []
const valor = document.getElementById("valor")
const respuesta = document.getElementById("respuesta")
const respuestaArray = document.getElementById("respuestaArray")
const respuestaPromedio = document.getElementById("respuestaPromedio")
const respuestaModa = document.getElementById("respuestaModa")
const respuestaMediana = document.getElementById("respuestaMediana")

    
const addToArray = () => {

    
    if(!valor.value) {
        alert("Debe ingresar un valor")
    }

    if(valor.value) {
        respuesta.innerHTML = "Se ha ingresado: " + valor.value

        valores.push(parseInt(valor.value))

        respuestaArray.innerHTML = "El array es: " + valores

        const promedio = calcPromedio(valores)    

        respuestaPromedio.innerHTML = "El promedio es: " + promedio

        const moda = calcModa(valores)
        
        respuestaModa.innerHTML = `La moda es: ${moda[0]} que se repite ${moda[1]} veces.` 
        
        const mediana = calcMediana(valores)

        respuestaMediana.innerHTML = "La mediana es: " + mediana
        // console.log(promedio)
    }


    // return valores

}