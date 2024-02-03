import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from  '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [menu ,setMenu] =useState("Shop")
  return (
    <div className='navbar'>
        <div className="nav-logo" onClick={()=>setMenu("")}>
            <img src={logo} alt="" />
            <p>SHOPPER </p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>setMenu("Shop")}><Link to='/' style={{textDecoration:"none"}}>Shop</Link> {menu === "Shop" && <hr></hr>}</li>
            <li onClick={()=>setMenu("Men")}><Link to='/mens' style={{textDecoration:"none"}}>Men</Link>  {menu === "Men" && <hr></hr>}</li>
            <li onClick={()=>setMenu("Women")}><Link to='/womens' style={{textDecoration:"none"}}>Women</Link>  {menu === "Women" && <hr></hr>}</li>
            <li onClick={()=>setMenu("Kids")}><Link to='/kids' style={{textDecoration:"none"}}>Kids</Link>  {menu === "Kids" && <hr></hr>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to="/login"><button>Login</button></Link>
            <Link to="/cart"><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">0</div>
        </div>

    </div>
  )
}

export default Navbar