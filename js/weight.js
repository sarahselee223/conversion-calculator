
const weightTable = {
    'p': {'k': function(num){return num/2.2046},
        'o': function(num){return num*16},
        'g': function(num){return num/0.0022046}
    },
    'k': {'p': function(num){return num*2.2046},
        'o': function(num){return num*35.274},
        'g': function(num){return num*1000}
    },
    'o': {'p': function(num){return num*0.0625},
        'k': function(num){return num/35.274},
        'g': function(num){return num/0.035274}
    },
    'g': {'p':function(num){return num*0.0022046},
        'k': function(num){return num/1000},
        'o': function(num){return num*0.035274}
    },
}


function weightConvert(){
    const num = Number(document.getElementById('wInput').value)
    const a = document.getElementById('wOptions1').value
    const b = document.getElementById('wOptions2').value
    const output = document.getElementById('wOutput')

    if (a === b) {
    output.value = num
    } else {
    output.value = weightTable[a][b](num).toFixed(5)
    } return output
}

