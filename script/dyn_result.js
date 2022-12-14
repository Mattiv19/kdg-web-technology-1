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
    let newarticle = document.createElement('article');
    newarticle.setAttribute('id', 'productInfo');
    let main = document.querySelector('main');
    main.insertAdjacentElement('beforeend', newarticle);

    //Build Product Info
    showChoice(productname);

}


function showChoice(productname){
    let producttitle = `<h2>Product Info</h2>`
    let productimg = `<img src="${products[productname].img}" alt="${products[productname].name}">`
    let productnamevalue = `<ul class="productInfoList">Product name: <li>${products[productname].name}</li> </ul>`
    let productcategory = `<ul class="productInfoList">Category: <li> ${products[productname].category}</li></ul> `
    let productprice = `<ul class="productInfoList">Price: <li>${products[productname].price} EUR</li></ul>`
    let productcolour = `<ul class="productInfoList">Colour: <li>${products[productname].colour}</li></ul>`
    let productdescr = `<ul class="productInfoList">Description: <li>${products[productname].description}</li></ul>`


    let productInfo = document.querySelector('#productInfo');
    productInfo.innerHTML += producttitle;
    productInfo.innerHTML += productimg;
    productInfo.innerHTML += productnamevalue;
    productInfo.innerHTML += productcategory;
    productInfo.innerHTML += productprice;
    productInfo.innerHTML += productcolour;
    productInfo.innerHTML += productdescr;

    if(products[productname].productdetail === ""){
        return 0}
    else{
        let productlink = `<ul class="productInfoList">Product link: <li></li><a href="${products[productname].productdetail}">${products[productname].name}</a></li></ul>`
        productInfo.innerHTML += productlink}
}