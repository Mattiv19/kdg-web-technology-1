window.addEventListener('load', init);

function init(){
    fillSelectOptions();
}

function fillSelectOptions(){
    let productOptions = document.querySelector('#product-label');
    productOptions.innerHTML = '';

    for(let i = 0; i < products.length; i++){
        let optionGroup = `<optgroup label="${categoryArray[i]}"></optgroup>`
        console.log(optionGroup);
        productOptions.innerHTML += optionGroup;
        for(let j = 0; j < products[i].length; j++){
            let option = `<option value="${products[i][j].name}">${products[i][j].name}</option>`;
            console.log(option);
            productOptions.innerHTML += option;
        }
    }
}

