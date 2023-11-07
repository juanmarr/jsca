"use client";
import Button from "../components/Button/Button";
import styles from './page.module.css';
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useState } from "react";


export default function accountmanage() {
  




    return (
      <div>

      <h1>Manage Account</h1>

      <div className={styles.container}>
        <div className={styles.textbox}>
            <p>First Name:</p>
            <p></p>
            <input className={styles.textbox} type="text" id="firstName" placeholder="first name"/>
            <p>Last Name: </p>
            <input className={styles.textbox} type="text" id="lastName" placeholder="last name" />
            <p>Email: </p>
            <input className={styles.textbox} type="text" id="email" placeholder="email@gmail.com" />
            <p>Phone Number: </p>
            <input className={styles.textbox} type="text" id="Phone Number" placeholder="123-456-7890" />
            <p>User Name: </p>
            <input className={styles.textbox} type="text" id="userName" placeholder="username"/>
            <p>Password:</p>
            <input className={styles.textbox} type="text" id="passWord" placeholder="password"/>

        </div>


      </div>
      <div className={styles.textbox2}>
      <Button url="/dashboard" text ="Update"></Button>
      </div>

      <div className={styles.textbox3}>
      <Button url="/dashboard" text ="Return"></Button>
      </div>
      


  
      </div>
    )
  }
  