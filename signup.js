let sign_inclick = document.getElementById("sign_inclick")
sign_inclick.style.cursor="pointer"
sign_inclick.onclick = () => {
    window.location.replace("signin.html")
}

let data = JSON.parse(localStorage.getItem("user_details")) || [];

let form = document.querySelector("form")
form.addEventListener("submit", function (ele) {
    ele.preventDefault()
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let first_name=document.getElementById("first_name").value
    let obj = {
        email_id:email,
        pass:password,
        first_name
    };
    data.push(obj);
    localStorage.setItem("user_details",JSON.stringify(data))
    alert("Sucess");
    
    document.getElementById("email").value=null;
    document.getElementById("password").value=null;
    document.getElementById("last_name").value=null;
    document.getElementById("first_name").value=null;
    window.location.href="signin.html";
})

// let createbutton=document.querySelector("#createbutton");
// createbutton.onclick=()=>{
//     window.location.replace("signin.html")
// }