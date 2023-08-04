import React,{useState} from "react";
import Logo from "../assets/darkLogo.png";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../store/slice";

const SignIn = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errEmail, setErrEmail] = useState("");
    const [errPassword, setErrPassword] = useState("");


    const[userEmailErr,setUserEmailError]=useState('');
    const[userPasswordError,setUserPasswordError]=useState('');

   
    const [successMessage, setSuccessMessage] = useState("");
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setErrEmail("");
     
      };
      const handlePassword = (e) => {
        setPassword(e.target.value);
        setErrPassword("");
        
      };

    const handlelogIn=(e)=>{
      e.preventDefault();
      if (!email) {
        setErrEmail("Enter your email");
      }
      if (!password) {
        setErrPassword("Enter your password");
      }
      if (email && password) {
      
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    dispatch(setUserInfo(
      {
        _id:user.uid,
        userName:user.displayName,
        email:user.email
      }
    ))
   setSuccessMessage('Login SuccessFully , Welcome Back to amazon')
   setTimeout(()=>{
      navigate('/')
   })
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;

    if (errorCode.includes("auth/invalid-email")) {
      setUserEmailError("Invalid Email");
    }
    if (errorCode.includes("auth/wrong-password")) {
      setUserPasswordError("Wrong Password ! try again");
    }
  });

   
        setEmail("")
        setPassword("")
      }
    }
  return (
    <div className="w-full">
      <div className="w-full bg-gray-100 pb-10">
       {
        successMessage?(
          <div className="w-full flex justify-center items-center py-32">
            <p className="border-[1px] border-green-500  text-green-500 font-titleFont text-lg font-semibold
            px-6 py-2">
                    {successMessage}
            </p>

          </div>
        ):(
          <form className="w-[350px] mx-auto flex flex-col items-center">
          <img className="w-32" src={Logo} alt="" />
          <div className="w-full border border-zinc-200 p-6">
            <h2 className=" font-titleFont text-3xl font-medium mb-4">
              Sign In
            </h2>

            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Email or Mobile Number</p>
                <input onChange={handleEmail}
                  type="email"
                  className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none
                     focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                />
                {errEmail && (
                    <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                      <span className="italic font-titleFont font-extrabold text-base">
                        !
                      </span>
                      {errEmail}
                    </p>
                  )}
                     {userEmailErr && (
                    <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                      <span className="italic font-titleFont font-extrabold text-base">
                        !
                      </span>
                      {userEmailErr}
                    </p>
                  )}

              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Password</p>
                <input onChange={handlePassword}
                  type="password"
                  className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none
                     focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                />
                {errPassword && (
                    <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                      <span className="italic font-titleFont font-extrabold text-base">
                        !
                      </span>
                      {errPassword}
                    </p>
                  )}
                     {userPasswordError && (
                    <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                      <span className="italic font-titleFont font-extrabold text-base">
                        !
                      </span>
                      {userPasswordError}
                    </p>
                  )}

              </div>
              <button
                onClick={handlelogIn}
                className="w-full font-normal text-sm bg-gradient-to-t from-yellow-400 to-yellow-200
   hover:from-yellow-300 hover:to-yellow-500 border-yellow-500 hover:border-yellow-700
active:bg-gradient-to-bl  active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3"
              >
                Continue
              </button>

             
            </div>
            <p className="text-xs text-black leading-4 mt-4">
              By continuing, you agree to Amazon's{" "}
              <span className="text-blue-600">Conditions of Use</span> and{" "}
              <span className="text-blue-600">Privacy Notice.</span>{" "}
            </p>
            <p className="text-xs text-gray-600 mt-4 cursor-pointer group"> <ArrowRightIcon/>
            <span className="text-blue-600 group-hover:text-orange-700 group-hover:underline">Need help?</span> </p>
          </div>
          <p className="w-full text-xs text-gray-600 mt-4 flex items-center">
            <span className="w-1/3 h-[1px] bg-zinc-400 inline-flex"></span>
            <span className="w-1/3 text-center">New to Amazon?</span>
             <span className="w-1/3 h-[1px] bg-zinc-400 inline-flex"></span>
          </p>
         <Link className="w-full" to='/Registeration'><button  
          className="w-full font-normal text-sm bg-gradient-to-t from-slate-200 to-slate-100
          hover:bg-gradient-to-b border border-zinc-500
         active:border-yellow-800 active:shadow-amazonInput duration-200 py-1.5 px-2 rounded-md mt-4"
                     >Create your Amazon account</button></Link> 
        </form>
        )
       }
      </div>
      <div className="w-full py-10 bg-gradient-to-t from-white via-white to-zinc-300 flex flex-col justify-center items-center gap-4">
        <div className="flex items-center gap-6">
            <p className="text-xs text-blue-600 hover:text-orange-600 hover:underline cursor-pointer">Conditions of Use </p>
            <p className="text-xs text-blue-600 hover:text-orange-600 hover:underline cursor-pointer"> Privacy Notice </p>
            <p className="text-xs text-blue-600 hover:text-orange-600 hover:underline cursor-pointer">Help</p>
        </div>
        <p className="text-xs text-gray-600">© 1996-2023, Amazon.com, Inc. or its affiliates</p>

      </div>
    </div>
  );
};

export default SignIn;
