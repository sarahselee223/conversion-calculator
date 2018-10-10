
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
    const historyBoxFrom = document.getElementById('history-box-from')
    const historyBoxTo = document.getElementById('history-box-to')

    localStorage.setItem('inputItem', JSON.stringify({ 1: a, 2: num })); 
    const inputItem = JSON.parse(localStorage.getItem('inputItem'));
    inputItem;
    let addTextFrom1 = document.createTextNode(inputItem[1]);
    let addTextFrom2 = document.createTextNode(inputItem[2]);
    historyBoxFrom.appendChild(addTextFrom1)
    historyBoxFrom.appendChild(addTextFrom2)

    if (a === b) {
        output.value = num
        localStorage.setItem('outputItem', JSON.stringify({ 1: b, 2: num })); 
        const outputItem = JSON.parse(localStorage.getItem('outputItem'))
        outputItem;
        let addTextTo1 = document.createTextNode(outputItem[1]);
        let addTextTo2 = document.createTextNode(outputItem[2]);
        historyBoxTo.appendChild(addTextTo1)
        historyBoxTo.appendChild(addTextTo2)
    } else {
        output.value = tempTable[a][b](num).toFixed(2)
        localStorage.setItem('outputItem', JSON.stringify({ 1: b, 2: output.value })); 
        const outputItem = JSON.parse(localStorage.getItem('outputItem'))
        outputItem;
        let addTextTo1 = document.createTextNode(outputItem[1]);
        let addTextTo2 = document.createTextNode(outputItem[2]);
        historyBoxTo.appendChild(addTextTo1)
        historyBoxTo.appendChild(addTextTo2)
    } return output
} 


function checkTemp(){
    location.href = "https://www.google.com/search?q=current+temperature&oq=current+temperature&aqs=chrome.0.69i59j0l5.1141j0j7&sourceid=chrome&ie=UTF-8";
}
