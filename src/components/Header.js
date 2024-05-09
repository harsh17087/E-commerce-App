import  {Link}  from "react-router-dom"
import useActiveStatus from "../utils/useActiveStatus.js"
import {useDispatch, useSelector} from "react-redux"
import { useEffect, useState } from "react"
import PersonIcon from '@mui/icons-material/Person';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {removeUser} from "../utils/userSlice.js";
import { useNavigate } from "react-router-dom";
const Header= ()=>{
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const activeStatus=useActiveStatus()
    const cartItems = useSelector((store)=>store.cart.items)
    const userLoggedIn = useSelector((store)=>store.user)

    const handleLogOut = (event)=>{
        event.preventDefault()
        if(window.confirm("You're leaving too soon, confirm to log out")){
            dispatch(removeUser())
            sessionStorage.clear()
            window.alert("Successfully logged out")
            navigate('/')
        }
    }

    // Subscribing to the cart store
    return(
        <div className=" h-[80px] flex justify-between mb-2 shadow-md bg-gray-200">
            <div className="flex items-center">
                <img className="w-20 rounded-full m-2" src="https://tse2.mm.bing.net/th/id/OIP.Jc4_fewy2DM4SNzlqWDRYAHaHa?rs=1&pid=ImgDetMain"></img>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4 items-center">
                    <li className="px-4 text-xl ">{activeStatus?"Online🟢":"Offline🔴"}</li>
                    <li className="px-4 text-xl rounded-lg hover:bg-green-200 hover:shadow-inner "><Link to='/'>Shop</Link></li>
                    <li className="px-4 text-xl rounded-lg hover:bg-green-200 hover:shadow-inner"><Link to='/seller'>Seller</Link></li>
                    <li className="px-4 text-xl rounded-lg hover:bg-green-200 hover:shadow-inner"><Link to='/about'>About</Link></li>
                    <li className="px-4 text-xl rounded-lg hover:bg-green-200 hover:shadow-inner"><Link to='/contact'>Contact</Link></li>
                    <li className="px-4 text-2xl rounded-lg hover:bg-green-200 hover:shadow-inner"><Link className="font-bold" to='/cart'>🛒{cartItems.length}</Link></li>
                    {userLoggedIn? <li className="px-4 rounded-lg hover:bg-green-200 hover:shadow-inner group  relative dropdown  cursor-pointer  tracking-wide">
                        <PersonIcon/><ArrowDropDownIcon/>
                        <div class="group-hover:block dropdown-menu absolute hidden h-auto rounded-lg ml-[-20px] min-w-fit">
                        <ul class="bg-white w-32">
                            <Link to='user'><li class="px-1 hover:bg-slate-300 hover:font-bold">Your Profile</li></Link>
                            <Link><li class="px-1 py-1 hover:bg-slate-300 hover:font-bold">Order History</li></Link>
                            <li class="px-1 py-1 hover:bg-red-500 hover:font-bold"><button onClick={(e)=>handleLogOut(e)}>Logout</button></li>
                        </ul>
                        </div>
                    </li>:<li className="px-4 text-amber-950 text-xl font-bold rounded-lg hover:bg-green-200 hover:shadow-inner"><Link to='/login'>Login</Link></li>}
                </ul>
            </div>
        </div>
    )
}
export default Header