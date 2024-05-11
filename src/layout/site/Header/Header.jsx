import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

const Header = () => {
  return (
    
      <nav>
      <div className="nav_left">
        <Link style={{textDecoration:"none",color:"black",fontSize:"20px"}} to={"/"}>Start Bootstrap</Link>
        <Link style={{textDecoration:"none",color:"black"}}  to={"/"}>Home</Link>
        <Link style={{textDecoration:"none",color:"black"}}  to={"/admin"}>Admin</Link>
        <Link style={{textDecoration:"none",color:"black"}} to={"/shop"}>Shop<i class="fa-solid fa-caret-down"></i></Link>

       
      </div>
      <div className="nav_right">
      <i class="fa-solid fa-cart-shopping"></i>
      <Link style={{textDecoration:"none",color:"black"}} to={"/"}>Cart</Link>
      <span>0</span>
     
      </div>
      </nav>
    
  )
}

export default Header