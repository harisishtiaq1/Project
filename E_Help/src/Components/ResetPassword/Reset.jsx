import React from 'react'
import "../ResetPassword/Reset.css"
function Reset() {
  return (
    <>
    <div className="container-fluid">
      <div className="sigin-wrap">
        <div className="pad-content">
          <h2 className="text-center mb-3">Reset Password</h2>
          <form>
          <span className='mb-3'>
            <p>Enter Your Password Again </p>
          </span>
          <div className="mb-3">
              Password:<input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3">
             Confirm Password:<input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <button type="submit" className="btn mb-3" id="signin-btn">
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
    
  </>
  )
}

export default Reset
