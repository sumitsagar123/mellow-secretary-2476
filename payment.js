import { navbar , footer } from "./navbar.js";

let nav_div= document.getElementById("navcontainer");
nav_div.innerHTML=navbar();

let foot_div=document.getElementById("footcontainer");
foot_div.innerHTML=footer();


let order_amount=localStorage.getItem("order-amount");
console.log(order_amount)

let paynow=document.querySelector("#paynow");
paynow.onclick=()=>{

    let cardnumber=document.querySelector("#cardnumber").value;
    if(cardnumber.length==16){
       alert("payment suceesfull") 
       window.location.replace("homepage.html")
    }else{
        alert("card number should be of sixteen digits")
    }
    
}
paynow.innerText="Paynow"+ " "+"("+" "+"$"+" "+order_amount+")"