
const weightTable = {
    'Pound': {'Kilogam': function(num){return num/2.2046},
        'Ounce': function(num){return num*16},
        'Gram': function(num){return num/0.0022046}
    },
    'Kilogam': {'Pound': function(num){return num*2.2046},
        'Ounce': function(num){return num*35.274},
        'Gram': function(num){return num*1000}
    },
    'Ounce': {'Pound': function(num){return num*0.0625},
        'Kilogam': function(num){return num/35.274},
        'Gram': function(num){return num/0.035274}
    },
    'Gram': {'Pound':function(num){return num*0.0022046},
        'Kilogam': function(num){return num/1000},
        'Ounce': function(num){return num*0.035274}
    },
}


function weightConvert(){
    const num = Number(document.getElementById('wInput').value)
    const a = document.getElementById('wOptions1').value
    const b = document.getElementById('wOptions2').value
    const output = document.getElementById('wOutput')

    localStorage.setItem('inputItem', JSON.stringify({ 1: a, 2: num })); 
    const inputItem = JSON.parse(localStorage.getItem('inputItem'));  


    if (a === b) {
    output.value = num

    localStorage.setItem('outputItem', JSON.stringify({ 1: b, 2: num })); 
    const outputItem = JSON.parse(localStorage.getItem('outputItem'))
    
    let inputCombined = `${inputItem[1]} : ${inputItem[2]}`
    let outputCombined = `${outputItem[1]} : ${outputItem[2]}`
    const rows = document.querySelector('tbody');    
    var tr = document.createElement("tr");
    var typeCell = document.createElement("td");
    var inputCell = document.createElement("td");
    var outputCell = document.createElement("td");
    var type = document.createTextNode("Weight");
    var input1 = document.createTextNode(inputCombined);
    var output1 =document.createTextNode(outputCombined);
    rows.appendChild(tr);
    typeCell.appendChild(type);
    inputCell.appendChild(input1);
    outputCell.appendChild(output1);
    tr.appendChild(typeCell);
    tr.appendChild(inputCell);
    tr.appendChild(outputCell);


    } else {
    output.value = weightTable[a][b](num).toFixed(5)

    localStorage.setItem('outputItem', JSON.stringify({ 1: b, 2: output.value })); 
    const outputItem = JSON.parse(localStorage.getItem('outputItem'))
    
    let inputCombined = `${inputItem[1]} : ${inputItem[2]}`
    let outputCombined = `${outputItem[1]} : ${outputItem[2]}`
    const rows = document.querySelector('tbody');    
    var tr = document.createElement("tr");
    var typeCell = document.createElement("td");
    var inputCell = document.createElement("td");
    var outputCell = document.createElement("td");
    var type = document.createTextNode("Weight");
    var input1 = document.createTextNode(inputCombined);
    var output1 =document.createTextNode(outputCombined);
    rows.appendChild(tr);
    typeCell.appendChild(type);
    inputCell.appendChild(input1);
    outputCell.appendChild(output1);
    tr.appendChild(typeCell);
    tr.appendChild(inputCell);
    tr.appendChild(outputCell);

    } return output
}

