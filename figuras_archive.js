// Código básico sin optimizar y sin HTML //

// Medidas del cuadrado 

var ladoCuadrado = 10;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCruadrado = ladoCuadrado ** 2;

console.group("Cuadrado");
    console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");
    console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");
    console.log("El área del cuadrado es: " + areaCruadrado + "cm^2");
console.groupEnd();

// Medidas del triángulo

var ladoTriangulo1 = 5;
var ladoTriangulo2 = 5;
var baseTriangulo = 3;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
const alturaTriangulo = 4.5;
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2

console.group("Triángulo");
    console.log("Los lados del triángulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm y " + baseTriangulo + "cm")

    console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

    console.log("La altura del triángulo es: " + alturaTriangulo + "cm");

    console.log("El área del triángulo es: " + areaTriangulo + "cm^2");
console.groupEnd();

// Medidas del círculo

var radioCirculo = 5;

const diametroCirculo = radioCirculo * 2

const perimetroCirculo = diametroCirculo * PI
const areaCirculo = (radioCirculo ** 2) * PI

console.group("Círculo");
    console.log("El radio del círculo es: " + radioCirculo + "cm")

    console.log("El diámetro del círculo es: " + diametroCirculo + "cm")

    console.log("El perímetro del círculo es: " + perimetroCirculo + "cm")

    console.log("PI es: " + PI);

    console.log("El área del círculo es: " + areaCirculo + "cm^2");
console.groupEnd();