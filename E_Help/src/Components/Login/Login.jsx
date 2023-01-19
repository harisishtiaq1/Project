import React from "react";
import "../Login/Login.css";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../slices/auth/authSlice";
import { toast } from "react-hot-toast";
function Login() {
  const[data,setdata ] = useState(null);
  const [Email,setEmail]=useState("");
  const [Password,setPassword]=useState("");
  const navigate = useNavigate();
  const dispatch=useDispatch();
  useEffect(() => {
    if(data){
      console.log("data",data)
         let path="/dashboard";
          navigate(path);
    }
      }, [data])
  const user=localStorage.getItem("User")
  const forget = () => {
    let path = "/Forgot";
    navigate(path);
  };
  const validateEmail = (Email) => {
    return String(Email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const onSubmit=async(e)=>{
    e.preventDefault();
    const y = await dispatch(login({Email,Password}));
    console.log("y.payload",y.payload)
    const token=y.payload.token
    console.log("token",token);
    setdata(token);
    setEmail("")
    setPassword("");
    if(!Email || !Password) {
      toast.error("Please fill all fields");
      return
  }
  if(Password.length < 8) {
      return toast.error("Password should be at least 8 characters!")
  }
  if(!validateEmail(Email)) {
      return toast.error("Please enter valid email")
  }
  else{
      return toast.success("User Logged in")
  }
  }
  return (
    <div className="container-fluid">
      <div className="sigin-wrap">
        <div className="pad-content">
          <h2 className="text-center mb-3">Sign In</h2>
          <form onSubmit={onSubmit}>
            <div className="mb-3">
            Email Address:<input
                type="email"
                className="form-control"
                value={Email}
                onChange={(e)=>setEmail(e.target.value)}
                name="email"
              />
            </div>
            <div className="mb-3">
              Password:<input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                value={Password}
                onChange={(e)=>setPassword(e.target.value)}
                name="password"
              />
            </div>
            <div className="d-flex justify-content-end mb-3">
              <a onClick={() => forget()} href="">
                Forgot Password?
              </a>
            </div>
            <button type="submit" className="btn mb-3" id="signin-btn">
              Sign In
            </button>
            <button type="submit" className="btn mb-3 clr" id="signin-btn">
              Sign in With Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;
