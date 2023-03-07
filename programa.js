function calcular(base, altura){


    //let para variable de ámbito local (recomendado)
    //var para ámbito global
    //Valor const: que nunca cambia
    const area;
    const perimetro;
    area=base*altura
    perimetro=2*(base+altura)

    //Valores que retorna la función
    return [area,perimetro]
}
let resultado = calcular(5,4);

//imprimir el área
console.log(resultado[0])
console.log(resultado[1])