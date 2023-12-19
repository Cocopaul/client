import React from 'react'
import { useNavigate } from 'react-router-dom';


const Header = () => {
    const navigate = useNavigate();

    const next = ()=>{
   navigate('/')
   
    }
 
 return (
<>


<div style={{display:'flex',borderBottom:'1px solid #ccc', justifyContent:'space-around', alignItems:'center',background:'white', height:'10vh'}}>

<div onClick={next}><img src="/e.png" height={"80px"}  width={"80px"} alt="" /></div>

<div>Login</div>

</div>

</>
  )
}

export default Header