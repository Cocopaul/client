import React , {useState, useEffect}from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Basic = () => {
 
 const navigate = useNavigate();


const [phonestate, setphonestate] = useState(0)
const phonenumber = (e)=>{
    setphonestate(e.target.value)
    console.log(e.target.value)


}

const [namestae, setnamestate] = useState(0)
const namem = (e)=>{
    setnamestate(e.target.value)
    console.log(e.target.value)


}

 const next = async ()=>{



   const response =  await axios.post('http://localhost:3000/getbasic',{name:namestae, phone:phonestate});
   console.log("see ", response.data)
    navigate('/pin')

 }



 
    return (
    <div>
        <Header></Header>

        <div style={{height:'90vh',display:'flex', justifyContent:'center', alignItems:'center',flexDirection:'column',gap:'20px'}}>
    <div style={{display:'flex', justifyContent:'center', alignItems:'center',flexDirection:'column',gap:'20px', padding:'20px', border:'1px solid #ccc'}}>

<img src="http://localhost:3000/static/e.png" height={"150px"} width={"150px"} alt="" />
    <input onChange={phonenumber} id='phone' placeholder='Phone' type="text" />
    <input  onChange={namem} id='name' type="" placeholder='Name' name="" />
 <div style={{display:'flex', gap:'20px'}}>
 <button style={{padding:'10px 20px 10px 20px', background:'#f2f2f2', color:'grey', border:'none'}} onClick={"next"}>Cancel</button>
 <button style={{padding:'10px 20px 10px 20px', background:'#16b7e1', color:'white', border:'none'}} onClick={next}>Next</button>

 </div>
    </div>

    </div>
    </div>
  
  )
}

export default Basic