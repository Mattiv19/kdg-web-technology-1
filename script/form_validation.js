window.addEventListener('load', init, false);

function init(){
    let form = document.querySelector('form');
    form.addEventListener('submit', submit, false);
    let input = document.querySelector('input')
    input.addEventListener('change', validateLastName, false);
    input.addEventListener('input', validateEmail, false);
    input.addEventListener('click', printFrontBack);
}


/* met 2 werkt niet. aparte functies is redundant. hoe in 1 functie krijgen */
function validateLastName(){
    let contentln = document.getElementById("lastname").value;
    let contentfn = document.getElementById("firstname").value;
    let feedbackln = document.getElementById("errorLastName");
    let feedbackfn = document.getElementById("errorFirstName");
    const validationWhitespaces = /\s+/;  //^[a-zA-Z]$

    if(validationWhitespaces.test(contentfn)){
        feedbackfn.innerHTML = "⚠️ Your last name should not contain any spaces before or after.";
        console.log(contentfn);
        return false;
    }  else if(validationWhitespaces.test(contentln)){
        feedbackln.innerHTML = "⚠️ Your last name should not contain any spaces before or after.";
        console.log(contentln);
        return false;
    } else{
        feedbackfn.innerHTML = "";
        feedbackln.innerHTML = "";
    }
    return true;


}


/* recheck pattern + melding op foute moment */
function validateEmail(){
    let contentEmail = document.getElementById("email").value;
    console.log(contentEmail);
    let feedbackEmail = document.getElementById("errorMail");
    const validationEmail = /^\w+([.]-]?\w+)*@(\w{7}\.)*(\w{3})*(\.\w{2})+$/;

    if(validationEmail.test(contentEmail)){

        return true;
    } else{
       feedbackEmail.innerHTML= "⚠️ Your email should be of the following type: @student.kdg.be or @kdg.be";
    }
    return false;
}


/* does not work */
function printFrontBack(){
    let checkedFront = document.querySelector('#front:checked');
    console.log(checkedFront);
    let checkedBack = document.querySelector('#back:checked');
    console.log(checkedBack);
    let feedbackPrint = document.getElementById("checkedFrontBack");

    if(checkedFront !== null && checkedBack !== null){
        feedbackPrint.innerHTML =
            "You selected both front and back print.\nNote that the front will be a small print and the back will be" +
            " a" +
            " large print"
        return true;
    }
    return false;
}


function submit(event){
    if(!validateLastName() || !validateEmail()){
        event.preventDefault();
    }
}