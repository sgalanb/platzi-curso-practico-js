// SQUARE FUNCTIONS //
function squarePerimeter(side) {
    return side * 4;
};

function squareArea(side) {
    return side ** 2;
};

// TRIANGLE FUNCTIONS //
function trianglePerimeter(base, side1, side2) {
    return base + side1 + side2;
};

function triangleArea(base, height) {
    return (base * height) / 2;
};

function isoTriangleHeight(base, side1) {
    const halfBase = base / 2
    const squareHeight = (side1 ** 2) - (halfBase ** 2)
    return Math.sqrt(squareHeight)
}

// CIRCLE FUNCTIONS //
const PI = Math.PI;

function circlePerimeter(radius) {
    const diametro = radius * 2;
    return diametro * PI;
}

function circleArea(radius) {
    return (radius * radius) * PI;
};

// SQUARE CALLS //
function calcPerimetroCuadrado() {
    var valueSquare = parseFloat(document.getElementById("inputSquare").value);
    const perimeter = squarePerimeter(valueSquare);
    alert(perimeter + 'cm');
};

function calcAreaCuadrado() {
    var valueSquSide = parseFloat(document.getElementById("inputSquare").value);
    const area = squareArea(valueSquSide);
    alert(area + 'cm^2');
};

// TRIANGLE CALLS //
function calcTrianglePerimeter() {
    var valueTriBase = parseFloat(document.getElementById('inputTriBase').value);
    var valueTriSide1 = parseFloat(document.getElementById('inputTriSide1').value);
    var valueTriSide2 = parseFloat(document.getElementById('inputTriSide2').value);
    const perimeter = trianglePerimeter(valueTriBase, valueTriSide1, valueTriSide2);
    alert(perimeter + 'cm');
};

function calcTriangleArea() {
    var valueTriBase = parseFloat(document.getElementById('inputTriBase').value);
    var valueAltura = parseFloat(document.getElementById('inputTriHeight').value);
    const area = triangleArea(valueTriBase, valueAltura);
    alert(area + 'cm^2');
};

function calcIsoscelesTriangleHeight() {
    var valueIsoTriBase = parseFloat(document.getElementById('inputIsoTriBase').value);
    var valueIsoTriSide1 = parseFloat(document.getElementById('inputIsoTriSide1').value);
    var valueIsoTriSide2 = parseFloat(document.getElementById('inputIsoTriSide2').value);
    if (valueIsoTriSide1 = valueIsoTriSide2) {
        const height = isoTriangleHeight(valueIsoTriBase, valueIsoTriSide1)
        alert(height + 'cm')
    } else {
        alert('Los datos ingresados no corresponden a un triángulo isósceles')
    }
}

// CIRCLE CALLS //
function calcCirPerimeter() {
    var valueCirRadius = parseFloat(document.getElementById('inputCirRadius').value);
    const perimeter = circlePerimeter(valueCirRadius);
    alert(perimeter + 'cm');
};

function calcCirArea() {
    var valueCirRadius = parseFloat(document.getElementById('inputCirRadius').value);
    const area = circleArea(valueCirRadius);
    alert(area + 'cm^2'); 
};