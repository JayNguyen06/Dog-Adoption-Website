function submission(){
    var x = confirm("Are you sure you want to submit this form?");
    if (x) {
        alert("Submission successful!");
        return true;
    }
    else {
        alert("Submission cancelled.");
        return false;
    }
}

function search(){
    var input = document.getElementById("searchbar").value;
    if (input.toLowerCase() == "snowy" || input.toLowerCase() == "pomeranian") {
        window.location.href = "../Dogs/snowy.html";
    }
    else if (input.toLowerCase() == "cookie" || input.toLowerCase() == "pembroke welsh corgi") {
        window.location.href = "../Dogs/cookie.html";
    }
    else if (input.toLowerCase() == "rice" || input.toLowerCase() == "samoyed") {
        window.location.href = "../Dogs/rice.html";
    }
    else if (input.toLowerCase() == "mr.whiskers imposter" || input.toLowerCase() == "british shorthair") {
        window.location.href = "../Dogs/mrwhiskersimposter.html";
    }
    else if (input.toLowerCase() == "waffles" || input.toLowerCase() == "golden retriever") {
        window.location.href = "../Dogs/waffles.html";
    }
    else if (input.toLowerCase() == "racoon" || input.toLowerCase() == "husky") {
        window.location.href = "../Dogs/racoon.html";
    }
    else {
        alert("Dog not found. Please try searching for another dog or check the spelling.");
        return false;
    }
    return false;
}