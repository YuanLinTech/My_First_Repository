//JavaScript function to allow only checking of one "Hobby" checkbox:

function checkOnlyOne(b) {
    var x = document.getElementsByClassName("hobbies");
    var i;

    for (i = 0; i < x.length; i++) {
        if (x[i].value != b) {
            x[i].checked = false;
        }
    }
}