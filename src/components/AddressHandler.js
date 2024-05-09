import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ADDRESS_API_URL, USER_API_URL } from "../utils/constant";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AddHomeIcon from "@mui/icons-material/AddHome";
import { Button, Modal } from "react-bootstrap";

const AddressHandler = () => {
    const navigate = useNavigate()
  const userLoggedIn = useSelector((store) => store.user);
  const id = userLoggedIn?.id;

  const [addresslist,setAddressList] = useState([])

  const [newAddress, setNewAddress] = useState({
    address: "",
  });

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  const inputChangeHandler = (event) => {
        
    const { type, name, value } = event.target;
    setNewAddress({ ...newAddress, [name]: value });
  };

  const handleNewAddress = () => {
    axios.post(ADDRESS_API_URL+'/'+id,newAddress).then((res)=>{
        navigate('../user')
    }).catch((err)=>{console.log(err)})
  };

  const handleDeleteAddress=(index)=>{
    const deleteAdd={
        address:addresslist[index]
    }
    console.log(deleteAdd)
    axios.put(ADDRESS_API_URL+'/'+id,deleteAdd).then((res)=>{
        navigate('../user')
    }).catch((err)=>{console.log(err)})
  }

  useEffect(()=>{
    axios.get(USER_API_URL+'/'+id).then((res)=>{
        setAddressList(res?.data?.data.address)
    })
  },[])

  return (
    <div className="p-2 m-2">
      <h1 className="p-2 m-2 font-bold text-3xl text-center">
        Your Address List
      </h1>
      <button
        onClick={handleShow}
        className="flex items-center btn btn-outline-primary"
      >
        <AddHomeIcon />
        &nbsp; Add a new address
      </button>
      <table className="table table-hover">
        <thead className="">
          <tr>
            <th className="w-6/12 font-bold text-center">Address</th>
            <th className="w-6/12 font-bold text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {addresslist.length > 0 &&
            addresslist.map((add, index) => {
              return (
                <tr key={index}>
                  <td className="w-6/12 text-center">{add}</td>
                  <td className="space-x-2 text-center">
                    <Link>
                      <button className="btn btn-outline-warning">
                        <EditNoteOutlinedIcon />
                      </button>
                    </Link>
                    <Link>
                      <button onClick={(e)=>{e.preventDefault();handleDeleteAddress(index)}} className="btn btn-outline-danger">
                        <DeleteOutlineOutlinedIcon />
                      </button>
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Body>
          <form onSubmit={(e)=>{
            e.preventDefault();
            handleNewAddress()
          }}>
            <label className="p-2 m-1 text-xl font-bold" for="newadd">
              Enter new Address
            </label>
            <br />
            <input
              id="newadd"
              name="address"
              onChange={(e) => inputChangeHandler(e)}
              value={addresslist.address}
              type="text"
              className="p-2 m-2 w-full border border-gray-500 outline-none focus:bg-gray-100 rounded-lg"
              placeholder="Godrej Waterside Tower 2, Sector 5 Salt lake, Kolkata 700091"
            />
            <br />
            <button
              type="submit"
              onClick={(e) => {
                handleClose();
              }}
              className="p-2 m-2 btn btn-primary btn-sm"
            >
              Submit
            </button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="hover:bg-blue-600"
            variant="secondary"
            onClick={handleClose}
          >
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddressHandler;
