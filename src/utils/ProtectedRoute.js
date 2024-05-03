import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ProtectedRoute = (props) => {
    
    const {RoutingComponent}= props
    const nav=useNavigate();

    useEffect(()=>{
        if(!sessionStorage.getItem("user")){
            nav('/seller')
        }
    },[])
    
    return (
        <div>
            <RoutingComponent/>
        </div>
    )
}

export default ProtectedRoute
