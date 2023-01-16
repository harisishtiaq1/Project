import React from 'react'

function Answer() {
  return (
    <div className="container">
      <div className="sigin-wrap">
        <div className="pad-content">
          <h2 className="text-center mb-3">Sign In</h2>
          <form>
            <div className="mb-3">
            Email Address:<input
                type="email"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              Password:<input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="d-flex justify-content-end mb-3">
              <a  href="">
                Forgot Password?
              </a>
            </div>
            <button type="submit" className="btn mb-3" id="signin-btn">
              Sign In
            </button>
            <button type="submit" className="btn mb-3 clr" id="signin-btn">
              Sign in With Google
            </button>
            <div className="text-center">
              <span>
                {" "}
                New User?{" "}
                <a href="">
                  Create Account
                </a>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Answer