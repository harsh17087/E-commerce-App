import { useState, useRef } from "react";
import { dataValidate } from "../utils/validate";
import axios from "axios";
import { USER_API_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";


const UserLogin = () => {
  
  const dispatch = useDispatch()
  
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const [SignIn, setSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const toggleCloseError=()=>{
    setErrorMessage("")
  }
  const toggleSignIn = () => {
    setSignIn(!SignIn);
  };

  const storeUserDataRedux=(uemail)=>{
    axios.get(USER_API_URL).then((res)=>{
          const users = res?.data.data
          console.log(users)
          const userData = users.filter((item)=>item.email===uemail)[0]
          dispatch(addUser({id:userData._id, name:userData.name, email:userData.email}))
      }).catch((error)=>{console.log(error)})
  }

  const handleSubmitData = (event) => {
    event.preventDefault();
    
    const msg = dataValidate(email.current.value, password.current.value);
    setErrorMessage(msg);
    setTimeout(()=>{toggleCloseError()},2000)

    if (errorMessage === null && !SignIn) {
      const user = {
        name: name.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      axios
        .post(USER_API_URL, user)
        .then(() => {
          window.alert("User successfully registered");
        })
        .catch((err) => {
          if (err.response.status === 409) {
            alert("E-mail already in use");
          }
        });
    } else if (SignIn && errorMessage === null) {
      const user = {
        email: email.current.value,
        password: password.current.value,
      };
      axios
        .post(USER_API_URL + "/" + "login", user)
        .then(() => {
          window.alert("User logged in successfully");
          sessionStorage.setItem("user", user.email);
          storeUserDataRedux(user.email)
        })
        .catch((err) => {
          console.log(err)
          if (err.response.status == 401) {
            alert("Wrong Credentials");
          }
        });
    }
  };

  return (
    <div className="p-2 m-2 mx-auto border border-gray-500 rounded-lg w-4/12 ">
      <h1 className="text-2xl text-center">CartApp</h1>
      {SignIn ? (
        <h1 className="p-2 m-2 text-xl">Sign In</h1>
      ) : (
        <h1 className="p-2 m-2 text-xl">Sign Up</h1>
      )}
      {!SignIn && (
        <div className="p-2 m-2">
          <label className="font-bold px-2 mx-2">Full Name</label>
          <br />
          <input
            type="text"
            ref={name}
            className="p-1 mx-2 border border-gray-400 focus:outline-none w-full focus:bg-slate-100 focus:shadow-md rounded-lg"
            placeholder="John Doe"
          />
        </div>
      )}
      <div className="p-2 m-2">
        <label className="font-bold px-2 mx-2">E-mail</label>
        <br />
        <input
          type="text"
          ref={email}
          className="p-1 mx-2 border border-gray-400 focus:outline-none w-full focus:bg-slate-100 focus:shadow-md rounded-lg"
          placeholder="abcxyz@yahoo.com"
        />
      </div>
      <div className="p-2 m-2">
        <label className="font-bold px-2 mx-2">Password</label>
        <br />
        <input
          type="text"
          ref={password}
          className="p-1 mx-2 border border-gray-400 focus:outline-none w-full focus:bg-slate-100 focus:shadow-md rounded-lg"
          placeholder="password"
        />
      </div>
      <div className="p-2 m-2">
        <button
          onClick={(e) => handleSubmitData(e)}
          className="p-1 m-2 bg-green-300 hover:bg-green-500 w-full rounded-lg"
        >
          Submit
        </button>
      </div>
      <div className="p-2 m-2">
        <p className="font-bold text-lg text-red-700">{errorMessage}</p>
      </div>

      {SignIn && (
        <div className="grid grid-flow-col place-items-center">
          <div className="grid-cols-3">
            <hr />
          </div>
          <div className="grid-cols-6">New to CartApp</div>
          <div className="grid-cols-3">
            <hr />
          </div>
        </div>
      )}

      <div className="p-2 m-2">
        {SignIn ? (
          <button
            onClick={(e) => {
              e.preventDefault();
              toggleSignIn();
            }}
            className="p-1 m-2 border border-black hover:bg-gray-300 w-full rounded-lg shadow-md"
          >
            Create your Account
          </button>
        ) : (
          <button
            onClick={(e) => {
              e.preventDefault();
              toggleSignIn();
            }}
            className="p-1 m-2 border border-black hover:bg-gray-300 w-full rounded-lg shadow-md"
          >
            Back to LogIn
          </button>
        )}
      </div>
    </div>
  );
};

export default UserLogin;
