import React from "react";
import "react-quill/dist/quill.snow.css";
import { Link } from "react-router-dom";
import { AiOutlineArrowUp } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";
import { Avatar } from "@mui/material";
import { useState } from "react";
import './index.css';
import ReactQuill from "react-quill";

function MainQuestion() {
    const [show, setShow] = useState(false)
    return (
        <div className="main">
            <div className="main-container">
                <div className="main-top">
                    <h2 className="main-question">This is question title</h2>
                    <Link to='/add-question'>
                        <button>Ask Question</button>
                    </Link>
                </div>
                <div className="main-desc">
                    <div className="info">
                        <p>Timestamp</p>
                        <p>Active<span>today</span></p>
                        <p>Viewed<span>43 times</span></p>
                    </div>
                </div>
                <div className="all-questions">
                    <div className="all-questions-container">
                        <div className="all-questions-left">
                            <div className="all-options">
                                <p className="arrow"> <AiOutlineArrowUp /> </p>
                                <p className="arrow">0</p>
                                <p className="arrow"> <AiOutlineArrowDown /> </p>
                            </div>
                        </div>
                        <div className="question-answer">
                            <p>This is question body</p>
                            <div className="author">
                                <small>asked "Timestamp</small>
                                <div className="auth-details">
                                    <Avatar />
                                    <p>Author name</p>
                                </div>
                            </div>
                            <div className="comments">
                                <div className="comment">
                                    <p> This is comment body = <span>User name</span> <small>Timestamp</small> </p>
                                </div>
                                <p onClick={() => setShow(!show)}>Add a comment</p>
                                {
                                    show && (<div className="title">
                                        <textarea style={{
                                            margin:'5px 0px',
                                            padding: "10px",
                                            border: '1px solid orange',
                                            borderRadius:'3px',
                                            outline:'none',
                                        }} type="text" placeholder="Add your comment..." rows={5} ></textarea>
                                        <button style={{
                                            maxwidth: 'fit-content'
                                        }}>Add comment</button>
                                    </div>
                                    )}
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{
                    flexDirection: 'column',

                }} className="all-questions">
                    <p style={{
                        marginBottom: '20px',
                        fontSize:"1.3rem",
                        fontWeight: '300'
                    }}>No of answer</p>
                    <div className="all-questions-container">
                        <div className="all-questions-left">
                            <div className="all-options">
                                <p className="arrow"> <AiOutlineArrowUp /> </p>
                                <p className="arrow">0</p>
                                <p className="arrow"> <AiOutlineArrowDown /> </p>
                            </div>
                        </div>
                        <div className="question-answer">
                            <p>This is answer body</p>
                            <div className="author">
                                <small>asked "Timestamp</small>
                                <div className="auth-details">
                                    <Avatar />
                                    <p>Author name</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-answer">
                <h3 style={{
                    fontSize: "22px",
                    margin: "10px 0",
                    fontweight: "400"
                }}>Your answer</h3>
                {/* <ReactQuill className="react-quill" theme="snow" style={{
                    // height:'20px'
                }}/> */}
                <ReactQuill className="react-quill" theme="snow" style={{
                    height: '200px'
                }}/>
            
            </div>
            <button style={{
                maxWidth: 'fit-content',
                marginTop: '100px'
            }} >Post your Answer</button>
        </div>
        

    )
}

export default MainQuestion;
