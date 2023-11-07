"use client";
import React from "react";
import Button from "../components/Button/Button";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

export default function createaccount() {

    return (
      <div>
        <h1>Account Creation</h1>
        <div>
          <br>
          </br>
          <form>
            <h3>Fill in Information Below</h3>
            <div>
              <label htmlFor="firstName">Enter First Name</label>
              <input type="text" id="firstName" placeholder="John"/>
            </div>

            <div>
              <label htmlFor="lastName">Enter Last Name</label>
              <input type="text" id="lastName" placeholder="Adams"/>
            </div>

            <div>
              <label htmlFor="email">Enter Email</label>
              <input type="text" id="email" placeholder="(ex.)johnAdams@gmail.com"/>
            </div>

            <div>
              <label htmlFor="phoneNumber">Enter Phone Number</label>
              <input type="text" id="phoneNumber" placeholder="(ex.)123-456-7890"/>
            </div>

            <div>
              <label htmlFor="userName">Enter Username</label>
              <input type="text" id="userName" placeholder="(ex.)Baker87"/>
            </div>


            <div>
              <label htmlFor="passWord">Enter Password</label>
              <input type="text" id="passWord" placeholder="***"/>
            </div>

            <div>
              <label htmlFor="passWord2">Re-Enter Password</label>
              <input type="text" id="passWord2" placeholder="***"/>
            </div>


            <div>
            <Button url="/dashboard" text ="Submit" type="submit"></Button>
            
            </div>

            <div>
              <button type="reset">Reset</button>

            </div>

            <div>
            <Button url="/dashboard" text ="Dashboard"></Button>
            </div>
            



          </form>
        </div>
      </div>

      
    )
  }
  