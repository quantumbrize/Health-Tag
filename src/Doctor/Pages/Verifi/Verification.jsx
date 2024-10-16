import React from 'react'
import "./Verify.css"
import { useForm } from 'react-hook-form'
const Verification = () => {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState:{errors,isSubmitting}
  }=useForm()
  const focus_next=(e)=>{
     e.target.nextElementSibling.focus()
     console.log(e.target)
  }
  return (
    <div className='verify'>
      <form action="" style={{height:"80%",width:"90%",border:"2px solid blue"}}>
      <div className="pin">
        <div className="head" style={{position:"relative",left:"-28.5%"}}><h2>Almost there</h2></div>
        <div style={{fontSize:"1em"}}>Please enter the 6-digit code sent to your email for verification</div>
        <div className='inputs'>
        <input type="number" onChangeCapture={focus_next} {...register("n1",{required:{value:true},minLength:{value:1,message:"minimum 1 charecter"}})}/><input type="number" onChangeCapture={focus_next} {...register("n2",{required:{value:true},minLength:{value:1}})}/><input type="number"  onChangeCapture={focus_next} {...register("n3",{required:{value:true},minLength:{value:1}})}/><input type="number" {...register("n4",{required:{value:true},minLength:{value:1}})}/>
      </div>
      <div className="ask"><b>Did'nt receive any code?<span style={{color:"blue"}}>Resend Again</span></b>
      <div className="resend" style={{textAlign:"center",height:"10%"}}>Request new code in 00:30s</div>
      </div>
      </div>
      <button type='submit'>Verify</button>
      </form>
    </div>
  )
}

export default Verification
