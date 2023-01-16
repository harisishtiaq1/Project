import React from 'react'

function UpdateProfile() {
  return (
    <div className="container-fluid">
            <div className="sigin-wrap">
                <div className="pad-content">
                    <h2 className="text-center mb-3">Update Profile</h2>
                    <form>
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="New Name"
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="New Email Address"
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="file"
                                placeholder="image"
                                className="form-control"
                            />
                        </div>
                        <button type="submit" className="btn mb-3" id="signup-btn">
                            Update Profile
                        </button>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default UpdateProfile