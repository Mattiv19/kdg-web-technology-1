// const Category
const categoryArray = [{categoryId:1, Category:"T-shirts"},{categoryId:2, Category: "Hoodies"},{categoryId:3, Category:"Sweatshirts"}]

// const Price
const priceArray = [29.99, 69.99, 59.99];

// const Colour
const colourArray = ["Black", "White", "Blue", "Green"];

// consts description
const descrArray = [
    {YellowSmiley: "This item is inspired by the 90's Techno rave scene, with the famous yellow smiley as eyecatcher." +
            " The" +
            " Smiley will also be reflective in the dark, making you stand out from the crowd."},
    {SciFi: "This item is a Sci-Fi piece bringing you right to outer space. Our Sci-Fi catalogue fits perfectly with" +
            " Melodic Techno music from festivals such as Cercle and many more."},
    {Acid: "This item belongs to our Acid collection. It pays tribute to the modern Acid synths in Techno music." +
            " Perfect for a night full of dark Techno!"},
    {Artist: "This item belongs to our Artists collection. These are exclusive collaborations with the best techno" +
            " and house artist in the scene. If you buy these, you will directly support the musicians AND stand out" +
            " from the crowd."},
    {Logo: "This item belongs to our Logo collection. These are just fun clothing pieces relevant techno music that are nice to wear at home or give as a present to one of your friends or family members." }


]

