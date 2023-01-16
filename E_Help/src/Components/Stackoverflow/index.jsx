import React from 'react';
import './css/index.css';
import Sidebar from './sidebar';
import Main from './Main';
import Header from '../Header/Header';


function index(){
    return(
        <div className='stack-index'>
            <div className='stack-index-content'>
              <Sidebar />
              <Main />
            </div>
        </div>
    )
}
export default index;
