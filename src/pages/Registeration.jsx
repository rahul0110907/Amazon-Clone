import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Logo from "../assets/darkLogo.png";
import {RotatingLines} from 'react-loader-spinner'
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

const Registeration = () => {
  const navigate = useNavigate();

  const auth = getAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errName, setErrName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [errCPassword, setErrCPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const [firebaseErr, setFirebaseErr] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
    setErrName("");
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    setErrCPassword("");
  };

  const emailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };
  const handleRegistration = (e) => {
    e.preventDefault();
    if (!name) {
      setErrName("Enter your Name");
    }
    if (!email) {
      setErrEmail("Enter your email");
      setFirebaseErr("");
    } else {
      if (!emailValidation(email)) {
        setErrEmail("Enter a valid email");
      }
    }
    if (!password) {
      setErrPassword("Enter your password");
    } else {
      if (password.length < 6) {
        setErrPassword("Passwords must be at least 6 characters");
      }
    }
    if (!confirmPassword) {
      setErrCPassword("Confirm your password");
    } else {
      if (confirmPassword !== password) {
        setErrCPassword("Password not matched");
      }
    }
    if (
      name &&
      email &&
      emailValidation(email) &&
      password &&
      password.length >= 6 &&
      confirmPassword &&
      confirmPassword === password
    ) {
      setLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          updateProfile(auth.currentUser, {
            displayName: name,
          });
          // const user = userCredential.user;
          setLoading(false);
          setSuccessMessage("Account Create Successfully");
          setTimeout(() => {
            navigate("/SignIn");
          }, 3000);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;

          if (errorCode.includes("auth/email-already-in-use")) {
            setFirebaseErr("Email already in use , Please try another");
          }
         
          // ..
        });
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setErrCPassword("");
    }
  };
  return (
    <div className="w-full">
      <div className="w-full bg-gray-100 pb-10">
        <form className="w-[350px] mx-auto flex flex-col items-center">
          <img className="w-32" src={Logo} alt="" />
          <div className="w-full border border-zinc-200 p-6">
            <h2 className=" font-titleFont text-3xl font-medium mb-4">
              Create Account
            </h2>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Your Name</p>
                <input
                  onChange={handleName}
                  type="text"
                  value={name}
                  className="w-full  py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none
                 focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                />
                {errName && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className=" italic font-bold text-base">!</span>
                    {errName}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Email or Mobile Number</p>
                <input
                  onChange={handleEmail}
                  type="text"
                  value={email}
                  className="w-full  py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none
                 focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                />
                {errEmail && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className=" italic font-bold text-base">!</span>
                    {errEmail}
                  </p>
                )}
                {firebaseErr && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className=" italic font-bold text-base">!</span>
                    {firebaseErr}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Password</p>
                <input
                  onChange={handlePassword}
                  type="password"
                  value={password}
                  className="w-full  py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none
                 focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                />
                {errPassword && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className=" italic font-bold text-base">!</span>
                    {errPassword}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Confirm password</p>
                <input
                  onChange={handleConfirmPassword}
                  type="text"
                  value={confirmPassword}
                  className="w-full  py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none
                 focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                />
                {errCPassword && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className=" italic font-bold text-base">!</span>
                    {errCPassword}
                  </p>
                )}
                {!errCPassword ? (
                  <p className="text-xs text-gray-400 font-base">
                    Passwords must be at least 6 characters.
                  </p>
                ) : (
                  ""
                )}

                <p className="text-xs text-gray-500">
                  To verify your number, we will send you a text message with a
                  temporary code. Message and data rates may apply.
                </p>
              </div>
              <button
                onClick={handleRegistration}
                className="w-full font-normal text-sm bg-gradient-to-t from-yellow-400 to-yellow-200
              hover:from-yellow-300 hover:to-yellow-500 border-yellow-500 hover:border-yellow-700
           active:bg-gradient-to-bl  active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3"
              >
                Continue
              </button>
              {loading && (
                <div className="flex justify-center">
                  <RotatingLines
                    strokeColor="grey"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="96"
                    visible={true}
                  />
                </div>
              )}
              {
                successMessage &&(
                  <div>
                    <p className="text-green-500">{successMessage}</p>
                    </div>
                )
              }

              <p className="text-xs text-black">
                Already have an account?{" "}
                <Link to="/signIn">
                  <span
                    className="
            text-xs text-blue-600 hover:text-orange-400 hover:underline cursor-pointer"
                  >
                    Sign in
                    <span>
                      <ArrowRightIcon />
                    </span>
                  </span>
                </Link>
              </p>
              <p className="text-xs text-black -mt-4">
                Buying for work?
                <span className=" text-xs text-blue-600 hover:text-orange-400 hover:underline cursor-pointer">
                  {" "}
                  Create a free business account
                </span>
              </p>
            </div>
            <p className="text-xs text-black leading-4 mt-4">
              By continuing, you agree to Amazon's{" "}
              <span className="text-blue-600">Conditions of Use</span> and{" "}
              <span className="text-blue-600">Privacy Notice.</span>{" "}
            </p>
            <div></div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registeration;
