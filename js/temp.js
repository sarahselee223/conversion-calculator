
const tempTable = {'Celsius': {'Fahrenheit': function(num){return num * 9 / 5 + 32},
                       'Kelvin': function(num){return num+273.15}},
                   'Fahrenheit': {'Celsius': function(num){return (num -32) * 5 / 9},
                       'Kelvin': function(num){return ((num-32)/1.8)+273.15}},
                   'Kelvin': {'Celsius': function(num){return num-273.15},
                       'Fahrenheit': function(num){return ( (num-273.15)*1.8)+32}}
                   }


function tempConvert(){
    const num = Number(document.getElementById('input').value)
    const a = document.getElementById('options1').value
    const b = document.getElementById('options2').value
    const output = document.getElementById('output')


    localStorage.setItem('inputItem', JSON.stringify({ 1: a, 2: num })); 
    const inputItem = JSON.parse(localStorage.getItem('inputItem'));  

    if (a === b) {
        output.value = num

        localStorage.setItem('outputItem', JSON.stringify({ 1: b, 2: num })); 
        const outputItem = JSON.parse(localStorage.getItem('outputItem'))
        
        let inputCombined = `${inputItem[1]} - ${inputItem[2]}`
        let outputCombined = `${outputItem[1]} - ${outputItem[2]}`
        const rows = document.querySelector('tbody');    
        var tr = document.createElement("tr");
        var typeCell = document.createElement("td");
        var inputCell = document.createElement("td");
        var outputCell = document.createElement("td");
        var type = document.createTextNode("Temperature");
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
        output.value = tempTable[a][b](num).toFixed(1)
        
        localStorage.setItem('outputItem', JSON.stringify({ 1: b, 2: output.value })); 
        const outputItem = JSON.parse(localStorage.getItem('outputItem'))
        
        let inputCombined = `${inputItem[1]} - ${inputItem[2]}`
        let outputCombined = `${outputItem[1]} - ${outputItem[2]}`
        const rows = document.querySelector('tbody');    
        var tr = document.createElement("tr");
        var typeCell = document.createElement("td");
        var inputCell = document.createElement("td");
        var outputCell = document.createElement("td");
        var type = document.createTextNode("Temperature");
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


function checkTemp(){
    location.href = "https://www.google.com/search?q=current+temperature&oq=current+temperature&aqs=chrome.0.69i59j0l5.1141j0j7&sourceid=chrome&ie=UTF-8";
}
