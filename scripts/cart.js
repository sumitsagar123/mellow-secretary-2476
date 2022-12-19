    // <button></button>
    let data = JSON.parse(localStorage.getItem("Productcart"));

const cart = (data) => {
    let final_cart = document.getElementById('final_cart');
        final_cart.innerHTML = null;

    data.forEach((el) => {
        let main_div = document.createElement('div');
            main_div.setAttribute("class", "cartproduct");
        let img = document.createElement('img');
            img.src = el.image;
        let dsc = document.createElement('div');
        let title = document.createElement('h3');
            title.innerHTML = el.title;
        let type = document.createElement('p');
            type.innerHTML = el.type;
        let offer = document.createElement('p');
            offer.innerText = 'Mix & Match Full-Size: Buy 3, Get 3 FREE or Buy 2, Get 1 FREE';
            dsc.append(title,type,offer);
        let price = document.createElement('h3');
            price.innerHTML = `$${el.price}`;
        let close_btn = document.createElement('button');
            close_btn.innerHTML = `<i id="ibtn" class="fa-solid fa-x"></i>`;
            close_btn.onclick = () =>{
                let g = JSON.parse(localStorage.getItem("Productcart")) || [];
                let d = g.filter(a=>a.id!==el.id)
                localStorage.setItem("Productcart",JSON.stringify(d));
                cart(d);
                checkoutdiv(data);
            }
        let hr = document.createElement('hr');
            main_div.append(img,dsc,price,close_btn);
            final_cart.append(main_div,hr);
    });
    
};

cart(data);

const checkoutdiv = (data) =>{
    let totalprice=0;
    let checkout = document.getElementById("checkout");
    data.forEach((el) => {
        totalprice+=el.price;
    });

//  console.log(totalprice);
let subtotal = document.getElementById("subtotal");
    subtotal.innerText= "$"+totalprice;
let shipping = document.getElementById("shipping");
    shipping.innerText = "$"+totalprice/5;
let tax = document.getElementById("tax");
    tax.innerText = "$"+totalprice/4;
let t= Math.floor(totalprice+(totalprice/5)+totalprice/4);
    let checkouttotalss = document.getElementById("checkouttotalss");
    checkouttotalss.innerText = "$"+t;
    localStorage.setItem("checkouttotal", t);
};
checkoutdiv(data);

// 
//     