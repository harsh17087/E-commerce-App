import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { USER_API_URL } from "../utils/constant";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button,Modal } from 'react-bootstrap';
const EditUser = () => {
    const navigate = useNavigate()
    const userLoggedIn = useSelector((store)=>store.user)
    const id=userLoggedIn?.id
    const [show, setShow] = useState(false);

    const handleClose = () =>{ 
        setShow(false);  
    }
    const handleShow = () => {
        setShow(true);
    }

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        phone: "",
      });

    useEffect(()=>{
        axios.get(USER_API_URL+'/'+id).then((res)=>{
            setUserData(res?.data.data)
        }).catch((err)=>{console.log(err)})
    },[])

    const inputChangeHandler = (event) => {
        
        const { type, name, value } = event.target;
        setUserData({ ...userData, [name]: value });
      };
    
      const editUser=(event)=>{
        handleClose()
        axios.put(USER_API_URL+'/'+id,userData).then(()=>{
            navigate('/user')
        })
      }
  
    return (
    <div className="">
      <h1 className="p-2 m-2 font-bold text-3xl text-center">Edit Details</h1>
      <div className="p-2 ml-[20%]">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleShow();
          }}
          className="border border-gray-600 w-8/12 bg-slate-200 shadow-lg"
        >
          <div className="p-2 m-1 flex items-center">
            <p className="w-3/12 text-xl">Name</p>
            <input
              type="text"
              placeholder="Your Name"
              onChange={(e) => inputChangeHandler(e)}
              name="name"
              value={userData.name}
              className="w-9/12 p-2 m-2 focus:outline-none border border-gray-600 rounded-lg focus:shadow-lg"
            />
          </div>
          <div className="p-2 m-1 flex items-center">
            <p className="w-3/12 text-xl">E-mail</p>
            <input
              type="text"
              placeholder="abc@gmail.com"
              name="email"
              onChange={(e) => inputChangeHandler(e)}
              value={userData.email}
              className="w-9/12 p-2 m-2 focus:outline-none border border-gray-600 rounded-lg focus:shadow-lg"
            />
          </div>
          <div className="p-2 m-1 flex items-center">
            <p className="w-3/12 text-xl">Contact Number</p>
            <input
              type="number"
              placeholder="1226972522"
              onChange={(e) => inputChangeHandler(e)}
              value={userData.phone}
              name="phone"
              className="w-9/12 p-2 m-2 focus:outline-none border border-gray-600 rounded-lg focus:shadow-lg"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="w-4/12 p-2 m-2 rounded-full bg-blue-400 hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Body>
          <b>Are you sure, you want to edit your details ?</b>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="hover:bg-blue-600"
            variant="secondary"
            onClick={() => {
                editUser();
            }}
          >
            Yes
          </Button>
          <Button
            className="hover:bg-blue-600"
            variant="secondary"
            onClick={handleClose}
          >
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditUser;
