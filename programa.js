function calcular(base, altura){
    let area;
    let perimetro;
    area=base*altura
    perimetro=2*(base+altura)

    //Valores que retorna la función
    return [area,perimetro]
}
let resultado = calcular(5,4);

//imprimir el área
console.log(resultado[0])
console.log(resultado[1])