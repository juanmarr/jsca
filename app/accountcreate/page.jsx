"use client";
import React from "react";
import Button from "../components/Button/Button";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const createaccount = () => {
  const router = useRouter();


  const handleSubmit = event => {
    event.preventDefault()
    const form = event.currentTarget
    const formElements = form.elements;
    
    const user = {
      username: formElements.username.value,
      email: formElements.email.value,
      password: formElements.password.value

    }
    
    const users = JSON.parse(localStorage.getItem("users") || "[]")

    users.push(user)

    localStorage.setItem("users", JSON.stringify(users))

    router.push(`/login?username=${user.username}`)



  }

    return (
      <div>
        <h1>Account Creation</h1>
        <div>
          <br>
          </br>
          <form onSubmit={handleSubmit}>
            <h3>Fill in Information Below</h3>


            <div>
              <label htmlFor="email">Enter Email</label>
              <input 
              type="email" 
              id="email" 
              placeholder="email"/>
            </div>


            <div>
              <label htmlFor="username">Enter Username</label>
              <input 
              type="text" 
              id="username" 
              placeholder="username"/>
            </div>


            <div>
              <label htmlFor="password">Enter Password</label>
              <input 
              type="password" 
              id="password" 
              placeholder="password"/>
            </div>



            <div>
              <button type="submit">Create Account</button>
            
            </div>

            <div>
              <button type="reset">Reset</button>

            </div>

            <div>
            <Button url="/" text ="Return"></Button>
            </div>
            



          </form>
        </div>
      </div>

      
    )
  }

export default createaccount
  