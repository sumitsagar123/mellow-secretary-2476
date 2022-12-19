import { navbar , footer } from "./navbar.js";

let nav_div= document.getElementById("navcontainer");
nav_div.innerHTML=navbar();

let foot_div=document.getElementById("footcontainer");
foot_div.innerHTML=footer();





let arr = JSON.parse(localStorage.getItem("cartItems"));
console.log(arr)
 let cart_count=document.querySelector("#count");
 cart_count.innerText=arr.length;




let learn_more=document.getElementById("learn_more")
learn_more.onclick=()=>{
    window.location.href="https://www.bathandbodyworks.com/moxy"
}
let first_name=localStorage.getItem("first_name");

// let username=document.querySelector("#username");
// username.style.display="block";
