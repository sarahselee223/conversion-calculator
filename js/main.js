
const savedData = JSON.parse(localStorage.getItem('inputItem'));  


function openTab(evt, type) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }
    document.getElementById(type).style.display = "block";
    evt.currentTarget.className += " active";
}

function clearRecord(){ 
    const trs = document.querySelector('tr');
    if(typeof trs !== undefined){
        trs.parentNode.removeChild(trs);
    }
}


// function createTable (val1, val2, val3, val4, type1) {
function createTable(history){
    const rows = document.querySelector('tbody');    
    rows.innerHTML = ''

    for(const row of history){
        let inputCombined = `${row.inputType} : ${row.inputValue}`
        let outputCombined = `${row.outputType} : ${row.outputValue}`
        const tr = document.createElement("tr");
        const typeCell = document.createElement("td");
        const inputCell = document.createElement("td");
        const outputCell = document.createElement("td");
        const type = document.createTextNode(row.type);
        const input1 = document.createTextNode(inputCombined);
        const output1 =document.createTextNode(outputCombined);
        rows.appendChild(tr);
        typeCell.appendChild(type);
        inputCell.appendChild(input1);
        outputCell.appendChild(output1);
        tr.appendChild(typeCell);
        tr.appendChild(inputCell);
        tr.appendChild(outputCell);
        }
}   
