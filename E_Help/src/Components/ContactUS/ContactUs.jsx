import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {contact} from "../../slices/auth/authSlice"
import { toast } from 'react-hot-toast'
function ContactUs() {
    const [Email,setEmail]=useState("");
    const [Name,setName]=useState("");
    const [Message,setMessage]=useState("");
    const validateEmail = (Email) => {
        return String(Email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
      };
const dispatch=useDispatch();
const onSubmit=(e)=>{
    e.preventDefault();
    dispatch(contact({Email,Name,Message}));
    setEmail("")
    setName("")
    setMessage("")
    if(!Name || !Email || !Message){
        toast.error("Please Fill all fields first")
        return
    }
    if(Message.length < 20) {
        return toast.error("Message Should be 20 Characters long")
    }
    if(!validateEmail(Email)) {
        return toast.error("Please enter valid email")
    }
    else{
        return toast.success("Message Send Successfully")
    }
      }
  return (
    <div className="container-fluid">
    <div className="sigin-wrap">
        <div className="pad-content">
            <h2 className="text-center mb-3">Contact US</h2>
            <form onSubmit={onSubmit}>
            <span className='mb-3'>
            <p>Do you have any questions? Please do not hesitate to contact us directly.</p>
          </span>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        value={Name}
                        onChange={(e)=>setName(e.target.value)}
                name="email"
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Email Address"
                        value={Email}
                onChange={(e)=>setEmail(e.target.value)}
                name="email"
                    />
                </div>
                <div className="mb-3">
                    <textarea className="form-control"
                     placeholder="Message"
                     cols="30" 
                     rows="10"
                     value={Message}
                     onChange={(e)=>setMessage(e.target.value)}
                name="Message"></textarea>
                </div>
                <button type="submit" className="btn mb-3" id="signup-btn">
                    Send
                </button>
            </form>
        </div>
    </div>
</div>
  )
}
export default ContactUs;
