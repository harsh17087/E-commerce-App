import { useState,useEffect } from "react"
import { API_URL, MY_API_URL } from "./constant"
const useProductDetail = (prodId) => {
    
    const [prodDetail,setprodDetail] = useState(null)
    
    useEffect(()=>{
        fetchData()
    },[])

    const fetchData= async ()=>{
        // const data = await fetch(API_URL+'/'+ prodId)
        const data = await fetch(MY_API_URL+'/'+ prodId)
        const json = await data.json()
        setprodDetail(json.data)
    }
    console.log(prodDetail)
    return prodDetail
        
    
}

export default useProductDetail
