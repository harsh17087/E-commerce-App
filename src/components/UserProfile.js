import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { USER_API_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const UserProfile = () => {
  // console.log(userLoggedIn.id)
  const [userData, setUserData] = useState(null);

  const id = useSelector((store) => store.user?.id);

//   const id = userLoggedIn?.id;
  useEffect(()=>{
    axios
    .get(USER_API_URL + "/" + id)
    .then((res) => {
      setUserData(res?.data.data);
    })
    .catch((error) => {
      console.log(error);
    });
  },[])
  


  return (
    <div className='p-1 m-2 space-y-12'>
            <h1 className='p-2 m-2 font-bold text-center text-3xl'>Your Details</h1>
            <div className='mx-auto p-2 bg-purple-100 shadow-lg w-6/12 '>
                <img className='h-24 w-24 mx-auto rounded-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQILTZ58qc5rSZUrNH02k3Xuq8OhsBb9kvQ_HSSEa3eSA&s'/>
                <div className='space-y-4'>
                    <h1 className='text-2xl'>Name  <b>{userData?.name?.charAt(0).toUpperCase() + userData?.name?.slice(1)}</b></h1>
                    <h1 className='text-2xl'>E-mail  <b>{userData?.email}</b></h1>
                    <h1 className='text-2xl'>Contact Number  <b>{userData?.phone}</b></h1>
                    <h1 className='text-2xl flex'>Address List
                    <ul>
                        {
                          userData?.address.map((add,index)=>{
                            return <li key={index} className="mx-2 font-bold">{index+1+'.'} {add}</li>
                              
                            
                          })
                        }
                    </ul></h1>
                    <h1 className='text-2xl'>User Id  <b>{userData?._id}</b></h1>
                </div>
                <div className="p-2 m-2 flex justify-between">
                  <Link to='../user/edit'><button className="btn btn-outline-warning">Edit</button></Link>
                  <Link to='../user/editaddress'><button className="btn btn-outline-warning">Add/Remove address</button></Link>
                </div>
            </div>
        </div>
  );
};

export default UserProfile;
