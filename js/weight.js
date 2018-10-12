
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
    const type = "Weight";
    const history = JSON.parse(localStorage.getItem('history') || "[]") 

    if (a === b) {
        output.value = num
    } else {
        output.value = weightTable[a][b](num).toFixed(1)
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