const products = [
    {name: "Mega Yellow Smiley - T-shirt ", img:"../media/T-shirt 1 - Home.jpg", category: categoryArray[0]["Category"], price: priceArray[0], colour: colourArray[0], description: descrArray[0]["YellowSmiley"], productdetail:"../html/Mega-Yellow-Smiley-Details.html", categoryId:1},
    {name: "Out Of Your Head - T-shirt", img:"../media/Out Of Your Head - T-shirt 1.jpg", category: categoryArray[0]["Category"], price: priceArray[0], colour: colourArray[0], description: descrArray[1]["SciFi"], productdetail: "../html/Out-Of-Your-Head-Details.html", categoryId:1},
    {name: "Acid - T-shirt", img:"../media/Acid - T-shirt 1.jpg", category: categoryArray[0]["Category"], price: priceArray[0], colour: colourArray[3], description: descrArray[2]["Acid"], productdetail: "../html/Acid-T-Shirt-Details.html", categoryId:1},
    {name: "303 Synth Love - T-shirt", img:"../media/303 Synth Love - T-shirt 1.jpg", category: categoryArray[0]["Category"], price: priceArray[0], colour: colourArray[2], description: descrArray[2]["Acid"], productdetail:"", categoryId:1},
    {name: "Big Colour Smiley - T-shirt", img:"../media/Big Colour Smiley - T-shirt 1.jpg", category: categoryArray[0]["Category"], price: priceArray[0], colour: colourArray[1], description: descrArray[0]["YellowSmiley"], productdetail:"", categoryId:1},
    {name: "Distorted Face - T-shirt", img:"../media/Distorted Face - T-shirt 1.jpg", category: categoryArray[0]["Category"], price: priceArray[0], colour: colourArray[0], description: descrArray[3]["Artist"], productdetail:"", categoryId:1},
    {name: "Vinyl - T-shirt", img:"../media/Vinyl - T-shirt 1.jpg", category: categoryArray[0]["Category"], price: priceArray[0], colour: colourArray[1], description: descrArray[4]["Logo"], productdetail:"", categoryId:1},
    {name: "Third Dimension - T-shirt", img:"../media/Third Dimension - T-shirt 1.jpg", category: categoryArray[0]["Category"], price: priceArray[0], colour: colourArray[2], description: descrArray[1]["SciFi"], productdetail:"", categoryId:1},
    {name: "Big X - T-shirt", img:"../media/Big X - T-shirt 1.jpg", category: categoryArray[0]["Category"], price: priceArray[0], colour: colourArray[3], description: descrArray[3]["Artist"], productdetail:"", categoryId:1},
    {name: "If It's Nice Play It Twice - T-shirt", img:"../media/If its nice play it twice - T-shirt 1.jpg", category: categoryArray[0]["Category"], price: priceArray[0], colour: colourArray[1], description: descrArray[3]["Artist"], productdetail:"",categoryId:1},
    {name: "Shaking Techno Black - T-shirt", img:"../media/Shaking Techno - T-shirt 1.jpg", category: categoryArray[0]["Category"], price: priceArray[0], colour: colourArray[0], description: descrArray[4]["Logo"], productdetail:"", categoryId:1},
    {name: "Shaking Techno White - T-shirt", img:"../media/Shaking Techno White - T-shirt 1.jpg", category: categoryArray[0]["Category"], price: priceArray[0], colour: colourArray[1], description: descrArray[4]["Logo"], productdetail:"", categoryId:1},

    {name: "Boris Brejcha Joker - Hoodie", img:"../media/Hoodie 1 - Home.jpg", category: categoryArray[1]["Category"], price: priceArray[1], colour: colourArray[0], description: descrArray[3]["Artist"], productdetail:"", categoryId:2},
    {name: "Nice People Techno", img:"../media/Nice People Techno - Hoodie 1.jpg", category: categoryArray[1]["Category"], price: priceArray[1], colour: colourArray[0], description: descrArray[3]["Logo"], productdetail:"", categoryId:2},
    {name: "Big X Alien - Hoodie", img:"../media/Big X Alien - Hoodie 1.jpg", category: categoryArray[1]["Category"], price: priceArray[1], colour: colourArray[2], description: descrArray[3]["Artist"], productdetail:"", categoryId:2},
    {name: "Acid - Hoodie", img:"../media/Acid - Hoodie 1.jpg", category: categoryArray[1]["Category"], price: priceArray[1], colour: colourArray[3], description: descrArray[2]["Acid"],productdetail:"", categoryId:2},
    {name: "Melting Smiley - Hoodie", img:"../media/Melting Smiley - Hoodie 1.jpg", category: categoryArray[1]["Category"], price: priceArray[1], colour: colourArray[1], description: descrArray[0]["YellowSmiley"], productdetail:"", categoryId:2},
    {name: "Vinyl Space - Hoodie", img:"../media/Vinyl Space - Hoodie 1.jpg", category: categoryArray[1]["Category"], price: priceArray[1], colour: colourArray[2], description: descrArray[1]["SciFi"], productdetail:"", categoryId:2},
    {name: "Yellow Smileys - Hoodie", img:"../media/Yellow Smileys - Hoodie 1.jpg", category: categoryArray[1]["Category"], price: priceArray[1], colour: colourArray[0], description: descrArray[0]["YellowSmiley"], productdetail:"", categoryId:2},
    {name: "Techno Vinyl - Hoodie", img:"../media/Techno Vinyl - Hoodie 1.jpg", category: categoryArray[1]["Category"], price: priceArray[1], colour: colourArray[1], description: descrArray[4]["Logo"], productdetail:"", categoryId:2},

    {name: "Techno Black - Sweatshirt", img:"../media/Sweatershirt 1 - Home.jpg", category: categoryArray[2]["Category"], price: priceArray[2], colour: colourArray[0], description: descrArray[3]["Artist"], productdetail:"", categoryId:3},
    {name: "Boris Brejcha - Sweatshirt", img:"../media/Boris Brejcha - Sweatshirt 1.jpg", category: categoryArray[2]["Category"], price: priceArray[2], colour: colourArray[1], description: descrArray[3]["Artist"], productdetail:"", categoryId:3},
    {name: "ACID - Sweatshirt", img:"../media/Acid - Sweatshirt 1.jpg", category: categoryArray[2]["Category"], price: priceArray[2], colour: colourArray[0], description: descrArray[2]["Acid"], productdetail:"", categoryId:3},
    {name: "Known Artist - Sweatshirt", img:"../media/Known Artist - Sweatshirt 1.jpg", category: categoryArray[2]["Category"], price: priceArray[2], colour: colourArray[2], description: descrArray[3]["Artist"], productdetail:"", categoryId:3},
    {name: "ACID87 - Sweatshirt", img:"../media/ACID87 - Sweatshirt 1.jpg", category: categoryArray[2]["Category"], price: priceArray[2], colour: colourArray[3], description: descrArray[2]["Acid"], productdetail:"", categoryId:3},
    {name: "Coffee Techno - Sweatshirt", img:"../media/Coffee Techno - Sweatshirt 1.jpg", category: categoryArray[2]["Category"], price: priceArray[2], colour: colourArray[1], description: descrArray[3]["Logo"], productdetail:"", categoryId:3},
    ];




