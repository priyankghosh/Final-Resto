import React from "react";
import "./about.css"

const About = () => {
  return (
    <>
      <div className="about-section">
        {/* <h1>About Us Page</h1> */}
        <p>Some text about who we are and what we do.</p>
        {/* <p>Resize the browser window to see that this page is responsive by the way.</p> */}
      </div>

      <div className="row">
        <div className="column">
          <div className="card">
            <img src="https://www.ecpi.edu/sites/default/files/CIV%20Sept%2026.png" />
            <div className="container">
              <h2>Jane Doe</h2>
              <p className="title">CHEF</p>
              <p> Professional cook and tradesman who is proficient in all aspects of food preparation, often focusing on a particular cuisine. </p>
              <p>jane@restaurant.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src="https://media.istockphoto.com/photos/young-businessman-standing-in-his-restaurant-picture-id869409288?k=20&m=869409288&s=612x612&w=0&h=dtVoT8aTPcFftZNfikGuT2wpvAKGcHafm0XHR1I_L1s=" />
            <div className="container">
              <h2>Mike Ross</h2>
              <p className="title">Hotel Manager </p>
              <p>Responsible for managing and organizing daily restaurant operations with a goal of controlling costs and providing a high quality experience to customers.</p>
              <p>mike@restaurant.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src="https://img.etimg.com/thumb/msid-58474319,width-650,imgsize-171120,,resizemode-4,quality-100/.jpg" />
            <div className="container">
              <h2>Rajat Sharma</h2>
              <p className="title">Owner</p>
              <p>Restaurant owners oversee the day-to-day operations of a restaurant, managing staff, resolve customer issues and work to make the establishment profitable.</p>
              <p>rajat@restaurant.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>
      </div>

    </>


  );
};

export default About;