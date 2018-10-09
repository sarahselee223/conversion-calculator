
const lengthTable = {
    'f': {'i': function(num){return num*12},
        'ml': function(num){return num*0.00018939},
        'mt': function(num){return num/3.2808},
        'cm': function(num){return num/0.032808},
        'km': function(num){return num/3280.8}
    },
    'i': {'f': function(num){return num*0.083333},
        'ml': function(num){return num*0.000015783},
        'mt': function(num){return num/39.370},
        'cm': function(num){return num/0.39370},
        'km': function(num){return num/39370}
    },
    'ml': {'f': function(num){return num*5280},
        'i': function(num){return num*63360},
        'mt': function(num){return num/0.00062137},
        'cm': function(num){return num/0.0000062137},
        'km': function(num){return num/0.62137}
    },
    'mt': {'f':function(num){return num*3.2808},
        'i': function(num){return num*39.370},
        'ml': function(num){return num*0.00062137},
        'cm': function(num){return num/0.01},
        'km': function(num){return num/1000}
    },
    'cm': {'f':function(num){return num*0.032808},
        'i': function(num){return num*0.39370},
        'ml': function(num){return num*0.0000062137},
        'cm': function(num){return num/100},
        'km': function(num){return num/100000}
    },
    'km': {'f':function(num){return num*3280.8},
        'i': function(num){return num*39370},
        'ml': function(num){return num*0.62137},
        'm': function(num){return num*1000},
        'cm': function(num){return num*100000}
    },
}


function lengthConvert(){
    const num = Number(document.getElementById('lInput').value)
    const a = document.getElementById('lOptions1').value
    const b = document.getElementById('lOptions2').value
    const output = document.getElementById('lOutput')

    if (a === b) {
    output.value = num
    } else {
    output.value = lengthTable[a][b](num).toFixed(5)
    } return output
}

