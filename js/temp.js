
const tempTable = {'Celsius': {'Fahrenheit': function(num){return num * 9 / 5 + 32},
                       'Kelvin': function(num){return num+273.15}},
                   'Fahrenheit': {'Celsius': function(num){return (num -32) * 5 / 9},
                       'Kelvin': function(num){return ((num-32)/1.8)+273.15}},
                   'Kelvin': {'Celsius': function(num){return num-273.15},
                       'Fahrenheit': function(num){return ( (num-273.15)*1.8)+32}}
                   }


function tempConvert(){
    const num = Number(document.getElementById('input').value)
    const inputRaw = document.getElementById('input').value
    const a = document.getElementById('options1').value
    const b = document.getElementById('options2').value
    const output = document.getElementById('output')
    const type = "Temperature";
    const history = JSON.parse(localStorage.getItem('history') || "[]") 

    if (inputRaw === ""){
        alert("You must put input")
        return false;
    }
    if (a === b) {
        output.value = num
    } 
    else {
        output.value = tempTable[a][b](num).toFixed(1)
    }  

    history.push({
        outputType : b,
        outputValue : output.value,
        inputType : a,
        inputValue : num,
        type
    })
    localStorage.setItem('history', JSON.stringify(history)); 
    
    createTable()
} 


