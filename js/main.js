
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

function createTable(history){
    const rows = document.querySelector('tbody');    
    rows.innerHTML = ''

    for(const row of history){
        let inputCombined = `${row.inputType} : ${row.inputValue}`
        let outputCombined = `${row.outputType} : ${row.outputValue}`
        const rowz = rows.insertRow(0);
        const cell1 = rowz.insertCell(0);
        const cell2 = rowz.insertCell(1);
        const cell3 = rowz.insertCell(2);
        cell1.innerHTML = row.type;
        cell2.innerHTML = inputCombined;
        cell3.innerHTML = outputCombined;
        }
}   

function clearRecord(){ 
    const old_tbody = document.querySelector('tbody');
    var new_tbody = document.createElement('tbody');
    old_tbody.parentNode.replaceChild(new_tbody, old_tbody)
    localStorage.clear();
}