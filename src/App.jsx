import "./App.css";
import Login  from "./components/Auth/Login";
import Employees from "./components/Dashboard/Employees";
import Admin from "./components/Dashboard/Admin";
import { useEffect, useState } from "react";
import { getStorage, setLocalStorage } from "./utils/LocalStorage";

function App() {
  // useEffect(()=>{
  //   // setLocalStorage()
  //   // getStorage()
  // },)
  
  let [user,setUser]=useState(null)

  let handleLogin=(email,password)=>{
   if(email=="admin@gmail.com" && password==123){
    setUser("admin")
   }
   else if(email=="user@gmail.com" && password==123){
    setUser("user")
  }else{
    alert("Invalid credentials")
  }
}
  


  return (
    <>
      {!user?<Login handleLogin={handleLogin}></Login>:user=="admin"?<Admin/>:<Employees/>}
    </>
  );
}

export default App;
