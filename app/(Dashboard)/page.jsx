"use client";
import { useState } from "react";
import { POST } from "../api/routes/evemtRoute";
import Edit from "../components/Edit";

export default function Home(props) {
  // const [amount, setAmount] = useState();
  // const [image, setImage] = useState();
  // const [startTime, setStartTime] = useState();
  // const [endTime, setEndTime] = useState();
  // const [location, setLocation] = useState();
  // const [details, setDetails] = useState();
  const [amount, setAmount] = useState("");
  const [image, setImage] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [location, setLocation] = useState("");
  const [details, setDetails] = useState("");

  return (
    <>
      <div
        className="container-sm "
        style={{ width: "60%", height: "100vh", marginBottom: "300px" }}
      >
        <h1 className="mb-4 text-center mt-3">Create Event</h1>
        {/* <form onSubmit={formSubmition}> */}
        <form action={POST} encType="multipart/form-data">
          <div className="mb-1">
            <label htmlFor="" className="form-label">
              Amount
            </label>
            <input
              type="number"
              className="form-control"
              name="totalPeople"
              min="1"
              max="10000"
              style={{ width: "10%" }}
              // onChange={(e) => {
              //   setAmount(e.target.value);
              // }}
              required
            ></input>
          </div>

          <div className="mb-4">
            <label htmlFor="" className="form-label"></label>
            <input
              type="file"
              className="form-control"
              name="avatar"
              accept="image/png, image/jpeg"
              // onChange={(e) => setImage(e.target.files?.[0])}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="" className="form-label">
              Start Time
            </label>
            <input
              type="datetime-local"
              className="form-control"
              name="startTime"
              // onChange={(e) => {
              //   setStartTime(e.target.value);
              // }}
              required
            ></input>
          </div>

          <div className="mb-4">
            <label htmlFor="" className="form-label">
              End Time
            </label>
            <input
              type="datetime-local"
              className="form-control"
              name="endTime"
              // onChange={(e) => {
              //   setEndTime(e.target.value);
              // }}
              required
            ></input>
          </div>

          <div className="mb-4">
            <label htmlFor="" className="form-label">
              Location
            </label>
            <input
              type="text"
              className="form-control"
              name="Location"
              placeholder="Enter the location"
              // onChange={(e) => {
              //   setLocation(e.target.value);
              // }}
              required
            ></input>
          </div>

          <div className="mb-4">
            <label htmlFor="" className="form-label ">
              Details
            </label>
            <Edit details={setDetails} />
            <input type="hidden" value={details} name="details" />
          </div>

          <div className="d-grid vstack gap-2">
            <button type="submit" className="btn btn-primary mb-4">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
