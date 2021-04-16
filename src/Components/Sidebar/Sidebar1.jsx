import React,{useState} from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { Navbar } from '../Navigation/Navbar';
import { Footer } from '../Footer/Footer';
const Wrapper=styled.div`
width:20%;
background-color:#f5f5f5;
`



export const Sidebar=()=>{
  const [drop,setDrop]=useState(false)
  const [drop2,setDrop2]=useState(false)
  const [sub,setSub]=useState(true)
  const [sub1,setSub1]=useState(true)
  const handledrop=()=>{
    setDrop(!drop)
    setSub(!sub)
  }

  const handledrop2=()=>{
    setDrop2(!drop2)
    setSub1(!sub1)
  }

  return(
  <div>
    <Navbar/>
    <Wrapper>
    <p style={{padding:'10px 10px'}}>Filter Result</p>
    <p style={{padding:'10px 10px'}}>Category</p>
     <div style={{padding:'10px 10px'}}>
     <p onClick={handledrop}>Tech & Innovation{drop?<FontAwesomeIcon icon={faChevronUp} style={{marginLeft:'10px'}} />:<FontAwesomeIcon icon={faChevronDown}/>}</p>
       <div onClick={()=>handledrop()}>
         {
         sub?<div style={{display:"block",padding:'10px 10px'}}> 
           <p>Audio</p>
           <p>Camera Gear</p>
         </div>
         : <div style={{display:"none"}}>
            <p></p>
          </div>}
       </div>
     </div>
     <div style={{padding:'10px 10px'}}>
     <p onClick={handledrop2}>Creative Work{drop2?<FontAwesomeIcon icon={faChevronUp} style={{marginLeft:'10px'}}  />:<FontAwesomeIcon icon={faChevronDown}/>}</p>
       <div onClick={()=>handledrop2()}>
         {
         sub1?<div style={{display:"block"}}> 
           <p>Art</p>
           <p>Music</p>
         </div>
         : <div style={{display:"none"}}>
            <p></p>
          </div>}
       </div>
     </div>
    <p style={{padding:'10px 10px'}}>Project timing</p>
    <form style={{padding:'10px 10px'}}>
      <label><input type="checkbox"/>All</label><br/>
      <label><input type="checkbox"/>Launching</label><br/>
      <label><input type="checkbox"/>Ending</label>
    </form>
    </Wrapper>
     <Footer/>
    </div>
  )
}