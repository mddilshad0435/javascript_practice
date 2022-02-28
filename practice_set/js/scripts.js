document.getElementById('show_option').onclick = function () {
    var selectField = document.getElementById('options');
    var selectedOptions = selectField.options.selectedIndex;
    var selectedValue = selectField.options[selectedOptions].innerHTML;
    document.getElementById('selected_option').innerHTML = selectedValue;
}

document.getElementById('show_radio').onclick = function () {
    var radio = document.getElementsByName('gender');
    var radioChecked;
    for (var a = 0; a < radio.length ; a++) {
        if (radio[a].checked) {
            radioChecked = radio[a]
            document.getElementById('selected_radio').innerHTML = radioChecked.value;
        }

    }
}

document.getElementById('show_check').onclick = function () {
    var check = document.getElementsByName('interest');
    document.getElementById('selected_check').innerHTML = "<ul>";
    for (var a = 0 ; a < check.length ; a++ ) {
        if ( check[a].checked ) {
            document.getElementById('selected_check').innerHTML += "<li>" + check[a].value + "</li>";
        }
    }
    document.getElementById('selected_check').innerHTML += "</ul>";

}

document.getElementById('education_level').onchange = function () {
    var selectField = document.getElementById('education_level');
    var selectedOptions = selectField.options.selectedIndex;
    var selectedValue = selectField.options[selectedOptions].innerHTML;
    document.getElementById('selected_level').innerHTML = selectedValue;


    
}

var check = document.getElementsByName('meal');

for (var a = 0 ; a < check.length ; a++){
    check[a].onchange = function () {
        document.getElementById('selected_check1').innerHTML = "<ul>";
        for (var b = 0 ; b < check.length ; b++ ){
            if (check[b].checked){
                document.getElementById('selected_check1').innerHTML += "<li>" + check[b].value+ "</li>";
            }
        }

        document.getElementById('selected_check1').innerHTML += "</ul>";
    }
}