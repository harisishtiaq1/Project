import React from 'react'
import haris1 from "../Profile/haris1.jpg"
import "../Profile/Profile.css"
function Profile() {
  return (
    <div className='container'>
      <div className='signin-wrap'>
        <div className='pad-content'>
        <div className='d-flex'>
       <img src={haris1} style={{"width":"150px"}} alt="Avatar" />
        <div className='d-flex left flex-column'>
            <h2 className='color'>Muhammad Haris Ishtiaq</h2>
            <h4>Member Since 6 January</h4>
            <button type="submit" className="btn mb-3" id="signin-btn">
              Edit Profile
            </button>
        </div>
       </div>
       <div className='left'>
        <h2 className='color'>Questions:</h2>
        <p>Here we will show the number of Questions You have asked</p>
       </div>
       <div className='left'>
        <h2 className='color'> Answers:</h2>
        <p>Here we will show the Answers you have replied or commented on any question</p>
       </div>
       <div className='left'>
        <h2 className='color'>Points:</h2>
        <p>Total points you have gained by Asking questions or replying to any question</p>
       </div>
       <div className='left'>
        <h2 className='color'>Trophies:</h2>
        <p>Trophies you have gained on the basis of your points</p>
       </div>
        </div>
           
        </div>
      </div>
  )
}

export default Profile