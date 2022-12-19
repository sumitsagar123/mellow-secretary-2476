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




let  url="https://backend-imfz.onrender.com/inventory"
    



    let add_product_button=document.querySelector("#add_product");
    add_product_button.onclick=async()=>{


        let title=document.querySelector("#title").value
        let price=Number(document.querySelector("#price").value)
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


try{

let res= await fetch(url,{
    method:"POST",
    body:JSON.stringify(obj),
    headers:{
        "Content-Type":"application/json"
    }
})
res=await res.json();
console.log(res)
alert("Product is added to DataBase")

}catch(error){
alert("Bad Request")
}

    }


///////////////////////////    UPDATING PRICE    ///////////////////////

    let update_price_button=document.querySelector("#update_price");
    update_price_button.onclick=async()=>{

        let new_price=Number(document.querySelector("#new_price").value);
        let id=document.querySelector("#product_id").value;

        let obj={
            price:new_price
        }



        
try{

    let res= await fetch(`${url}/${id}`,{
        method:"PATCH",
        body:JSON.stringify(obj),
        headers:{
            "Content-Type":"application/json"
        }
    })
    res=await res.json();
    console.log(res)
    alert("New Price updated")
    
    }catch(error){
    alert("Bad Request")
    }

    }



///////////////////////  DELETING PRODUCT  ///////////////////////////////

    let delete_product_button=document.querySelector("#delete_product");
    delete_product_button.onclick=async()=>{

let id=Number(document.querySelector("#product_id2").value);

console.log(id)
try{

    let res= await fetch(`${url}/${id}`,{
        method:"DELETE",
        
    })
    res=await res.json();
    console.log(res)
    alert("Product is deleted")
    }catch(error){
    alert("Bad Request")
    }

    }