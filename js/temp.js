
const tempTable = {'c': {'f': function(num){return num * 9 / 5 + 32},
                       'k': function(num){return num+273.15}},
                   'f': {'c': function(num){return (num -32) * 5 / 9},
                       'k': function(num){return ((num-32)/1.8)+273.15}},
                   'k': {'c': function(num){return num-273.15},
                       'f': function(num){return ( (num-273.15)*1.8)+32}}
                   }


function tempConvert(){
    const num = Number(document.getElementById('input').value)
    const a = document.getElementById('options1').value
    const b = document.getElementById('options2').value
    const output = document.getElementById('output')

    if (a === b) {
        output.value = num
    } else {
    output.value = tempTable[a][b](num).toFixed(4)
    } return output
} 

function checkTemp(){
    location.href = "https://www.google.com/search?q=current+temperature&oq=current+temperature&aqs=chrome.0.69i59j0l5.1141j0j7&sourceid=chrome&ie=UTF-8";
}
