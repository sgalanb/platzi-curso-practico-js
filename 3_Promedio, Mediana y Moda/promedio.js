function isEven (number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

// AVERAGE

function calcArithmeticAvg() {
    
// Sumar los elementos del array mediante el bucle for. No es lo más óptimo.

    /*
    let sumList = 0
    for (let i = 0; i < list.length; i++) {
        sumList = sumList + list[i];
    };
    */

// Sumar los elementos del array mediante el método 'reduce'. El mismo ejecuta la función que se le mande como argumento en cada elemento del array. 

    let sumList = list.reduce(
        function (accValue, newValue) {
            return accValue + newValue;
        }
    );        

    let avg = sumList / list.length;

    alert(avg);
    return avg;
}

// MEDIAN

function calcMedian() {
    let halfList = parseInt(list.length / 2)
    if (isEven(list.length)) {
        let twoHalfsSum = list[halfList] + (list[halfList - 1])
        let median = twoHalfsSum / 2

        alert(median);
        return median;
    } else {
        let median = list[halfList];

        alert(median);
        return median;
    };
};

// MODE

function calcMode() {
    let repList = {};
    list.map(function(item) {
        if (repList[item]) {
            repList[item] = repList[item] + 1;
        } else {
            repList[item] = 1;
        }
    });
    repListArray = Object.entries(repList).sort(function(a,b){
        return a[1] - b[1];
    })
    modeArray = repListArray[repListArray.length - 1];

    alert(modeArray[0]);
    return modeArray[0];
}

// HARMONIC MEAN

function calcHarmMean() {
    let n = list.length;
    let sum = list.reduce(fracSum, 0);
    function fracSum(acc, a) {
        return acc + (1 / a)
    };

    alert(n / sum);
    return n / sum;
}