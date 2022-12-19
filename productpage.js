import { navbar , footer } from "./navbar.js";

let nav_div= document.getElementById("navcontainer");
nav_div.innerHTML=navbar();

let foot_div=document.getElementById("footcontainer");
foot_div.innerHTML=footer();



let products = [
    {
        id:1,
        image:`https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw68829434/crop/026587279_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_`,
        title: "Black Tie",
        price: 7.50,
        rating: 4.5,
        type: "Black wallflowers Fragrance Refill",

    },
    {
        id:2,
        image:`https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwc1518184/crop/026438827_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_`,
        title: "Black Tie",
        desc: "Wallflowers Fragrance Refill",
        price: 7.00,
        rating: 4.0,
        type: "wallflowers Fragrance Refill",
    },
    {
        id:3,
        image:`https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwdfe0df3d/crop/026437376_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_`,
        title: "Mahogany Teakwood",
        price: 15.50,
        rating: 4.5,
        type: "Single Wick Candle",
    },
    {
        id:4,
        image:`https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw788dbf70/crop/026501180_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_`,
        title: "Birch & Ecalyptus",
        price: 16.50,
        rating: 4.5,
        type: "Unlimited Hydration Body Cream",
    },
    {
        id:5,
        image:`https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwe8387708/crop/026534930_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_`,
        title: "Flannel",
        price: 8.50,
        rating: 4.5,
        type: "Cocentrated Room Spray",
    },
    {
        id:6,
        image:`https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw4a25f053/crop/026584954_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_`,
        title: "Flannel",
        price: 16.95,
        rating: 4.5,
        type: "3-Wick Candle",
    },
    {
        id:7,
        image:`https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwef08bb2c/crop/026552804_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_`,
        title: "Bpurbon",
        price: 16.50,
        rating: 5.0,
        type: "Ultimate Hydration Body Cream",
    },
    {
        id:8,
        image:`https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwcff163db/crop/026358678_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_`,
        title: "Mahogany Teakwood ",
        price: 16.50,
        rating: 5.0,
        type: "Wallflowers Fragrance Refill",
    },
    {
        id:9,
        image:`https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw8c66aeff/crop/026552809_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_`,
        title: "Whiskey Reserve",
        price: 14.50,
        rating: 4.6,
        type: "Daily Nourishing Body Lotion",
    },
    {
        id:10,
        image:`https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw41ccd312/crop/026438828_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_`,
        title: "Vintage",
        price: 7.50,
        rating: 4.1,
        type: "Gentle Foaming Hand Soap",
    },
    {
        id:11,
        image:`https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwdfe3b194/crop/026551686_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_`,
        title: "Smoked Old Fashioned",
        price: 14.50,
        rating: 4.0,
        type: "Body Spray",
    },
    {
        id:12,
        image:`https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwd11e9755/crop/026466941_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_`,
        title: "Freshwater",
        price: 7.50,
        rating: 4.5,
        type: "Wallflowers Fragrance Refill",
    },
    {
        id:13,
        image:`https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwc05d9d02/crop/026551691_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_`,
        title: "Whiskey Reserve",
        price: 15.50,
        rating: 4.8,
        type: "3-in-1 hair, Face & Body Wash",
    },
];


let arr = JSON.parse(localStorage.getItem("cartItems"));
console.log(arr)
 let cart_count=document.querySelector("#count");
 cart_count.innerText=arr.length;

const renderDom =  (datas) => {

    
// console.log('slider');
let container = document.getElementById("productContainer");
    container.innerHTML = null;
let data =JSON.parse(localStorage.getItem("cartItems")) || [];
    // console.log(container);
    datas.forEach((el) => {

        let div = document.createElement("div");
            div.setAttribute("class", "productss");

        let img = document.createElement("img");
            img.src = el.image;

        let title = document.createElement("h3");
        let titleNode = document.createTextNode(el.title);
            title.appendChild(titleNode);

        let type = document.createElement("p");
        let typeNode = document.createTextNode(el.type);
            type.appendChild(typeNode);

        let price = document.createElement("h3");
        let priceNode = document.createTextNode(`$ ${Number(el.price)}`);
            price.appendChild(priceNode);
   
        let rating = document.createElement("p");
        let ratingNode = document.createTextNode(`Rating: ${Number(el.rating)}`);
            rating.appendChild(ratingNode);
            
        
            let button = document.createElement("button");
                button.setAttribute("id","addtocart");
                button.innerText= "Add to Cart";
                button.onclick = () => {
                    // addToCart(el);
                    data.push(el);
                    localStorage.setItem("cartItems", JSON.stringify(data));
                    console.log(data);
                };

        div.append(img,title,type,price,rating,button);
        container.append(div);
        console.log(el.id);
    });

    
}; 
renderDom(products);


const filter = () => {
    let type = document.getElementById("type");
    let name = document.getElementById("name");
    let sortby = document.getElementById("sortby");

    products.forEach((el) => {
        let otp_type = document.createElement("option");
            otp_type.innerHTML = el.type;
            type.append(otp_type);

        let otm_name = document.createElement("option");
            otm_name.innerHTML = el.title;
            name.append(otm_name);

    });

    type.onchange = () => {
        let p = products.filter((el)=>{
            return el.type === type.value;
        });
        renderDom(p);
    };

    name.onchange = () => {
        let p = products.filter((el)=>{
            return el.title === name.value;
        });
        renderDom(p);
    };

    sortby.onchange = () => {
        let s;
        if(sortby.value === "lth"){
            //console.log("Sort")
              s = products.sort((q,w)=>q.price-w.price);
        }else{
             s = products.sort((q,w)=>w.price-q.price);
        }
        renderDom(s);
    };

};

filter();