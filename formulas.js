
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