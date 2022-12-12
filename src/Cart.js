import React, { useState } from 'react'
import './Cart.css'

function Cart() {
    const [count1,setCount1]=useState(1);
    const [count2,setCount2]=useState(1);
    const inc1 =()=>{
        setCount1(count1+1)
    }
    const inc2 =()=>{
        setCount2(count2+1)
    }
   
	xconst dec1 =()=>{
        setCount1(count1-1)
    }
    const dec2 =()=>{
        setCount2(count2-1)
    }
    const f1price=99.12;
    const f2price=82.12;
  return (
    <div class="CartContainer">
   	   <div class="Header">
   	   	<h3 class="Heading">Shopping Cart</h3>
   	   	<h5 class="Action">Remove all</h5>
   	   </div>



   	   <div class="Cart-Items">
   	   	  <div class="image-box">
   	   	  	<img src="https://www.gardeningknowhow.com/wp-content/uploads/2021/05/whole-and-slices-watermelon-690x518.jpg" style={{ height:"120px" }} />
   	   	  </div>
   	   	  <div class="about">
   	   	  	<h1 class="title1">Watermelon </h1>
   	   	  	<h3 class="subtitle">1pc (approx 2.5-3kg)</h3>
   	   	  	<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ239Zo9cNimCavHbLvlhLg8mD_tRLV_lTMrUmYQqRy7ILUc8Fu_XxIZPi6jAoIiRMcuiE&usqp=CAU" style={{ height:"30px" }}/>
   	   	  </div>
   	   	  <div class="counter">
   	   	  	<div class="btn"  onClick={inc1}> + </div>
   	   	  	<div class="count">{count1}</div>
   	   	  	<div class="btn" onClick={dec1}>-</div>
   	   	  </div>
   	   	  <div class="prices">
   	   	  	<div class="amount">Rs {count1*f1price}</div>
   	   	  	<div class="save"><u>Save for later</u></div>
   	   	  	<div class="remove"><u>Remove</u></div>
   	   	  </div>
   	   </div>

   	   <div class="Cart-Items pad">
   	   	  <div class="image-box">
   	   	  	<img src="https://th.bing.com/th/id/R.9ce78b98cfee721a1835a923d843d7de?rik=kdgzOPTu5frzHg&riu=http%3a%2f%2fwww.fruitssupplier.com%2fimg%2fproduct%2fhome%2f58e3846c-800c-4fbf-8a71-740ea7720195.jpg&ehk=AqDElSBl%2bt6QpEhmXZqZ7rcKC7iCtZUr6f4U9l7HJuE%3d&risl=&pid=ImgRaw&r=0" style={{ height:"120px" }} />
   	   	  </div>
   	   	  <div class="about">
   	   	  	<h1 class="title2">Banana</h1>
   	   	  	<h3 class="subtitle">1kg</h3>
   	   	  	<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ239Zo9cNimCavHbLvlhLg8mD_tRLV_lTMrUmYQqRy7ILUc8Fu_XxIZPi6jAoIiRMcuiE&usqp=CAU" style={{ height:"30px" }}/>
   	   	  </div>
   	   	  <div class="counter">
   	   	  	<div class="btn" onClick={inc2}> + </div>
   	   	  	<div class="count">{count2}</div>
   	   	  	<div class="btn"onClick={dec2} >-</div>
   	   	  </div>
   	   	  <div class="prices">
   	   	  	<div class="amount">Rs {count2*f2price}</div>
   	   	  	<div class="save"><u>Save for later</u></div>
   	   	  	<div class="remove"><u>Remove</u></div>
   	   	  </div>
   	   </div>
   	 <hr/> 
   	 <div class="checkout">
   	 <div class="total">
   	 	<div>
   	 		<div class="Subtotal">Sub-Total</div>
   	 		<div class="items">2 items</div>
   	 	</div>
   	 	<div class="total-amount">Rs {(count1*f1price)+(count2*f2price)}</div>
   	 </div>
   	 <button class="button">Checkout</button></div>
   </div>
  )
}

export default Cart