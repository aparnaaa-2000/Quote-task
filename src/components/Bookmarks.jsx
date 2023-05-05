import React, { useState } from 'react'
import Navbar from './Navbar'
import './bookmarks.css'

export default function  Bookmarks() {
  const [book,setbook]=useState(JSON.parse(localStorage.getItem("bookmark"))||[])
  console.log("book",book);

  return (
    
      
   
    <div className='all2'>
        <div className='row'>
            <Navbar></Navbar>
        </div>
        <div className='container-fluid'>
            <div className='row'>
              <div className='col'></div>
                <div className='col'id='hai'>
                {/* <div class="form-floating" > */}
                {book.map((value)=>(
                  
  <div class="form-control"   id="floatingTextarea " style={{height:'30vh',width:"50vw",padding:"50px"}}>
    
    
    {value.content}
    {/* <div class="d-flex align-content-between flex-wrap">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
</svg>
</div> */}
    
  
  </div>
  
  ))}
                </div>
                <div className='col'></div>
            </div>
        </div>
    </div>
   
  )
}
