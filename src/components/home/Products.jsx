import React, { useEffect, useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import ApiIcon from '@mui/icons-material/Api';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {useDispatch,useSelector} from 'react-redux'
import { addToCart } from "../../store/slice";
import { ToastContainer, toast } from 'react-toastify';
import {  useNavigate } from "react-router-dom";


import 'react-toastify/dist/ReactToastify.css';
const Products = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch()
  const userInfo = useSelector((state) => state.amazon.userInfo);

  const navigate = useNavigate();

  const fetchData = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const result = await res.json();
    setData(result);
  };


  useEffect(() => {
    fetchData();
  }, []);
 
  return (
    <div className="max-w-screen-2xl grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4  gap-5 xl:gap-10 px-4 mx-auto">
      {data?.map((item) => {
        const cartHandler =()=>{
          if(userInfo){
            dispatch(addToCart({
              title:item.title,
              price:item.price,
              description:item.description,
              image:item.image,
              quantity:1,
              id:item.id,
              category:item.category
            }))
           toast(`${item.title.substring(0,15)} add to cart successfully`);
          }
          else{
            toast("Please Login First ")
            setTimeout(()=>{
              navigate('/SignIn')
            },2000)
          }
         
        
        }
        return (
          <div
            key={item.id}
            className="bg-white h-auto border-[1px] border-gray-200 py-8 z-30 hover:border-transparent
                    shadow-none hover:shadow-testShadow duration-200 relative flex flex-col gap-4"
          >
            <span className="text-xs capitalize italic absolute top-2 right-2 text-gray-500 ">{item.category}</span>
            <div className="w-full h-auto flex justify-center items-center relative group">
            
              <img
                className="w-52 h-64 object-contain"
                src={item.image}
                alt="imagess"
              />
           <ul className="w-full h-36 bg-gray-100 absolute -bottom-[160px] group-hover:bottom-0
           duration-700 flex flex-col justify-center items-end gap-2 font-titleFont px-2 border-1 border-r">
            <li className="productli">Compare <span><ApiIcon/></span></li>
            <li className="productli">Add to cart <span><ShoppingCartIcon/></span></li>
            <li className="productli">View Details <span><ArrowCircleRightIcon/></span></li>
            <li className="productli">Add to wishList <span><FavoriteIcon/></span></li>
           </ul>
            </div>
            <div className="px-4 z-10 bg-white">
              <div className="flex items-center justify-between">
                <h2 className="text-lg text-amazon_blue font-titleFont font-bold">
                  {item.title.substring(0, 20)}
                </h2>
                <p>${item.price}</p>
              </div>
              <div>
                <p className="text-sm">
                  {item.description.substring(0, 100)}...
                </p>
                <div className="text-yellow-400">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
              </div>
             
              <button onClick={cartHandler} className="w-full font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200
              hover:from-yellow-300 hover:to-yellow-500 border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl 
               active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3">Add to Cart</button>
            </div>
             <ToastContainer
position="bottom-left"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
