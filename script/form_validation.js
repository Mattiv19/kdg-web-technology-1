window.addEventListener('load', init, false);

function init(){
    let fullnameField = document.querySelector("#fullname");
    let emailField = document.querySelector("#email");
    let form = document.querySelector('form');
    fullnameField.addEventListener('change', validateFullName, false);
    emailField.addEventListener('input', validateEmail, false);
    form.addEventListener('submit', submit, false);
}

function validateFullName(fullnameField){
    let content = document.getElementById("fullname").value;
    let feedback = document.getElementById("errorFullName");

    if(content.trim().length !== content.length){
        console.log(content.trim().length);
        console.log(content.length);
        feedback.innerHTML = "⚠️ Your last name should not contain any spaces before or after.";
        fullnameField.classList.remove("validvalue");
        return false;
    } else{
        feedback.innerHTML="";
        fullnameField.classList.add('validvalue');
    }
    return true;
}

function validateEmail(emailField){
    let mail = document.getElementById("email").value;
    let feedback = document.getElementById("errorMail");
    const validationEmailPattern = /^[A-z\-]+\.[A-z\-]+[.{1}[A-z\-]*@(student.)*kdg.be/;
    if(mail.charAt(0) === "." || mail.charAt(mail.length-1) === "."){
        feedback.innerHTML = "⚠️ Your email should not start or end with a dot.";
        return false;
    } else if(mail.includes("..")){
        feedback.innerHTML = "⚠️ Your email should not contain more than one dot.";
        return false;
    } else if(!validationEmailPattern.test(mail)){
        console.log(mail)
        feedback.innerHTML = "⚠️ your email should be of type @student.kdg.be or @kdg.be";
        return false;
    } else{
        feedback.innerHTML = "";
        emailField.classList.add("validvalue");
    }
    return true;
}



function submit(event){
    let feedback = document.getElementById("errorsubmit");
    if(!validateFullName() || !validateEmail()){
        event.preventDefault();
        feedback.innerHTML = "⚠️ Please check your name and/or e-mail.";
        console.log(feedback);
    }
}