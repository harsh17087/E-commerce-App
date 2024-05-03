import axios from 'axios'
import React from 'react'
import { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {MY_API_URL} from '../utils/constant'
const SellerAddProduct = () => {
    
    const navigate = useNavigate()
    
    const title = useRef(null)
    const price = useRef(null)
    const description = useRef(null)
    const category = useRef(null)
    const image = useRef(null)

    const {id} = useParams()
    console.log(id)
    const handleSubmit=(event)=>{
        event.preventDefault()
        const prodData = {
            sellerId:id,
            title:title.current.value,
            price:price.current.value,
            description:description.current.value,
            category:category.current.value,
            image:image.current.value,
            rating:{
                rate:0,
                count:0
            }
        }
        axios.post(MY_API_URL,prodData).then(()=>{
            window.alert("Product added successfully")
            navigate('../dashboard')
        }).catch((err)=>{})
    }
    
    return (
        <div className=''>
            <h1 className='p-2 m-2 font-bold text-3xl text-center'>Add New Product</h1>
            <div className='p-2 ml-[20%]'>
                <form className='border border-gray-600 w-8/12 bg-slate-200 shadow-lg'>
                    <div className='p-2 m-1 flex items-center'>
                        <p className='w-3/12 text-xl'>Product Title</p>
                        <input type='text' placeholder='Milton Water Bottle' ref={title} className='w-9/12 p-2 m-2 focus:outline-none border border-gray-600 rounded-lg focus:shadow-lg'/>
                    </div>
                    <div className='p-2 m-1 flex items-center'>
                        <p className='w-3/12 text-xl'>Product Price</p>
                        <input type='number' placeholder='100.00' ref={price} className='w-9/12 p-2 m-2 focus:outline-none border border-gray-600 rounded-lg focus:shadow-lg'/>
                    </div>
                    <div className='p-2 m-1 flex items-center'>
                        <p className='w-3/12 text-xl'>Product Description</p>
                        <input type='text' placeholder='1 L water bottle for both summers and Winters' ref={description} className='w-9/12 p-2 m-2 focus:outline-none border border-gray-600 rounded-lg focus:shadow-lg'/>
                    </div>
                    <div className='p-2 m-1 flex items-center'>
                        <p className='w-3/12 text-xl'>Product Category</p>
                        <input type='text' placeholder='Home and Kitchen' ref={category} className='w-9/12 p-2 m-2 focus:outline-none border border-gray-600 rounded-lg focus:shadow-lg'/>
                    </div>
                    <div className='p-2 m-1 flex items-center'>
                        <p className='w-3/12 text-xl'>Product Image URL</p>
                        <input type='text' placeholder='www.cloudinary.com/842gd.png' ref={image} className='w-9/12 p-2 m-2 focus:outline-none border border-gray-600 rounded-lg focus:shadow-lg'/>
                    </div>
                    <div className='text-center'>
                        <button type='submit' onClick={(e)=>handleSubmit(e)} className='w-4/12 p-2 m-2 rounded-full bg-blue-400 hover:bg-blue-600'>Submit</button>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}

export default SellerAddProduct
