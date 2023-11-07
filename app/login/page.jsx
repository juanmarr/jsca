"use client"
import Link from 'next/link'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'

const login = () => {

  const router = useRouter();
  console.log(router);

  const [errorMessage, setErrorMessage] = useState("");
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState("");

  const searchParams = useSearchParams();

  useEffect(() => {
    const userName = searchParams.get("username");
    if(username){
      setUserName(userName);
    }

    const error = searchParams.get("error");
    if(error){
      setErrorMessage(error);
    }

  }, [setUserName,setErrorMessage,searchParams]);

  



  const handleSubmit = event =>{
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    
    const username = formElements.username.value;
    const password = formElements.password.value;

    const users = JSON.parse(localStorage.getItem("users") || "[]") || []

    const user = users.find(
      user => user.username === username && user.password === password
    )

    if(user) {
      localStorage.setItem("currentUser", JSON.stringify({user}))

      router.push("/dashboard")
    }else{
      setErrorMessage("Invalid username or password")

    }


    

  }

  

  
  return (
    <div>
    <h1>JSCA</h1>
    <h3>Login</h3>
    {errorMessage && <p>{errorMessage}</p>}

    <form onSubmit={handleSubmit}>
      <input
        defaultValue={username ?? ""}
        type="text"
        placeholder="Username"
        id="username"
      />

      <input
        type="password"
        placeholder="Password"
        id="password"
      />

      <button type="submit">Login</button>

    </form>

    <Link href="/">Return</Link>


    </div>
  )
}

export default login
