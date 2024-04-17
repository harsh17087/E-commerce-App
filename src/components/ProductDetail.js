import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useProductDetail from "../utils/useProductDetail.js";
const ProductDetail = () => {
  
    

    const {prodId} = useParams()
    // const [prodDetail,setProdDetail] = useState(null)
    // console.log(prodId)
    // useEffect(()=>{
    //     fetchData()
    // },[])
  
    // const fetchData=async ()=>{
    //     const data =await fetch(API_URL +"/"+prodId)
    //     const json =await data.json() 
    //     setProdDetail(json)
    // }

    const prodDetail = useProductDetail(prodId) // Instead of using above code, we've created custom hooks
  
    if(prodDetail===null)return <Shimmer/>

    const {title,price,description,category,image,rating} = prodDetail
    console.log(prodDetail)
  
    return (
    <div className="relative p-4 m-auto w-[600px] bg-gray-100 shadow-lg">
        <img className="w-[200px] m-auto" src={image}/>
        <h2 className="font-bold p-1 m-1 text-center">{title}</h2>
        <h4 className="m-1 p-1">Category : <b>{category}</b></h4>
        <h4 className="m-1 p-1">{description}</h4>
        <h4 className="m-1 p-1">💲{price}</h4>
        <h4 className="m-1 p-1">{rating.rate} ⭐</h4>
        <h4 className="m-1 p-1">{rating.count} Ratings</h4>
        
    </div>
  );
};

export default ProductDetail;
