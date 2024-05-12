import React from "react";
import axios from "axios";
import { useRef, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MY_API_URL } from "../utils/constant";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Button,Modal } from 'react-bootstrap';
import { useUpdateItemMutation } from "../utils/itemAPI";
const EditItem = () => {
  const [updateItem,isSuccess] = useUpdateItemMutation()  
  const [show, setShow] = useState(false);
  const { id } = useParams();

    const handleClose = () =>{ 
        setShow(false);  
    }
    const handleShow = () => {
        setShow(true);
    }
  
    const [alignment, setAlignment] = useState("");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    prod.stock = newAlignment
    
  };

  const navigate = useNavigate();

  const [prod, setProduct] = useState({
    id:id,
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
    stock: "",
  });


  useEffect(() => {
    axios
      .get(MY_API_URL + "/" + id)
      .then((res) => {
        // console.log(res.data)
        setProduct(res?.data.data);
        setAlignment(res?.data.data.stock)
      })
      .catch((error) => {console.log(error)});
  }, []);

  const inputChangeHandler = (event) => {
    // handleChange()
    
    const { type, name, value } = event.target;
    setProduct({ ...prod, [name]: value });
  };

  const editProduct=async(event)=>{
    handleClose()
    // axios.put(MY_API_URL+'/'+id,prod).then(()=>{
    //     navigate('../dashboard')
    // })
    console.log(prod)
    await updateItem(prod)
    if(isSuccess){
      navigate('../dashboard')
    }
  }

  return (
    <div className="">
      <h1 className="p-2 m-2 font-bold text-3xl text-center">
        Edit Product
      </h1>
      <div className="p-2 ml-[20%]">
        <form onSubmit={(e)=>{e.preventDefault();handleShow()}} className="border border-gray-600 w-8/12 bg-slate-200 shadow-lg">
          <div className="p-2 m-1 flex items-center">
            <p className="w-3/12 text-xl">Product Title</p>
            <input
              type="text"
              placeholder="Milton Water Bottle"
              onChange={(e)=>inputChangeHandler(e)}
              name="title"
              value={prod.title}
              className="w-9/12 p-2 m-2 focus:outline-none border border-gray-600 rounded-lg focus:shadow-lg"
            />
          </div>
          <div className="p-2 m-1 flex items-center">
            <p className="w-3/12 text-xl">Product Price</p>
            <input
              type="number"
              placeholder="100.00"
              name="price"
              onChange={(e)=>inputChangeHandler(e)}
              value={prod.price}
              className="w-9/12 p-2 m-2 focus:outline-none border border-gray-600 rounded-lg focus:shadow-lg"
            />
          </div>
          <div className="p-2 m-1 flex items-center">
            <p className="w-3/12 text-xl">Product Description</p>
            <input
              type="text"
              placeholder="1 L water bottle for both summers and Winters"
              onChange={(e)=>inputChangeHandler(e)}
              value={prod.description}
              name="description"
              className="w-9/12 p-2 m-2 focus:outline-none border border-gray-600 rounded-lg focus:shadow-lg"
            />
          </div>
          <div className="p-2 m-1 flex items-center">
            <p className="w-3/12 text-xl">Product Category</p>
            <input
              type="text"
              placeholder="Home and Kitchen"
              onChange={(e)=>inputChangeHandler(e)}
              value={prod.category}
              name="category"
              className="w-9/12 p-2 m-2 focus:outline-none border border-gray-600 rounded-lg focus:shadow-lg"
            />
          </div>
          <div className="p-2 m-1 flex items-center">
            <p className="w-3/12 text-xl">Product Image URL</p>
            <input
              type="text"
              placeholder="www.cloudinary.com/842gd.png"
              onChange={(e)=>inputChangeHandler(e)}
              value={prod.image}
              name="image"
              className="w-9/12 p-2 m-2 focus:outline-none border border-gray-600 rounded-lg focus:shadow-lg"
            />
          </div>
          <div className="p-2 m-1 flex items-center">
            <p className="w-3/12 text-xl">Stock Update</p>
            <ToggleButtonGroup
              color="primary"
              exclusive
              onChange={handleChange}
              name="stock"
              value={alignment}
              aria-label="Platform"
              className="p-2 m-1"
            >
              <ToggleButton className="text-blue-800" value="instock">
                In Stock
              </ToggleButton>
              <ToggleButton className="text-red-800" value="outstock">
                Out of Stock
              </ToggleButton>
            </ToggleButtonGroup>
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
          <b>Are you sure, you want to edit this product ?</b>

        </Modal.Body>
        <Modal.Footer>
          <Button className="hover:bg-blue-600" variant="secondary" onClick={()=>{
            editProduct()
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

export default EditItem;
