import React from 'react'

const page = () => {
  return (
    <>
    
    <div className="container mt-5">
      <div className="card" style={{width: '90%'}}>
        <div className="card-title text-center mt-3 mb-3">
          Language Immersion Trip
        </div>

        <div className='d-flex'>
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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
              quas nulla reprehenderit adipisci autem pariatur voluptatum
              eligendi veritatis numquam facilis.
            </p>
          </div>
          <button className='btn btn-success'>Join Us</button>
        </div>
        </div>
      </div>
 </div>
 
 </>
  )
}

export default page