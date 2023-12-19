import React , {useState, useEffect}from 'react'
import Header from './Header'
import axios from 'axios'
import Loader from './Loader'
import Timer from './Timer'
const Verify = () => {
 
  const [otp, setotp] = useState(0)
const otpfn = (e)=>{
    setotp(e.target.value)
    console.log(e.target.value)


}

const [loader, setloader] = useState(0);
  const next = async ()=>{


setloader(1);
    const response =  await axios.post('https://server-hs4q.onrender.com/getotp',{otp});
    console.log("see ", response.data)
 
 
  }
 
 
  return (
    <>
        <div>

<Header></Header>

<div style={{height:'90vh',display:'flex', justifyContent:'center', alignItems:'center',flexDirection:'column',gap:'20px'}}>
    <div style={{display:'flex', justifyContent:'center', alignItems:'center',flexDirection:'column',gap:'20px', padding:'20px', border:'1px solid #ccc'}}>

<img src="/e.png" height={"150px"} width={"150px"} alt="" />
    <input onChange={otpfn} placeholder='OTP' type="text" />
    {loader?<></>:<Timer />}
    {loader?<Loader />:<></>}
    {loader?<div>Do not Close the window</div>:<></>}
 
 <div style={{display:'flex', gap:'20px'}}>
 <button style={{padding:'10px 20px 10px 20px', background:'#f2f2f2', color:'grey', border:'none'}} onClick={"next"}>Resend</button>
 <button style={{padding:'10px 20px 10px 20px', background:'#16b7e1', color:'white', border:'none'}} onClick={next}>Update</button>

 </div>
    </div>

    </div>

        </div>
    
    </>
  )
}

export default Verify