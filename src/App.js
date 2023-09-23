import { TextField, Button }  from '@mui/material';
import './App.css';
import { useState } from 'react';

function App() {
  const [uname,setUname] = useState(0)
  const [email,setEmail] = useState(0)
  const [password,setPassword] = useState(0)
  const [confirmPassword,setConfirmPassword] = useState(0)
  const [isNameValid, setIsNameValid] = useState(true)
  const [isEmailValid, setIsEmailValid] = useState(true)
  const [isPasswordValid, setIsPasswordValid] = useState(true)
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(true)

  const validateInput = (e)=>{
    const {name,value}= e.target
    if(name==='uname'){
      if(!!value.match(/^[A-Za-z]+$/)){
        setUname(value)
        setIsNameValid(true)
    }else{
      setUname(value)
        setIsNameValid(false)
    }
  }else if(name==='email'){
    if(!!value.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/)){
      setEmail(value)
        setIsEmailValid(true)
    }else{
      setEmail(value)
      setIsEmailValid(false)
    }
  }else if(name==='password'){
    if(!!value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)){
      setPassword(value)
        setIsPasswordValid(true)
    }else{
      setPassword(value)
      setIsPasswordValid(false)
    }
  
}else if(name==='confirmPassword'){
  if(value===password){
    setConfirmPassword(value)
      setIsConfirmPasswordValid(true)
  }else{
    setConfirmPassword(value)
    setIsConfirmPasswordValid(false)
  }
}
}

const signup = (e)=>{
  e.preventDefault()
  if(!uname || !email || !password || !confirmPassword){
    alert("Please Fill The Form Completely..!")
  }else{
    alert(`---User Details---
           Name: ${uname}
           Email: ${email}
           Password: ${password}
           Confirm Password: ${confirmPassword}`)
  }

}
console.log(isPasswordValid);
  return (
    <div style={{height: '100vh', background: 'linear-gradient(to bottom right, #3333cc 0%, #990099 100%)'}}  className="d-flex justify-content-center align-items-center w-100 ">
     <div style={{width:'500px'}} className='bg-light p-5 rounded'>
        <h3 className='text-center'>Register</h3>
        <hr />

        <form onSubmit={signup}>
          <div>
          <TextField className='w-100 mt-3' id="standard-basic" label="Name" variant="standard" name="uname"  onChange={(e)=>validateInput(e)}/>
          </div>
          {
              !isNameValid &&
              <div className='mb-3 text-danger'>
                *Invalid User Input
              </div>
            }
          <div>
          <TextField className='w-100 mt-3' id="standard-basic" label="Email" variant="standard" name="email"  onChange={(e)=>validateInput(e)}  />
          </div>
          {
              !isEmailValid &&
              <div className='mb-3 text-danger'>
                *Invalid User Input
              </div>
            }
          <div>
          <TextField type="password" className='w-100 mt-3' id="standard-basic" label="Password" variant="standard" name="password" onChange={(e)=>validateInput(e)}/>
          </div>
          {
              !isPasswordValid &&
              <div className='mb-3 text-danger'>
                *Password must includes 8 characters with atleast one special character, uppercase, lowercase and number
              </div>
            }
          <div>
          <TextField disabled={password && isPasswordValid?false:true} type="password" className='w-100 mt-3' id="standard-basic" label="Confirm Password" variant="standard" name="confirmPassword" onChange={(e)=>validateInput(e)} />
          </div>
          {
              !isConfirmPasswordValid &&
              <div className='mb-3 text-danger'>
                *Password Do Not Match
              </div>
            }
          <div className='mt-5 d-flex justify-content-center align-items-center'>
          <Button type='submit' style={{border: '1px solid', borderRadius: '50px'}} className='w-75 '  variant="outlined"
          disabled = {isNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid ?false:true}
          >Sign Up</Button>
          </div>
          <div className='text-center mt-3'>
            <p>Have an Account?&nbsp;  <a style={{textDecoration:'none'}} href="">login here</a></p>
          </div>
        </form>
      </div>
    </div>
  );
  }

export default App;
