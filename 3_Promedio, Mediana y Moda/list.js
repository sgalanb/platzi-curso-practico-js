var list = []

function addToList(){
    const inputNumberValue = parseFloat(document.getElementById('inputNumber').value);
    let li = document.createElement('li');
    let textNode = document.createTextNode(inputNumberValue);
    li.appendChild(textNode);
    
    if (isNaN(inputNumberValue)) {
        console.log('Tried to add an empty item.');
        alert('¡Escribí un número!');
    } else {
        list.push(inputNumberValue);
        document.getElementById('ul').appendChild(li);
        document.getElementById('inputNumber').value = '';
    }
};

function resetList(){
    document.getElementById("ul").innerHTML = "";
    list = [];
};

function orderList(){
    list.sort(function(a,b){
        return a - b;
    });
    document.getElementById("ul").innerHTML = "";
    list.forEach(function(item){
        let li = document.createElement('li');
        let textNode = document.createTextNode(item);
        li.appendChild(textNode);
        document.getElementById('ul').appendChild(li);
    })
}

