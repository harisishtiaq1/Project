import React from "react";
import './css/Header.css';
import {Avatar} from "@mui/material"
import { AiOutlineInbox } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import {Link, useNavigate} from "react-router-dom";
import logo from "../Header/img/logo.jpeg"

function Header() {
  const navigate=useNavigate();
  const signin=()=>{
    let path="/login"
    navigate(path);
  }
  const signup = () => {
    let path = "/signup";
    navigate(path);
  };
  const contact = () => {
    let path = "/contact";
    navigate(path);
  };
  const profile=()=>{
    let path="/profile"
    navigate(path);
  }
    return (
        <header>
          <div className="header-container">
            <div className="header-left">
                <Link to = '/'>  
                <img src = {logo} alt = 'logo' />
               </Link>
            </div>
            
            <div className="header-middle">
                <div className="header-search-container">
                    <AiOutlineSearch />
                    <input type = 'text' placeholder="Search..." />
                </div>
            </div>
            <div className="text-center">
                            <span><a onClick={()=>signin()} href="">Sign In</a></span>
                        </div>
                        <div className="text-center">
                            <span><a onClick={()=>signup()} href="">Signup</a></span>
                        </div>
                        <div className="text-center">
                            <span><a onClick={()=>contact()} href="">Contact Us</a></span>
                        </div>
                        
                        <div class="dropdown">
                          <span><i class="fa-solid fa-user icon"></i></span>
                        <div class="dropdown-content">
                          <p>Sign out</p>
                          <p onClick={()=>profile()}>Profile</p>
                            </div>
                            </div>
          </div>
        </header>
    )
}

export default Header