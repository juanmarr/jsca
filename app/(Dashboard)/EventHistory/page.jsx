"use server";

// import React, { useEffect } from "react";
import {GET as getEvent} from "../../api/routes/evemtRoute"


const page = () => {

  // useEffect(() => {

  //   const event = async () => {

  //   const result = getEvent()
  //     console.log(result);
  //   }

  //   event();




  // });

      async function myAction() {
          const data  = await getEvent()
          console.log(data);
      }

      myAction()

  return (
    <>
      <div className="container mt-5">
        <div className="card" style={{ width: "90%" }}>
          <div className="card-title text-center mt-3 mb-3">
            Language Immersion Trip
          </div>

          <div className="d-flex">
            <img
              src="https://picsum.photos/200"
              className="card-img-top"
              alt="image"
            />
            <div className="card-body">
              <div>
                <h3> Time & Location </h3>
                <hr />
                <p className="card-text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div>
                <h3>About the Event</h3>
                <hr />
                <p className="card-text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Minus quas nulla reprehenderit adipisci autem pariatur
                  voluptatum eligendi veritatis numquam facilis.
                </p>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <div className="d-flex justify-content-evenly">
              <button className="btn btn-primary px-5">Active</button>
              <button className="btn btn-success px-5">Update</button>
              <button className="btn btn-danger px-5">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
