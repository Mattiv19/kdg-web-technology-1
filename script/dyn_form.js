window.addEventListener('load', init);

function init(){
    fillSelectOptions();
}
console.log(products);

function fillSelectOptions(){
    let productOptions = document.querySelector('#product-label');
    productOptions.innerHTML = '';

    for(let i = 0; i < categoryArray.length; i++){
        let optionGroup = `<optgroup label="${categoryArray[i].Category}"></optgroup>`
        productOptions.innerHTML += optionGroup;
        for(let j = 0; j < products.length; j++){
            if(products[j].id === categoryArray[i].id){
            let option = `<option value="${products[j].name}">${products[j].name}</option>`;
            productOptions.innerHTML += option;
            }
        }
    }
}

