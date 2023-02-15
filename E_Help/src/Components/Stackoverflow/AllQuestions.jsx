import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import './css/AllQuestions.css';
function AllQuestions(){
    return(
        <div className="all-questions">
            <div className="all-questions-container">
            <div className="all-questions-left">
            <div className="all-options">
            <div className="all-option">
                <p>0</p>
                <span>Votes</span>
            </div>
            <div className="all-option">
                <p>0</p>
                <span>Answer</span>
            </div>
            <div className="all-option">
                <small>0 Views</small>
            </div>
            </div>
            </div>
            <div className="question-answer">
                <Link to = "/question">How to use drag and drop in design?</Link>
                <div style={{
                    widtht: "90%"
                }}>
                <div>
                    What I was is an example about how
                    to make the drag and drop of
                    my Table that works properly, but I 
                    make it works
                </div>
            </div>
            <div style={{
                display: "flex",

            }}>
                <span className="quetion-tags">
                    react
                </span>
                <span className="quetion-tags">
                    ant
                </span>
                <span className="quetion-tags">
                    frontend
                </span>
            </div>
            <div className="author">
                <small>Timestamp</small>
                <div className="author-details">
                    <AiOutlineUser />
                    <p>User name</p>
                </div>
            </div>
            </div>
            </div>
        </div>
    );
}
export default AllQuestions