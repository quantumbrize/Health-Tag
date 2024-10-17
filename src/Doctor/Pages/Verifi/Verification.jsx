import React from 'react'
import "./Verify.css"
import { useForm } from 'react-hook-form'
import { useEffect,useState} from 'react'
import { FaAngleLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Verification = () => {
  const [time,updateTime]=useState(30)
  const [norep,setNorep]=useState(true)

  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState:{errors,isSubmitting}
  }=useForm()
  const focus_next=async (e)=>{
     e.target.nextElementSibling.focus()
  }
  useEffect(()=>{
    let first=document.getElementById("n1")
    first.focus()
  },[norep])
  useEffect(() => {
    let x;
      x = setInterval(() => {
        updateTime((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(x);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);

    // Cleanup interval when component unmounts
    return () => clearInterval(x);
  }, [norep]); 
 const updateRep=()=>{
  if(norep)
    setNorep(false)
  else
   setNorep(true)

  updateTime(30)
 }
 const on_submit=async (e)=>{
  e.preventDefault()
  window.location="/login"
 }
 const handlekeydown=async (e)=>{
  await new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve()
    },50)
  })
  if(e.key==='Backspace' || e.key==='Delete'){
    e.target.previousElementSibling ? e.target.previousElementSibling.focus():e.target.focus()
  }
 }
  return (
    <div className='verify'>
      <form action="" style={{height:"80%",width:"90%"}} onSubmit={on_submit}>
      <div className="pin">
        <div className="head" style={{position:"relative"}}><h2>Almost there</h2></div>
        <div style={{fontSize:"1em"}}>Please enter the 4-digit code sent to your email for verification</div>
        <div className='inputs'>
        <input type="number"  id='n1' onChangeCapture={focus_next} onKeyDown={handlekeydown}   {...register("n1",{required:{value:true,message:"every box must be filled"},minLength:{value:1,message:"minimum 1 charecter"}})}/><input type="number" onChangeCapture={focus_next} onKeyDown={handlekeydown} {...register("n2",{required:{value:true,message:"every box must be filled"},minLength:{value:1}})}/><input type="number"  onChangeCapture={focus_next} onKeyDown={handlekeydown} {...register("n3",{required:{value:true,message:"every box must be filled"},minLength:{value:1}})}/><input type="number" onKeyDown={handlekeydown} {...register("n4",{required:{value:true,message:"every box must be filled"},minLength:{value:1}})}/>
      </div>
      <div className="ask"><b>Did'nt receive any code? <span onClick={updateRep} style={{color:"blue",cursor:"pointer"}}>Resend Again</span></b>
      <div className="resend" style={{textAlign:"center",height:"10%"}}>Request new code in 00:{time}s</div>
      </div>
      </div>
      <button style={{width:"90%",height:"9%",backgroundColor:"rgb(204, 149, 245)",border:"none",color:"white",borderRadius:"5px",fontSize:"1.2em"}} type='submit'>Verify</button>
      </form>
      <Link className='back-button' style={{position:"absolute",height:"9%",backgroundColor:"black",bottom:"-2%",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",color:"white"}} to={"/signup"}> <FaAngleLeft/> </Link>
    </div>
  )
}

export default Verification
