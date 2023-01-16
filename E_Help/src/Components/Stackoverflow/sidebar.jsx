import React from 'react';
import { BsGlobe2 } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { BsFillBagFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import './css/Sidebar.css';

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar-container'>
                <div className='sidebar-options'>
                    <div className='sidebar-option'>
                        <Link>Home</Link>
                    </div>
                    <div className='sidebar-option'>
                        <Link>PUBLIC</Link>
                        <div className='link'>
                            <div className='link-tag'>
                                <BsGlobe2 className="icons" />
                                <Link>Question</Link>
                            </div>
                            <div className='tags'>
                                <p>Users</p>
                                <p>Tags</p>
                            </div>
                        </div>
                    </div>
                    <div className='sidebar-option'>
                        <p>Collectives</p>
                        <div className='link'>
                            <div className='link-tag'>
                                <BsStar className="icons" />
                                <Link>Explore Collectives</Link>
                            </div>
                        </div>
                    </div>
                    <div className='sidebar-option'>
                        <p>Find A Job</p>
                        <div className='link'>
                            <div className='link-tag'>
                                <Link>Question</Link>
                            </div>
                        </div>
                    </div>
                        <div className='sidebar-option'>
                            <p>TEAMS</p>
                            <div className='link-tag'>
                               <BsFillBagFill className="icons" />
                               <Link>Companies</Link>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}
export default Sidebar;