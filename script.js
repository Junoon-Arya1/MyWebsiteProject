
function validation() {
    var form = document.getElementById("form");
    var email = document.getElementById("email").value;
    var text = document.getElementById("showMsg");
    var pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email.match(pattern) && email != null) {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Your email is not valid.";
    }
    else {
        form.classList.add("invalid");
        form.classList.remove("valid");
        text.innerHTML = "Your email is valid.";
    }
}
