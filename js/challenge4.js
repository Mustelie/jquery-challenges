ch4form.onsubmit = function() {
    var validInput = true;
    var name = $("#fullname")
    var address = $("#streetaddr")
    console.log("Here");
    console.log(name);
    console.log(address)
    if (name.value.length == 0){
        $("#nameerrormsg").attr('display', "block"); 
        validInput = false;
    }
    else {
        $("#nameerrormsg").attr('display', "none");
    }

    if (address.value.length == 0){
        $("#addrerrormsg").attr('display', "block"); 
        validInput = false;
    }
    else {
        $("#addrerrormsg").attr('display', "none"); 
    }

    return validInput;
}