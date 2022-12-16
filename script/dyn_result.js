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

    let productInfo = document.querySelector('#productInfo');
    productInfo.innerHTML += producttitle;
    productInfo.innerHTML += productimg;

    if(products[productname].productdetail === ""){
        let productdatalist = `<dl>
                            <dt class="productInfoList">Product:</dt> <dd>${products[productname].name}</dd>
                            <dt class="productInfoList">Category:</dt> <dd> ${products[productname].category}</dd>
                            <dt class="productInfoList">Price: </dt><dd>${products[productname].price} EUR</dd>
                            <dt class="productInfoList">Colour: </dt><dd>${products[productname].colour}</dd>
                            <dt class="productInfoList">Description: </dt><dd>${products[productname].description}</dd>
                               </dl>`
        productInfo.innerHTML += productdatalist;
    }
    else{
        let productdatalistwithlink = `<dl>
                            <dt class="productInfoList">Product:</dt> <dd>${products[productname].name}</dd>
                            <dt class="productInfoList">Category:</dt> <dd> ${products[productname].category}</dd>
                            <dt class="productInfoList">Price: </dt><dd>${products[productname].price} EUR</dd>
                            <dt class="productInfoList">Colour: </dt><dd>${products[productname].colour}</dd>
                            <dt class="productInfoList">Description: </dt><dd>${products[productname].description}</dd>
                            <dt class="productInfoList">Link: </dt><dd><a href="${products[productname].productdetail}">${products[productname].name}</a></dd>
                               </dl>`
        productInfo.innerHTML += productdatalistwithlink;
    }

}

