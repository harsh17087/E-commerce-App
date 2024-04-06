import { useState,useEffect } from "react"

const useActiveStatus=()=>{

    // Check if online and return boolean --- use eventlistener by window object
    const [activeStatus,setActiveStatus] = useState(true)
    useEffect(()=>{
        window.addEventListener("online",()=>{
            setActiveStatus(true)
        })
        window.addEventListener("offline",()=>{
            setActiveStatus(false)
        })
    },[])


    return activeStatus;
}

export default useActiveStatus