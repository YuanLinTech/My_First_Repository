//JavaScript function to allow checking of a group of checkbox with the "name" value of "check" at the same time:

function checkOnlyOne(checkbox) {
    var checkboxes = document.getElementsByName('check');
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false;
    })
}