import { navbar , footer } from "./navbar.js";

let nav_div= document.getElementById("navcontainer");
nav_div.innerHTML=navbar();

let foot_div=document.getElementById("footcontainer");
foot_div.innerHTML=footer();