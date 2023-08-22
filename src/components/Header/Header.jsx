import React, { useState } from "react";
import logo from "../../assets/logo.png";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";
import { dropDownItems } from "./Index";
import HeaderBottam from "./HeaderBottam";
import { useDispatch, useSelector } from "react-redux";
import { Link ,useNavigate} from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { userSignOut } from "../../store/slice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Header = () => {

  const auth = getAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const product = useSelector((state) => state.amazon.products);
  const userInfo = useSelector((state) => state.amazon.userInfo);

  const [showAll, setShowAll] = useState(false);

  const handlerLogOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(userSignOut());
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const cartbuttonHandler=()=>{
      if(userInfo){
        navigate('/Cart')
      }
      else{
        toast.error('Please log-in first for use Cart');
      }
  }

  return (
    <div className="w-full sticky top-0 z-50">
      <div className="w-full bg-amazon_blue text-white px-4 py-3 flex items-center gap-4">
        <Link to="/">
          <div
            className="px-2 h-[80%] flex items-center border border-transparent
        hover:border-white cursor-pointer duration-100"
          >
            <img src={logo} className="w-24 mt-2" alt="logo" />
          </div>
        </Link>
        <div
          className="px-2 h-[80%]  border border-transparent
        hover:border-white cursor-pointer duration-100 hidden mdl:inline-flex "
        >
          <LocationOnOutlinedIcon />
          <p className="text-sm text-lightText font-light flex flex-col">
            Hello
            <span className="text-sm font-semibold -mt-1 text-whiteText">
              Select your Address
            </span>
          </p>
        </div>
        <div className="h-10 rounded-md hidden  lgl:flex flex-grow relative">
          <span
            onClick={() => setShowAll(!showAll)}
            className="w-14 bg-gray-200 h-full hover:bg-gray-300 border-2
                  cursor-pointer duration-300 text-sm text-amazon_blue  font-titleFont
                  flex items-center justify-center rounded-tl-md rounded-bl-md"
          >
            All<span></span>
            <ArrowDropDownOutlinedIcon />
          </span>
          {showAll && (
            <div>
              <ul
                className=" absolute w-56  h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden
     bg-white border-[1px] border-amazon_blue text-black p-2 flex-col gap-1"
              >
                {dropDownItems.map((item) => {
                  return (
                    <li
                      key={item.id}
                      className="text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent
                    hover:border-b-amazon_blue cursor-pointer duration-200"
                    >
                      {item.title}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
          <input
            className="h-full text-base text-amazon_blue flex-grow outline-none border-none px-2"
            type="text"
          />
          <span
            className="w-12 h-full flex items-center justify-center bg-amazon_yellow
                hover:bg-[#f3a847] duration-300  text-amazon_blue cursor-pointer 
                rounded-tr-md rounded-br-md"
          >
            <SearchIcon />
          </span>
        </div>
        <Link to="/signIn">
          {" "}
          <div
            className="flex flex-col items-start justify-center px-2 h-[80%] border border-transparent
        hover:border-white cursor-pointer duration-100"
          >
            {userInfo ? (
              <p className="text-sm mdl:text-xs text-white mdl:text-lightText font-semibold uppercase ">
                {userInfo.userName}
              </p>
            ) : (
              <p className="text-sm mdl:text-xs text-white mdl:text-lightText font-light ">
                Hello, Sign in
              </p>
            )}

            <p className="text-sm text-semibold -mt-1 text-whiteText hidden mdl:inline-flex ">
              Accounts & Lists{" "}
              <span>
                <ArrowDropDownOutlinedIcon />
              </span>
            </p>
          </div>
        </Link>
        <div
          className="hidden lgl:flex flex-col items-start justify-center px-2 h-[80%] border border-transparent
        hover:border-white cursor-pointer duration-100"
        >
          <p className="text-xs text-lightText font-light">Returns</p>
          <p className="text-sm text-semibold -mt-1 text-whiteText ">
            & orders
          </p>
        </div>
        
        {/* <Link to="/cart"> */}
          <div onClick={cartbuttonHandler}
            className="flex relative items-start justify-center px-2 h-[80%] border border-transparent
        hover:border-white cursor-pointer duration-100"
          >
            <ShoppingCartIcon />
            <p className="text-xs font-semibold mt-3 text-whiteText">
              cart
              {
                userInfo?<span
                className=" absolute text-xs -top-1 left-6 font-semibold p-1
                    h-4 bg-[#f3a847] text-amazon_blue rounded-full flex
                     justify-center items-center"
              >
                {product.length > 0 ? product.length : 0}
              </span>:''
              }
            </p>
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
theme="colored"
/>
        {/* </Link> */}
        {userInfo && (
          <div
            onClick={handlerLogOut}
            className="flex flex-col justify-center items-center relative px-2 h-[80%] border border-transparent
                    hover:border-white cursor-pointer duration-100"
          >
            <LogoutIcon />
            <p className="hidden mdl:inline-flex text-xs font-semibold text-white">
              Logout
            </p>
          </div>
        )}
      </div>
      <HeaderBottam />
    </div>
  );
};

export default Header;
