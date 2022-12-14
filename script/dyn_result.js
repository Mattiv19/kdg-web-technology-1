window.addEventListener('load', init);

// find array location
function searchProductId(product){
    for(let i = 0; i < products.length;i++){
        if(products[i].name === product) return i;
        console.log(i);
    }

}
function init(){
    //URL query
    const url = window.location.search;
    const searchParams = new URLSearchParams(url);
    const product = searchParams.get("product");
    console.log(product);

    // log array location
    const productname = searchProductId(product)
    console.log(productname);

    // create span element
    let newspan = document.createElement('span');
    newspan.setAttribute('id', 'productInfo');
    let main = document.querySelector('main');
    main.insertAdjacentElement('beforeend', newspan);

    //Build Product Info
    showChoice(productname);

}


function showChoice(productname){
    let producttitle = `<h2>Product Info</h2>`
    let productnamevalue = `<p>Product name: ${products[productname].name}</p>`
    let productimg = `<img src="${products[productname].img}" alt="${products[productname].name}">`
    let productcategory = `<p>Category: ${products[productname].category}</p>`
    let productprice = `<p>Price: ${products[productname].price}</p>`
    let productcolour = `<p>Colour: ${products[productname].colour}</p>`
    let productdescr = `<p>Description: ${products[productname].description}</p>`
    let productlink = `<p>Product link: <a href=${products[productname].productdetail}> ${products[productname].name}</a></p>`

    let productInfo = document.querySelector('#productInfo');
    productInfo.innerHTML += producttitle;
    productInfo.innerHTML += productimg;
    productInfo.innerHTML += productnamevalue;
    productInfo.innerHTML += productcategory;
    productInfo.innerHTML += productprice;
    productInfo.innerHTML += productcolour;
    productInfo.innerHTML += productdescr;
    productInfo.innerHTML += productlink;
}