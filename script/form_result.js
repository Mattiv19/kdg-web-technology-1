const url = window.location.search;

const searchParams = new URLSearchParams(url);

function ConfOutputLine(inputLine){
    const value = searchParams.get(inputLine);
    const item = document.getElementById(inputLine);
    if(item !== null){
        item.innerHTML = value;
        console.log(value);
    }
}

ConfOutputLine("product");
ConfOutputLine("colour");
ConfOutputLine("size");
ConfOutputLine("printfront");
ConfOutputLine("printback")
ConfOutputLine("fitting");
ConfOutputLine("comment");
ConfOutputLine("salutation");
ConfOutputLine("fullname");
ConfOutputLine("birthdate");
ConfOutputLine("street");
ConfOutputLine("houseNumber");
ConfOutputLine("addressInfo");
ConfOutputLine("postalcode");
ConfOutputLine("city");
ConfOutputLine("country");
ConfOutputLine("email");
ConfOutputLine("phonenumber");



