import React, { useContext, useEffect, useState } from 'react'
import './home.css'
import Navbar from './Navbar'
import axios from 'axios';
import { Logincontext } from '../Context/Logincontext';

export default function Home() {
  const {setuser,user}=useContext(Logincontext)
  console.log("user",user);


  const [ state,setstate] = useState({})
  
  const [view,setview]=useState([])
  const [bookmark,setbookmark]=useState(JSON.parse(localStorage.getItem("bookmark"))||[])
  console.log("bookmark",bookmark);  


  useEffect(()=>{
    axios.get(' https://api.quotable.io/random').then((response)=>{
      console.log("res",response.data);
      setstate(response.data)
    })
  },[])
  const next=()=>{
    axios.get('https://api.quotable.io/random').then((values)=>{
      console.log("val",values.data);
      setstate(values.data)
    })
  }
  // useEffect(()=>{
  //   axios.get('https://api.quotable.io/tags').then((data)=>{
  //     console.log("data",data.data);
  //     settags(data.data)
  //   })
  // },[])

  useEffect(()=>{
    axios.get('https://api.quotable.io/tags').then((data)=>{
      console.log("data",data.data);
      setview(data.data)
    })
  },[])

  const changedrop =(id)=>{
    console.log("id",id);
    axios.get(`https://api.quotable.io/random?tags=${id}`).then((keys)=>{
      console.log("keys",keys);
      setstate(keys.data)
      
    }).catch((error)=>{
      console.log("error",error);
    })
  }
  const add =(id)=>{
    const filter = bookmark.filter((filtereddata)=>{
      return filtereddata._id==id._id
      
      
    })
    console.log("filtereddata====",filter[0]);
    if(filter[0]==undefined){
      setbookmark([...bookmark,id])
    
    const book = localStorage.setItem("bookmark",JSON.stringify(bookmark))
    console.log("book===>",book);
    

    }

    
  }


  return (
    
   <div  >
    <div className='row' >
      <Navbar></Navbar>
    </div>
    <div className='container-fluid '   >
      <div className='row'> 
      <div className='col'></div>
        <div className='col' > 
          {/* <input type='text'id='box'></input> */}
          <div class="form-floating" >
  <div  class="form-control" placeholder="Leave a comment here"   id="floatingTextarea" style={{height:'50vh',width:"50vw",paddingBottom:"50px"}}>
   <div ><h4 >{state.content}</h4></div>
   
   <div className='auth'><h6  >~{state.author}</h6></div>
   <div className='book'>
   <div class="d-flex justify-content-center">
   <svg onClick={()=>{add(state)}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-fill" viewBox="0 0 16 16">
  <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/>
</svg>
</div>
   </div>
  </div>
  <label for="floatingTextarea"></label>
  

</div>

          

        </div>
        <div className='col'></div>

        
      </div>  <br /><br />
      <div className='row'>
                <div className='col'></div>
      <div  className='col'>/
      <div class="dropdown" id='drop'>
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Select The Topic
  </button>
  <ul class="dropdown-menu">
  {view.map((drop)=>(
    <li><a class="dropdown-item" onClick={()=>changedrop(drop.name)} href="#">{drop.name}</a></li>
    ))}  
  </ul>
</div>

{/* {view.map((drop)=>(      
  <select class="form-select" name='name' onClick={()=>changedrop(drop.name)}   aria-label="Default select example">
  
    <option selected>CATEGORIES:</option>
    
    <option value="name"  >{drop.name}</option>
   
  
    
  </select>
  ))}   */}

    
</div>


<div className='col'></div>


 
    </div>
    
<div className='row'>
<div className='col'></div>
<div className='col' id='but'>
<button type="button" onClick={next}  class="btn btn-success">Next Quote</button>
</div>
<div className='col'></div>
</div>
    
    </div>
   </div>
  
  )
}
