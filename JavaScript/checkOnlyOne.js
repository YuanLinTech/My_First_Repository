//JavaScript function to allow checking of one "Hobby" checkbox at the same time:

function checkOnlyOne(b) {
    var x = document.getElementsByClassName("hobbies");
    var i;

    for (i = 0; i < x.length; i++) {
        if (x[i].value != b) {
            x[i].checked = false;
        }
    }
}