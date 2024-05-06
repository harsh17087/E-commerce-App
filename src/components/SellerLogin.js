import React from 'react'
import axios from 'axios'
import { useState, useRef } from 'react'
import { dataValidate } from '../utils/validate'
import { useNavigate } from 'react-router-dom'
import {SELLER_API_URL} from '../utils/constant.js'
const SellerLogin = () => {
    
    const navigate = useNavigate()

    const [isSignIn,setIsSignIn] = useState(true)
    const [errorMessage,setErrorMessage] = useState("")
    const email = useRef(null)
    const password = useRef(null)
    const name = useRef(null)
    
    const ToggleSignIn=()=>{
        setIsSignIn(!isSignIn)
    }

    const getSellerIdAndNavigate = (email)=>{
        axios.get(SELLER_API_URL).then((res)=>{
            const sellerData = res.data
            const data = sellerData.data.filter((val)=>{return val.email===email})
            temp= data[0]._id
            navigate('/sellerprofile/'+ temp + '/dashboard')
        }).catch((err)=>{})}

    const handleSubmitData=(event)=>{   
        event.preventDefault()
        const msg = dataValidate(email.current.value,password.current.value,isSignIn)
        setErrorMessage(msg)
        if(!isSignIn && errorMessage===null){
            
            const user={
                name:name.current.value,
                email:email.current.value,
                password:password.current.value
            }
            axios.post(SELLER_API_URL,user).then(()=>{
                window.alert("Seller Registered successfully")
                ToggleSignIn()
            }).catch((err)=>{
                if(err.response.status===409){
                    alert("E-mail already in use")
                }
            })
        }else if(isSignIn && errorMessage===null){

            const user={
                email:email.current.value,
                password:password.current.value
            }
            axios.post(SELLER_API_URL +'/'+ 'login',user).then((res)=>{
            
            window.alert("Logged in successfully")
                sessionStorage.setItem("user",user.email)
                getSellerIdAndNavigate(user.email)
                // navigate('/about')
            }).catch((err)=>{
                if(err.response.status==401){
                    alert("Wrong Credentials")
                }
            })
        }
        
    }

    return (
        <div>
            {/* <div className="absolute bg-black text-white my-12 rounded-lg bg-opacity-80">
                <form onSubmit={(e)=>e.preventDefault()} className="my-6">
                    <h1 className="font-bold text-3xl m-2 p-2">{isSignIn?"Sign In":"Sign Up"}</h1>
                    {!isSignIn && (<input className="m-4 p-4 rounded-lg  bg-gray-600 bg-opacity-50" type="text" placeholder="Full Name"/>)}
                    <input ref={email} className="p-4 m-4 rounded-lg  bg-gray-600 bg-opacity-50" type="text" placeholder="E-mail or Phone number"/>
                    <input ref={password} className="m-4 p-4 rounded-lg  bg-gray-600 bg-opacity-50" type="password" placeholder="Password"/>
                    <p className="font-bold text-lg p-2 m-2 text-red-700">{errorMessage}</p>
                    <button className="bg-red-700 m-3 p-3 rounded-lg " onClick={handleSubmitData} type="submit">{isSignIn?"Sign In":"Sign Up"}</button>
                </form>
                {
                    isSignIn?<p className="text-md m-3 p-3">New to Seller ? <button type="button" className="font-bold" onClick={ToggleSignIn}>Sign Up now</button></p>:
                    <p className="text-md m-3 p-3">Already a Seller, <button type="button" className="font-bold" onClick={ToggleSignIn}>Sign In now</button></p>
                }
            </div> */}
            <div className='p-2 m-4 border bg-gray-400 float-right shadow-lg rounded-lg w-8/12'>
                <form onSubmit={(e)=>e.preventDefault()} className="my-6 flex flex-col">
                    <h1 className='text-bold text-3xl m-2 p-2'>{isSignIn?"Sign In":"Sign Up"}</h1>
                    {!isSignIn && <input ref={name} className='m-3 p-3 rounded-lg bg-slate-200' type='text' placeholder='Shop Name'/>}
                    <input ref={email} className='p-3 m-3 rounded-lg bg-slate-200 ' type='text' placeholder='E-mail'/>
                    <input ref={password} className='p-3 m-3 rounded-lg bg-slate-200 ' type='password' placeholder='Password'/>
                    <p className="font-bold text-lg p-1 m-1 text-red-700">{errorMessage} </p>
                    <button className="bg-blue-300 hover:bg-blue-600 m-3 p-3 rounded-lg text-xl" onClick={(e)=>handleSubmitData(e)} type="submit">{isSignIn?"Sign In":"Sign Up"}</button>   
                </form>
                {
                    isSignIn?<p className='text-md m-1 p-1'> New Seller ? <button type='button' className='font-bold hover:underline' onClick={ToggleSignIn}>Sign Up Now</button></p>:
                    <p className='text-md m-1 p-1'>Already a Seller, <button type='button' className='font-bold hover:underline' onClick={ToggleSignIn}>Sign In Now</button></p>
                }
            </div>
        </div>
    )
}

export default SellerLogin
