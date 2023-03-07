function calcular(base, altura){


    //let para variable de ámbito local (recomendado)
    //var para ámbito global
    //Valor const: que nunca cambia
    const area=base*altura;
    const perimetro=2*(base+altura);

    //Valores que retorna la función
    return [area,perimetro]
}
let resultado = calcular(5,4);

//imprimir el área
console.log(resultado[0])
console.log(resultado[1])

function calcular_hipotenusa(cat_a, cat_b){

    const hip = Math.sqrt(cat_a**2+cat_b**2);
    return hip;
}

let resultado_2 = calcular_hipotenusa(2,4);

//imprimir el área
console.log(resultado_2)