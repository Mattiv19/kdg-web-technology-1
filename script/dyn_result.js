window.addEventListener('load', init);

function init(){
    let newspan = document.createElement('span');
    newspan.setAttribute('id', 'productInfo');
    let main = document.querySelector('main');
    main.insertAdjacentElement('beforeend', newspan)
}

function searchProductId(name){
    for(let i = 0; i < products.length;i++){
        if(products[i].name == name) return i;
    }
}
