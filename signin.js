let join = document.getElementById("join_click");
join.onclick = () => {
  window.location.href = "signup.html";
};

let user_data = JSON.parse(localStorage.getItem("user_details")) || [];
let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  login(user_data);
});

function login(data) {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let email_flag = false;
  let password_flag = false;

  for (let i = 0; i < data.length; i++) {
    if (email == data[i].email_id) {
      email_flag = true;
    }
    if (password == data[i].pass) {
      password_flag = true;
      let first_name=data[i].first_name
      let obj={
        first_name,
      }
    //   let arr=JSON.parse(localStorage.getItem("first_name"))||[];
    //   arr.push(obj);
      localStorage.setItem("first_name",JSON.stringify(obj))
      
    }
  }
  if (email_flag == true && password_flag == true) {
    alert("Login Successfull");
    window.location.replace("homepage.html")
  } else if (email_flag == true && password_flag == false) {
    alert("Wrong Password");
  } else {
    alert("Wrong Credentials");
  }
  if (email == "sumitsagar0010@gmail.com" && password == "1234") {
    alert("Welcome back admin");
    //    LINK COPY HERE.....
    window.location.href = "homepage.html";
  } else {
    if (email_flag == true && password_flag == true) {
      //   HOME PAGE LINK COPY HERE.....
    }
  }
}