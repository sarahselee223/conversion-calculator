
const lengthTable = {
    'Foot': {'Inch': function(num){return num*12},
        'Mile': function(num){return num*0.00018939},
        'Meter': function(num){return num/3.2808},
        'Centimeter': function(num){return num/0.032808},
        'Kilometer': function(num){return num/3280.8}
    },
    'Inch': {'Foot': function(num){return num*0.083333},
        'Mile': function(num){return num*0.000015783},
        'Meter': function(num){return num/39.370},
        'Centimeter': function(num){return num/0.39370},
        'Kilometer': function(num){return num/39370}
    },
    'Mile': {'Foot': function(num){return num*5280},
        'Inch': function(num){return num*63360},
        'Meter': function(num){return num/0.00062137},
        'Centimeter': function(num){return num/0.0000062137},
        'Kilometer': function(num){return num/0.62137}
    },
    'Meter': {'Foot':function(num){return num*3.2808},
        'Inch': function(num){return num*39.370},
        'Mile': function(num){return num*0.00062137},
        'Centimeter': function(num){return num/0.01},
        'Kilometer': function(num){return num/1000}
    },
    'Centimeter': {'Foot':function(num){return num*0.032808},
        'Inch': function(num){return num*0.39370},
        'Mile': function(num){return num*0.0000062137},
        'Meter': function(num){return num/100},
        'Kilometer': function(num){return num/100000}
    },
    'Kilometer': {'Foot':function(num){return num*3280.8},
        'Inch': function(num){return num*39370},
        'Mile': function(num){return num*0.62137},
        'Meter': function(num){return num*1000},
        'Centimeter': function(num){return num*100000}
    },
}

function lengthConvert(){
    const num = Number(document.getElementById('lInput').value)
    const a = document.getElementById('lOptions1').value
    const b = document.getElementById('lOptions2').value
    const output = document.getElementById('lOutput')
    const type = "Length";
    localStorage.setItem('inputItem', JSON.stringify({ 1: a, 2: num })); 
    const inputItem = JSON.parse(localStorage.getItem('inputItem'));  

    if (a === b) {
    output.value = num

    localStorage.setItem('outputItem', JSON.stringify({ 1: b, 2: output.value }))
    const outputItem = JSON.parse(localStorage.getItem('outputItem'))

    createTable(outputItem[1], outputItem[2], inputItem[1], inputItem[2], type)

    } else {
    output.value = lengthTable[a][b](num).toFixed(5)

    localStorage.setItem('outputItem', JSON.stringify({ 1: b, 2: output.value }))
    const outputItem = JSON.parse(localStorage.getItem('outputItem'))

    createTable(outputItem[1], outputItem[2], inputItem[1], inputItem[2], type)

    } return output
}

