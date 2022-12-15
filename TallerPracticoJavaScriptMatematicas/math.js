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


console.group('CIRCULO');
const radioCirculo = 3;
const diametroCirculo = radioCirculo*2;
const PI = 3.1416;

const perimetroCirculo = diametroCirculo * PI;
const areaCirculo =(radioCirculo**2)*PI;

console.log({
   radioCirculo,
   diametroCirculo,
   radioCirculo,
   perimetroCirculo,
   areaCirculo
});

function calculoCirculo(radio){
    const diametro= radio*2;
    return{
        perimetro: diametro * Math.PI,
        area: Math.pow(radio,2) * Math.PI
    };
}

console.groupEnd('CIRCULO');

console.group('TRIANGULO ISOSELES');
//RETO:
//Sabiendo lo que miden los 3 lados, encontrar la altura
// Debe ser un tríangulo isóceles no equilátero(2 lados iguales y uno diferente)

function calcularAlturaTrianguloIsoseles(lados, base){
    if(lados == base){
        console.warn('La funcion no se puede ejecutar');
    }else{
        return Math.sqrt((lados**2)+((base**2) /4));

    }
}
console.groupEnd('TRIANGULO ISOSELES');


console.group('TRIANGULO ESCALENO')
function calcularAlturaTrianguloScaleno(ladoA, ladoB, ladoC){
    if (ladoA==ladoB || ladoB==ladoC || ladoA==ladoC ){
        console.warn('Este no es un triangulo escaleno de lafos diferentes');
    }else{
        const semiPermimetro = (ladoA+ladoB+ladoC)/2;
        console.log(semiPermimetro);
        return (2/ladoA) * Math.sqrt(semiPermimetro*(semiPermimetro-ladoA)*(semiPermimetro-ladoB)*(semiPermimetro-ladoC))

    }

}
console.groupEnd('TRIANGULO ESCALENO');