import { useContext, useState } from "react";

import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import useUserStatus from "../utils/useUserStatus";

const Header = () => {
  const[isLoggedIn, setIsLoggedIn] = useState(false)
  const userStatus = useUserStatus();
  const {loggedInUser} = useContext(UserContext);
  const cartItems = useSelector((store)=> store.cart.items)
    return (
      <div className=" flex justify-between shadow-md  ">
  
        <div className="logo-container p-3">
          <p className="text-xl font-bold">Bentofood 🍱</p>
        </div>
  
        <div className="nav-items p-4 text-sm">
          <ul className="flex ">
            <li className="mx-3">Status: {userStatus ? '🟢' : '🔴'}</li>
            <li className="mx-3"><Link to='/'>Home</Link></li>
            <li className="mx-3"><Link to='/about'>About Us</Link></li>
            <li className="mx-3"><Link to='contact'>Contact Us</Link></li>
            <li className="mx-3"><Link to="/grocery">Grocery</Link></li>
            <li className="mx-3"><Link to="/cart">Cart({cartItems.length})</Link></li>
            
            
            <li className="mx-3"><button className="toggle-btn"
            onClick={()=>{
                return setIsLoggedIn((prevState)=> !prevState)
            }}>{isLoggedIn ? "Logout" : "Login"}</button></li>
            <li className="mx-3">{loggedInUser}</li>
          </ul>
        </div>
  
      </div>
    )
  }

  export default Header;