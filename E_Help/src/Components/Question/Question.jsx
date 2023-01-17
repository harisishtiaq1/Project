import React from 'react'
import { useState,useEffect } from 'react'
import {useDispatch} from "react-redux"
import {question} from "../../slices/auth/authSlice"
function Question() {
  const [Title,setTitle]=useState("")
  const [Description,setDescription]=useState("")
  const dispatch=useDispatch();
  const onSubmit=(e)=>{
    e.preventDefault();
    dispatch(question({Title,Description}));
    setTitle("");
    setDescription("");}
  return (
    <div className='container'>
      <div className='signin-wrap'>
        <div className='pad-content'>
      <form onSubmit={onSubmit}>
    <div className='d-flex align-items-center justify-content-center left'>
    <h1>Ask A Question</h1>
    </div>
    <div className='left d-flex flex-column'>
        <h3>Title</h3>
        <p>Be specific and imagine you are asking a question to another person.</p>
        <input type="text" 
        placeholder="Title of your Question" 
        className='form-control'
        value={Title}
        onChange={(e)=>setTitle(e.target.value)}
        name="Title"/>
    </div>
    <div className='left d-flex flex-column'>
        <h3>Description</h3>
        <p>Introduce the problem and expand on what you put in the title.</p>
        <textarea className='form-control' 
        cols="30" 
        rows="8"
         placeholder='What You want to ask'
        value={Description}
        onChange={(e)=>setDescription(e.target.value)}
        name="Description" >
        </textarea>
    </div>
    <button type="submit" className="btn mb-3 clr left" >
              Submit
            </button>
            </form>
    </div>
    </div>
    </div>
  )
}

export default Question