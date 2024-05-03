import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MY_API_URL } from "../utils/constant";
import axios from "axios";
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Button,Modal } from 'react-bootstrap';

const SellerProfileDashboard = () => {
  const { id } = useParams();

  const [listOfProducts, setlistOfProducts] = useState([{}]);
  const [filteredProducts, setfilteredProducts] = useState([{}]);
  const [searchText, setsearchText] = useState("");
  const [showProducts, setShowProducts] = useState(false);

  const [show, setShow] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  const handleClose = () =>{ 
    setShow(false);
    setDeleteModal(false)
    setIsDeleted(false)
  }
  const handleShow = (data) => {
    
    setShow(true);
    setShow(data);
  }

  useEffect(() => {
    fetchData();
  }, [searchText,filteredProducts]);

  const fetchData = async () => {
    const data = await fetch(MY_API_URL);
    const json = await data.json();

    setlistOfProducts(json.data);
  };

  const toggleShowProducts = () => {
    setShowProducts(!showProducts);
  };

  const handleSubmit = () => {
    const filteredlist = listOfProducts.filter((item) => item.sellerId === id);
    setfilteredProducts(filteredlist);
    toggleShowProducts();
    console.log(filteredProducts);
  };

  const handleDelete=()=>{
    axios.delete(MY_API_URL + '/' + deleteModal._id).then(()=>{
    }).catch((err)=>{console.log(err)})
  }

  return (
    <div className="overflow-hidden">
      <h1 className="p-2 m-2 text-center font-bold text-3xl bg-purple-400 rounded-lg">
        Your Products
      </h1>
      <div className="flex items-center justify-between">
        <div>
          <button
            onClick={handleSubmit}
            className="p-2 m-2 btn btn-primary btn-sm"
          >
            Display products
          </button>
        </div>
        
        {showProducts && <div>
          <input
            type="text"
            name="searchProducts"
            placeholder="Puma Running Shoes"
            className="p-2  h-10 focus:outline-none border border-gray-700 rounded-l-full"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            type="button"
            onClick={()=>{    
                const filteredlist = listOfProducts.filter((res) =>
                    res.title.toLowerCase().includes(searchText.toLowerCase())
                );
                setfilteredProducts(filteredlist); 
            }}
            className="w-12 h-10  border border-gray-700 rounded-r-full hover:bg-slate-200"
          >
            🔍
          </button>
        
        </div>}
        
      </div>
      {showProducts && <table className="p-2 m-2 table table-striped table-hover">
        <thead>
          <tr>
            <th className="w-3/12">Image</th>
            <th>Name</th>
            <th className="w-3/12">Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.length > 0 &&
            showProducts &&
            filteredProducts.map((item) => {
              return (
                <tr key={item._id}>
                  <td>
                    <img className="w-12 h-12" src={item.image} />
                  </td>
                  <td>{item.title.substring(0, 20)}...</td>
                  <td>{item.price}</td>
                  <td className="space-x-2">
                    <button onClick={()=>{handleShow(item)}} className="btn btn-outline-primary"><VisibilityIcon/></button>
                    <button className="btn btn-outline-warning"><EditNoteOutlinedIcon/></button>
                    <button onClick={()=>{setDeleteModal(true);setDeleteModal(item)}} className="btn btn-outline-danger"><DeleteOutlineOutlinedIcon/></button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Product details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label className="ml-[40%]"><img className="h-24 w-24" src={show.image}/></label><br/>
          <label>Name: <strong>{show.title}</strong></label><br/>
          <label>Price : <strong>{show.price}</strong></label><br/>
          <label>Description : <strong>{show.description}</strong></label><br/>
          <label>Category : <strong>{show.category}</strong></label><br/>
          <label>Average Rating : <strong>{show.rating?.rate}</strong></label><br/>
          <label>People rated : <strong>{show.rating?.count}</strong></label><br/>

        </Modal.Body>
        <Modal.Footer>
          <Button className="hover:bg-blue-600" variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={isDeleted}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Body>
          <b>Product Deleted Successfully ✔</b>

        </Modal.Body>
        <Modal.Footer>
          <Button className="hover:bg-blue-600" variant="secondary" onClick={()=>setIsDeleted(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={deleteModal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Body>
          <b>Are you sure, you want to delete this product ?</b>

        </Modal.Body>
        <Modal.Footer>
          <Button className="hover:bg-blue-600" variant="secondary" onClick={()=>{
            handleDelete()
            setDeleteModal(false)
            handleSubmit()
            setIsDeleted(true)
          }}>
            Yes
          </Button>
          <Button className="hover:bg-blue-600" variant="secondary" onClick={handleClose}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SellerProfileDashboard;
