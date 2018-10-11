
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
    const type = "Temperature";

    localStorage.setItem('inputItem', JSON.stringify({ 1: a, 2: num })); 
    const inputItem = JSON.parse(localStorage.getItem('inputItem'));  

    if (a === b) {
        output.value = num

        localStorage.setItem('outputItem', JSON.stringify({ 1: b, 2: output.value })); 
        const outputItem = JSON.parse(localStorage.getItem('outputItem'))
        
        createTable(outputItem[1], outputItem[2], inputItem[1], inputItem[2], type)

    } else {
        output.value = tempTable[a][b](num).toFixed(1)
        
        localStorage.setItem('outputItem', JSON.stringify({ 1: b, 2: output.value })); 
        const outputItem = JSON.parse(localStorage.getItem('outputItem'))
 
        createTable(outputItem[1], outputItem[2], inputItem[1], inputItem[2], type)
        

    } return output

    
} 


