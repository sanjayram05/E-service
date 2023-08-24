import React, { useEffect, useState } from 'react'
import {BsFillLockFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import {AiOutlineClose} from'react-icons/ai'
import {BiSolidUser} from 'react-icons/bi'
import {useNavigate} from 'react-router-dom';
function UserLogin({showLogin,close}) {
    const [register,setRegister]=useState(false);
    const navigate=useNavigate();
    const handleClick=(value)=>{
        setRegister(value)
    }
    const handleSumbit=()=>{
        navigate('main');
    }
    let check=register?' active':''
    let cls;
    let login=showLogin;
    if(login)
    {
    cls=check+' active-pop'
    }
    else
    {
    cls=check
    }
    console.log(close);
  return (
    <div className={`wrapper${cls}`}>
        <span className='icon-close' onClick={close}><AiOutlineClose/></span>
        <div className='form-box login'>
                    <h2>Login</h2>
            <form action='#' onSubmit={handleSumbit}>
                <div className='input-box'>
                    <span className='icon'><MdEmail/></span>
                    <input type='email' id='email' />
                    <label for='email'>Email</label>
                </div>
                <div className='input-box'>
                    <span className='icon'><BsFillLockFill/></span>
                    <input type='password' id='password' />
                    <label for='password'>password</label>
                </div>
                <div className='remember-forgot'>
                   <label><input type='checkbox' id='remember'/>Remember me</label> 
                    <a href='#'>forgot password ?</a>
                </div>
                <button type='submit' className='btn'>Login</button>
                <div className='login-register'>
                    <p>Dont have an account ?<a className='register-link' onClick={()=>handleClick(true)} >Register</a></p>
                    
                </div>
            </form>
        </div>
        <div className='form-box register'>
                    <h2>Register</h2>
            <form action='#'>
            <div className='input-box'>
                    <span className='icon'><BiSolidUser/></span>
                    <input type='text' id='userName' />
                    <label for='userName'>User Name</label>
                </div>
                <div className='input-box'>
                    <span className='icon'><MdEmail/></span>
                    <input type='email' id='emailReg' />
                    <label for='email'>Email</label>
                </div>
                <div className='input-box'>
                    <span className='icon'><BsFillLockFill/></span>
                    <input type='password' id='passwordReg' />
                    <label for='password'>password</label>
                </div>
                <div className='remember-forgot'>
                   <label><input type='checkbox' id='rememberReg'/>Agree to the terms and condition</label> 
                    
                </div>
                <button type='submit' className='btn'>Register</button>
                <div className='login-register'>
                    <p>Already have an account ?<a className='login-link' onClick={()=>handleClick(false)} >Login</a></p>
                    
                </div>
            </form>
        </div>
    </div>

  )
}

export default UserLogin
