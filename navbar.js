const navbar=()=>{
    return ` <nav id="nav1">
    <ul>
        <li>Points</li>
        <li>Perks</li>
        <li>EXCLUSIVES</li>
        <a href="#"><li>Join Rewards!</li></a> 
    </ul>

    <div class="txt1" > <i class="fa-solid fa-location-dot"></i> <p>PICK UP IN STORE</p>
    <a href="#">SET STORE</a>
    </div>
  </nav>
  <header>
    <nav id="nav2">
        <div class="box1">
          <span></span>
            <h1 id="h">Bath & Body Works</h1>
            <div class="srch"><input type="text" placeholder="search by products">
              <a href="./signin.html"><i class="fa-solid fa-user"></i></a>
              <a href="./cart.html"><i class="fa-solid fa-cart-shopping"></i></a>
              
            </div>
            
        </div>

        <div class="box2">
          <ul>
            <a href="#"> <li>TOP OFFERS</li>
            </a>
             <a href="#">
              <li>BODY CARE</li>

             </a>
             <a href="#">
              <li>CANDLES</li>

             </a>
             <a href="#">
              <li>WALLFLOWERS & AIR FRESHENERS</li>

             </a>
             <a href="#">
              <li>HAND SOAPS & SANITIZERS
              </li>

             </a>
             <a href="#">
<li>MEN'S SHOP</li>
             </a>
             <a href="#">
<li>MOXY</li>
             </a>
             <a href="#">
<span><li>HOLIDAY SHOP</li></span>
             </a>
             
              
              
          </ul>
        </div>
    </nav>
  </header>

    `
};

export{navbar}

const footer =()=>{
    return `
    <footer>
    <div id="footerbox">
      <div class="footbox1">
        <h3>GET EMAIL OFFERS & THE LATEST NEWS FROM BATH & BODY WORKS!</h3>
        <p>ENTER EMAIL</p>
        <input type="text">
        <p>CONFIRM EMAIL</p>
        <input type="text">
        <button>SUBMIT</button>
        <p>Get Connected</p>
        <div class="icons">
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-youtube"></i>
          <i class="fa-brands fa-tiktok"></i>

        </div>
      </div>
      <div class="footbox2">
        <h3>CUSTOMER CARE</h3>
        <ul>
          <li>Help & FAQs</li>
          <li>Shipping</li>
          <li>Returns & Exchanges</li>
          <li>Order Tracking</li>
          <li>Corporate Sales & Gifts</li>
          <li>Contact Us</li>
        </ul>
      </div>

      <div class="footbox3">
        <h3>MY ACCOUNT</h3>
        <ul>
          <li>Sign In or Sign Up</li>
          <li>Order Tracking</li>
          <li>My Auto Refresh</li>
          <li>My Love-It List</li>
          
        </ul>
      </div>
      <div class="footbox4">
        <h3>Discover</h3>
        <ul>
          <li>About Us</li>
          <li>Careers</li>
          <li>Gift Cards</li>
          <li>Shop by Fragrance</li>
          <li>Product Ingredients</li>
          <li>Get Inspired</li>
          <li>Diversity, Equity & Inclusion</li>
        </ul>
      </div>
      <div class="footbox5">
        <h3>FIND US</h3>
        <ul>
          <li>Store Locator</li>
          <li>Global Locations</li>
          
        </ul>
      </div>
    </div>
    <div id="lastfoot">
      <p> © 2022 Bath & Body Works Direct, Inc. All Rights Reserved.</p>
   
    </div>
  </footer>`
};

export{footer}