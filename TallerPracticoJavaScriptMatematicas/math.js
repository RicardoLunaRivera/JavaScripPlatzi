console.group('CUADRADO'); // console group permite crear secciones de vualización
                                //en la consola

let ladoCuadrado = 5;
let perimetroCuadrado = ladoCuadrado*4;

let areaCuadrado = ladoCuadrado*ladoCuadrado;

console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado
});

function calculoCuadrado(lado){
    return{
      perimetro: lado*4,
      area: lado*lado
    };
}

console.groupEnd('CUADRADO');
///
console.group('TRIANGULO');
const ladoTriangulo1= 6;
const ladoTringulo2= 6;
const ladoTrinaguloBase= 4;
const alturaTriangulo = 5.5;

const perimetroTrinagulo= ladoTriangulo1 + ladoTringulo2 + ladoTrinaguloBase;
const areaTriangulo = (ladoTrinaguloBase * alturaTriangulo) / 2;

console.log({
    ladoTriangulo1,
    ladoTringulo2,
    ladoTrinaguloBase,
    alturaTriangulo,
    perimetroTrinagulo,
    areaTriangulo
})

function calculoTriangulo(lado1, lado2, base, altura){
    return{
        perimetro: lado1 + lado2 +base,
        area: (base * altura) / 2
    };
}

console.groupEnd('Triangulo');