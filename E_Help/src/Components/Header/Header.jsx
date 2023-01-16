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
    return (
        <header>
          <div className="header-container">
            <div className="header-left">
                <Link to = '/'>  
                <img src = {logo} alt = 'logo' />
               </Link>
               <div className="text-center left">
                            <span><a onClick={()=>signup()} href="">About Us</a></span>
                        </div>
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
                        
            <div className="header-right">
            <div className="header-right-container">
              < div className="icon" /> 
              <AiOutlineInbox size={25} className="icon"/>
              <svg
              aria-hidden="true"
              className="svg-icon iconStackExchange"
              width="24"
              height="24"
              viewBox="0 0 18 18"
              fill="rgba(0,0,0,0.5)"
              style={{
                cursor: "pointer",
              }}
            >
              <path d="M15 1H3a2 2 0 00-2 2v2h16V3a2 2 0 00-2-2ZM1 13c0 1.1.9 2 2 2h8v3l3-3h1a2 2 0 002-2v-2H1v2Zm16-7H1v4h16V6Z"></path>
            </svg>
            </div>
            </div>
          </div>
        </header>
    )
}

export default Header