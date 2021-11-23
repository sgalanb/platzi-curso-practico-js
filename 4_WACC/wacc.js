let historyList = []

function calcWACC() {
    // retrieve inputs
    let name = document.getElementById('name').value;
    let valueWD = parseFloat(document.getElementById('inputWD').value) / 100;
    let valueWE = parseFloat(document.getElementById('inputWE').value) / 100;
    let valueKD = parseFloat(document.getElementById('inputKD').value) / 100;
    let valueTax = parseFloat(document.getElementById('inputTax').value) / 100;
    let valueRF = parseFloat(document.getElementById('inputRF').value) / 100;
    let valueRM = parseFloat(document.getElementById('inputRM').value) / 100;
    let valueBeta = parseFloat(document.getElementById('inputBeta').value);

    // ke formula
    let ke = valueRF + valueBeta * (valueRM - valueRF);
    // wacc formula
    let waccValue = valueWD * valueKD * (1 - valueTax) + valueWE * ke;
    // transform wacc value to percentage with 2 decimals
    let waccPerValue = parseFloat(waccValue * 100).toFixed(2);

    historyList.push({name:name ,wacc:waccPerValue})

    document.getElementById('table').innerHTML += 
    `<p class="name">${historyList[historyList.length - 1].name}</p>
    <p class="wacc">${historyList[historyList.length - 1].wacc}%</p><br>`;
}
