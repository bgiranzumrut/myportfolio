/*
    Project 4
    Name: Busra Giran Zumrut
    Date:2024/08/07
    Description: Personal Portfolio
*/

/* FORM VALIDATION */

function validate(event) {
    // Hide all error elements on the page
    hideErrors();

    // Determine if the form has errors
    if (formHasErrors()) {
        // Prevents the form submitting
        event.preventDefault();
        formHasErrors();
        return false;
    }

    return true;
}

/*
 * Hides all of the error elements.
 */
function hideErrors() {
    // Get an array of error elements
    let error = document.getElementsByClassName("error");

    // Loop through each element in the error array
    for (let i = 0; i < error.length; i++) {
        // Hide the error element by setting its display style to "none"
        error[i].style.display = "none";
    }
}

function formHasErrors() {
    // Validate Name
    if (document.getElementById("full_name").value.trim() == "") {
        document.getElementById("name_error").style.display = "inline";
        document.getElementById("name").focus();
        return true;
    }

    // Validate email
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let email = document.getElementById("email");

    if (email.value.trim() == "") {
        document.getElementById("email_error").style.display = "inline";
        email.focus();
        return true;
    } else if (!emailRegex.test(email.value.trim())) {
        document.getElementById("emailformat_error").style.display = "inline";
        email.focus();
        return true;
    }

    // Validate phone number
    const phoneRegex = /^(\+\d{1,2}\s?)?(\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}$/;
    let phone = document.getElementById("phone");

    // Check if the phone input is empty
    if (phone.value.trim() === "") {
        document.getElementById("phone_error").style.display = "inline";
        phone.focus();
        return true;
    } else if (!phoneRegex.test(phone.value.trim())) {
        document.getElementById("phoneformat_error").style.display = "inline";
        phone.focus();
        return true;
    }

    // Validate message
    if (document.getElementById("message").value.trim() == "") {
        document.getElementById("message_error").style.display = "block";
        document.getElementById("message").focus();
        return true;
    }

    return false;
}

function load() {
    hideErrors();
    document.getElementById("button").addEventListener("click", validate);
}

document.addEventListener("DOMContentLoaded", load);

// Menu toggle functionality
let menu = document.querySelector("#menu");
let navbar = document.querySelector("#nav-bar");

menu.onclick = () => {
    navbar.classList.toggle("active");
};

