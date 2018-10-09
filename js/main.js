const button = document.querySelectorAll('.btn')

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

function convert(){
    const num = Number(document.getElementById('input').value)
    const option1 = document.getElementById('options1').value
    const option2 = document.getElementById('options2').value
    const output = document.getElementById('output')
    if (option1 === option2) {
        output.value = num
    } else if (option1 === 'c' && option2 === 'f') {
        output.value = Math.round(num * 9 / 5 + 32);
    } else if (option1 === 'f' && option2 === 'c') {
        output.value = Math.round((num -32) * 5 / 9);
    }
}
