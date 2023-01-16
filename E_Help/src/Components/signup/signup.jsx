import React from 'react'
import "../Login/Login.css";
import {useState} from "react"
import {useDispatch} from "react-redux"
import {register} from "../../slices/auth/authSlice"
import { toast } from 'react-hot-toast';
function Signup() {
    const [Name,setName]=useState("");
    const [Email,setEmail]=useState("");
    const [Password,setPassword]=useState("");
    const [confirmPassword,setConfirmPassword] = useState('');
    const [image,setimage]=useState("");
    const dispatch=useDispatch();
      const validateEmail = (Email) => {
        return String(Email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };
      const onSubmit=(e)=>{
        e.preventDefault();
        const formData = new FormData();
    formData.append("Name", Name);
    formData.append("Email", Email);
    formData.append("Password", Password);
    formData.append("ConfirmPassword", confirmPassword);
    formData.append("image", image);
        dispatch(register(formData));
        setName("");
        setEmail("")
        setPassword("");
        setConfirmPassword("");
        setimage("")
        if(!Name || !Email || !Password || !confirmPassword || !image) {
            toast.error("Please fill all fields");
            return
        }
        if(Password.length < 8) {
            return toast.error("Password should be at least 8 characters!")
        }
        if(!validateEmail(Email)) {
            return toast.error("Please enter valid email")
        }
        if(Password !== confirmPassword) {
            return toast.error("Password should be same as confirm password")
        }
        else{
            return toast.success("User registered Successfully")
        }
      }
    return (
        <div className="container-fluid">
            <div className="sigin-wrap">
                <div className="pad-content">
                    <h2 className="text-center mb-3">Sign Up</h2>
                    <form onSubmit={onSubmit}>
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Name"
                               value={Name}
                               onChange={(e)=>setName(e.target.value)}
                               name="name"
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
                            <input
                                type="password"
                                placeholder="Password"
                                className="form-control"
                                value={Password}
                               onChange={(e)=>setPassword(e.target.value)}
                               name="password"
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                className="form-control"
                                value={confirmPassword}
                               onChange={(e)=>setConfirmPassword(e.target.value)}
                               name="password"
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="file"
                                placeholder="image"
                                className="form-control"
                                value={image}
                               onChange={(e)=>setimage(e.target.value)}
                               name="image"
                            />
                        </div>
                        

                        <button type="submit" className="btn mb-3" id="signup-btn">
                            Sign Up
                        </button>
                        <button type="submit" className="btn mb-3 clr" id="signup-btn">
                        Sign up With Google
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Signup