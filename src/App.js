import React from 'react'
import {useState} from 'react'
const App = () => {
  const [data,setData]=useState('');
 const [pass,setpass]=useState('');

 

 const [errors,seterrors]=useState({
  data:"",
  pass:""
 })

 const elementpattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._%+-]+\.[a-zA-Z]{2,}$/;

 function handlevent(){
  if(data.trim()===""){
    //we should note that multiple times if we update the varibale using set it can't work for all variables ,
    //so we should use the call back function in the setErrors.
    seterrors((errors)=>({...errors,data:"please enter email"}))
  }
  else if(!elementpattern.test(data)){
    seterrors((errors)=>({...errors,data:"this is invalid email"}))
  }
  else{
    seterrors((errors)=>({...errors,data:""}))
  }
  if(pass.trim()===""){
    seterrors((errors)=>({...errors,pass:"please enter password"}))
  }
  else if(pass.trim().length<8){
    seterrors((errors)=>({...errors,pass:"password have minium characters is 8"}))
  }
  else{
    seterrors((errors)=>({...errors,pass:""}))
  }
 }
  return (
    <>
    <div className='border w-25 mt-5 m-auto p-3'>
      <h2 className='text-primary text-center'>Login form</h2>
      <div>
        <label>Email</label>
        <input type='text' className='form-control' value={data} onChange={(e)=>{
          setData(e.target.value)
        }}/>
        {errors.data&&<span className='text-danger'>{errors.data}</span>}
      </div>
      <div>
        <label>Password</label>
        <input type='text' className='form-control' value={pass} onChange={(e)=>{
          setpass(e.target.value)}}
        />
        {errors.pass&&<span className='text-danger'>{errors.pass}</span>}
      </div>
      <div className='mt-3'>
        <button className='btn btn-primary w-100' onClick={handlevent}
        >Login</button>
      </div>
    </div>
    </>
  )
}

export default App
