"use client";
import { Cagliostro } from "next/font/google"
import Button from "../components/Button/Button"
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useState } from "react";

const  dashboard = () => {
  const router = useRouter();

  const [currentUser, setCurrentUser] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem("currentUser")
    router.push("/")
  }

  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    const userData = user && JSON.parse(user)

    if(!userData){
      router.push("/login?error=You are not logged in")
    }else{
      setCurrentUser(userData)
    }
  }, [router])

  
  


    return currentUser ?(
      <div>
      <h1>JSCA Dashboard</h1>
      <p>Welcome User: {currentUser.user.email}</p>
      <br></br>
      <Button url="/accountcreate" text ="Create Account"></Button>
      <br></br>
      <Button url="http://localhost:3000/" text ="Home"></Button>
      <br></br>
      <Button url="/accountmanage" text="Manage Account"></Button>
      <br></br>
      <button onClick={handleLogout}>Logout</button>


  
      </div>
    ) : null
  }

  export default dashboard;
  