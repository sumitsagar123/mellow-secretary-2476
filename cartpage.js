import { navbar , footer } from "./navbar.js";

let nav_div= document.getElementById("navcontainer");
nav_div.innerHTML=navbar();

let foot_div=document.getElementById("footcontainer");
foot_div.innerHTML=footer();






let arr = JSON.parse(localStorage.getItem("cartItems"));
console.log(arr)
 let cart_count=document.querySelector("#count");
 cart_count.innerText=arr.length;

let total_order=localStorage.getItem("order-amount")
let sum = 0;

const display = (data) => {
    sum=0;
    let cart = document.querySelector("#cartbar");
    cart.innerHTML = null;


    data.forEach((el, index) => {
        sum = sum + el.price

        let card = document.createElement("div");

        let itemdiv = document.createElement("div");
        itemdiv.setAttribute("class", "itemdiv")
        let photodiv = document.createElement("div")
        let titlediv = document.createElement("div")
        let pricediv = document.createElement("div");


        let hr = document.createElement("hr")
        let image = document.createElement("img");
        image.src = el.image;
        image.setAttribute("class", "productImage")



        let title = document.createElement("h3");
        title.innerText = el.title;
        title.style.color = "#025394"

        let total = document.createElement("h3");
        total.innerText = "TOTAL"
        total.style.color = "rgb(0,161,224)"

        let price = document.createElement("h3");
        price.innerText = "$ " + Number(el.price) + ".00";
        let remove = document.createElement("button");
        remove.innerText = "Remove";
        remove.setAttribute("class", "remove")
        remove.onclick = () => {
            removeitem(data, index)
        }

        let instock = document.createElement("p");
        instock.innerText = "In Stock";
        instock.style.color = "green"

        photodiv.append(image)
        titlediv.append(title, instock, remove)


        itemdiv.append(photodiv, titlediv)
        pricediv.append(total, price)



        card.append(itemdiv, pricediv);
        cart.append(card, hr)
    });
    billing(sum)

}

display(arr)







function removeitem(data, index) {

    let lsdata = data.filter(function (el, i) {
        return i != index;
    })

    localStorage.setItem("cartItems", JSON.stringify(lsdata));
    display(lsdata);


    let arr = JSON.parse(localStorage.getItem("cartItems"));
    
     let cart_count=document.querySelector("#count");
     cart_count.innerText=arr.length;

}



function billing(sum) {


    let discount = Math.ceil((20 / 100) * sum)
    console.log(discount)

    let total_mrp = sum + discount;
    let order_amount = total_mrp - discount;

    //localStorage.setItem("orderAmount",JSON.stringify())



    let totalmrp = document.querySelector("#totalmrp");
    totalmrp.innerText = "$" + " " + total_mrp + ".00";


    let dis = document.querySelector("#discount");
    dis.innerText = "-" + " " + "$" + " " + discount + ".00";


    let orderamount = document.querySelector("#orderamount");
    orderamount.innerText = "$" + " " + order_amount + ".00";

    let totalamount = document.querySelector("#totalamt");
    totalamount.innerText = "$" + " " + order_amount + ".00";

    localStorage.setItem("order-amount",order_amount)
}
billing(sum)

let continuepayment=document.querySelector("#continuepayment");
continuepayment.onclick=()=>{
window.location.replace("payment.html")
}


