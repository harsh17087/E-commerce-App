import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import {SELLER_API_URL} from '../utils/constant'
import Shimmer from './Shimmer'

const SellerProfileDetails = () => {
    
    const {id} = useParams()
    const [sellerData, setSellerData] = useState({})

    const fetchData=async()=>{
        const data =await fetch(SELLER_API_URL + '/' + id)
        const json = await data.json()
        setSellerData(json.data)
        console.log(sellerData)

        if(sellerData.length===0){
            return <Shimmer/>
        }
    }
    useEffect(()=>{
        fetchData()
    
    },[])
    
    return (
        <div className='space-y-12'>
            <h1 className='p-2 m-2 font-bold text-center text-3xl'>Seller Details</h1>
            {sellerData && <div className='mx-auto p-2 bg-purple-100 shadow-lg w-6/12 '>
                <img className='h-24 w-24 mx-auto rounded-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQILTZ58qc5rSZUrNH02k3Xuq8OhsBb9kvQ_HSSEa3eSA&s'/>
                <div className='space-y-4'>
                    <h1 className='text-2xl'>Shop Name  <b>{sellerData?.name?.charAt(0).toUpperCase() + sellerData?.name?.slice(1)}</b></h1>
                    <h1 className='text-2xl'>E-mail  <b>{sellerData?.email}</b></h1>
                    <h1 className='text-2xl'>Seller Id  <b>{sellerData?._id}</b></h1>
                </div>
            </div>}
        </div>
    )
}

export default SellerProfileDetails
