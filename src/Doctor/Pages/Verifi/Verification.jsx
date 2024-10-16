import React from 'react'
import "./Verify.css"
import { useForm } from 'react-hook-form'
import { useEffect,useRef ,useState} from 'react'
const Verification = () => {
  const [time,updateTime]=useState(30)
  const fst_in=useRef()
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState:{errors,isSubmitting}
  }=useForm()
  const focus_next=(e)=>{
     e.target.nextElementSibling.focus()
  }
  useEffect(()=>{
    let first=document.getElementById("n1")
    first.focus()
    
  },[])
  return (
    <div className='verify'>
      <form action="" style={{height:"80%",width:"90%"}}>
      <div className="pin">
        <div className="head" style={{position:"relative",left:"-29%"}}><h2>Almost there</h2></div>
        <div style={{fontSize:"1em"}}>Please enter the 6-digit code sent to your email for verification</div>
        <div className='inputs'>
        <input type="number" id='n1' onChangeCapture={focus_next}  {...register("n1",{required:{value:true,message:"every box must be filled"},minLength:{value:1,message:"minimum 1 charecter"}})}/><input type="number" onChangeCapture={focus_next} {...register("n2",{required:{value:true,message:"every box must be filled"},minLength:{value:1}})}/><input type="number"  onChangeCapture={focus_next} {...register("n3",{required:{value:true,message:"every box must be filled"},minLength:{value:1}})}/><input type="number" {...register("n4",{required:{value:true,message:"every box must be filled"},minLength:{value:1}})}/>
      </div>
      <div className="ask"><b>Did'nt receive any code? <span style={{color:"blue",cursor:"pointer"}}>Resend Again</span></b>
      <div className="resend" style={{textAlign:"center",height:"10%"}}>Request new code in 00:{time}s</div>
      </div>
      </div>
      <button style={{width:"90%",height:"9%",backgroundColor:"rgb(204, 149, 245)",border:"none",color:"white",borderRadius:"5px",fontSize:"1.2em"}} type='submit'>Verify</button>
      </form>
    </div>
  )
}

export default Verification
