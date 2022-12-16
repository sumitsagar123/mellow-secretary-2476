/* <div id="product_details">
        <h1>Product Details</h1>
        <input id="title" type="text" placeholder="Product Title">
        <input id="price" type="number" placeholder="Product Price">
        <input id="desc" type="text" placeholder="Description">
        <input type="text" name="" id="category" placeholder="Category ex: men">
        <input id="rating" type="text" placeholder="Rating">
        <input id="image" type="text" placeholder="Image of product">
        <button id="add_product">Add Product</button>
    </div>

    <div id="update">
        <h1>Update Price</h1>
        <input id="new_price" type="number" placeholder="Enter new price">
        <button id="update_price">Update Price</button>
    </div>
    <div id="Delete">
<h1>Delete Product</h1>
<input type="text" name="" id="delete_" placeholder="Enter Id">
<button id="delete_product">Delete Product</button>
    </div> */





    



    let add_product_button=document.querySelector("#add_product");
    add_product_button.onclick=()=>{


        let title=document.querySelector("#title").value
        let price=document.querySelector("#price").value
        let desc=document.querySelector("#desc").value
        let category=document.querySelector("#category").value
        let rating=document.querySelector("#rating").value
        let image=document.querySelector("#image").value;

        let obj={
            title,
            price,
            desc,
            category,
            rating,
            image
        }

    }


///////////////////////////    UPDATING PRICE    ///////////////////////

    let update_price_button=document.querySelector("#update_price");
    update_price_button.onclick=()=>{

        let new_price=document.querySelector("#new_price").value;

        let obj={
            price:new_price
        }

    }



///////////////////////  DELETING PRODUCT  ///////////////////////////////

    let delete_product_button=document.querySelector("#delete_product");
    delete_product_button.onclick=()=>{

let id=document.querySelector("#product_id").value;
let obj={
    id,
}

    }