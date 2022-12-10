window.addEventListener('load', init, false);

function init(){
    let fullnameField = document.querySelector("#fullname");
    let emailField = document.querySelector("#email");
    let form = document.querySelector('form');
    fullnameField.addEventListener('change', validateFullName, false);
    emailField.addEventListener('input', validateEmail, false);
    form.addEventListener('submit', submit, false);
}

function validateFullName(){
    let content = document.getElementById("fullname").value;
    let feedback = document.getElementById("errorFullName");
    const validcolor = document.getElementById('fullname');

    if(content.trim().length !== content.length){
        console.log(content.trim().length);
        console.log(content.length);
        feedback.innerHTML = "⚠️ Your last name should not contain any spaces before or after.";
        validcolor.classList.remove("validvalue");
        return false;
    } else{
        feedback.innerHTML="";
        if(content !== ""){
        validcolor.classList.add("validvalue");
        } else{
            validcolor.classList.remove("validvalue");
        }
    }
    return true;
}

function validateEmail(){
    let mail = document.getElementById("email").value;
    let feedback = document.getElementById("errorMail");
    const validationEmailPattern = /^[A-z\-]+\.[A-z\-]+[.{1}[A-z\-]*@(student.)*kdg.be/;
    const validcolor = document.getElementById('email');

    if(mail.charAt(0) === "." || mail.charAt(mail.length-1) === "."){
        feedback.innerHTML = "⚠️ Your email should not start or end with a dot.";
        validcolor.classList.remove("validvalue");
        return false;
    } else if(mail.includes("..")){
        feedback.innerHTML = "⚠️ Your email should not contain more than one dot.";
        validcolor.classList.remove("validvalue");
        return false;
    } else if(!validationEmailPattern.test(mail)){
        console.log(mail)
        feedback.innerHTML = "⚠️ your email should be of type @student.kdg.be or @kdg.be";
        validcolor.classList.remove("validvalue");
        return false;
    } else{
        feedback.innerHTML = "";
        if(mail !== "") {
            validcolor.classList.add("validvalue");
        } else{
            validcolor.classList.remove("validvalue");
        }
    }
    return true;
}



function submit(event){
    let feedback = document.getElementById("submit");
    if(!validateFullName() || !validateEmail()){
        event.preventDefault();
        feedback.innerHTML = "⚠️ Please check your name and/or e-mail.";
        console.log(feedback);
    }
}

