import React from "react";
import Navbar from "./TopNav";


const Home1 = () => {
  return (

    <div className="home-container">
      <h1 className="home-title">Welcome to Carely</h1>
      <p className="home-description">
      Your trusted health companion, offering personalized care and wellness insights.
      </p>
      <button className="button">Get started</button>

      <img className="image"src="https://a.storyblok.com/f/101765/826x940/fd4f55afab/illustration-homepage.png"></img>
      <p className="para">
      <span>The symptom checker for adults</span>
        <span>The symptom checker for women</span>
        <span>The symptom checker for men</span>
        <span>The symptom checker for you</span>
      </p>  
      <sumain className="h3">
      <h3>-Analyze your symptoms</h3>
      <h3>-Understand your health</h3>
      <h3>-Plan your next steps</h3>
      <h3>-Get ready for your visit</h3>
      
      </sumain>
      <div className="card-container">
        <div className="card">
          <h2>Individuals</h2>
          <ul>
            <li>✔ 5 levels of care recommendations</li>
            <li>✔ Simple language and common names</li>
            <li>✔ Educational articles</li>
          </ul>
        </div>

        <div className="card">
          <h2>Parents</h2>
          <ul>
            <li>✔ Pediatrics conditions</li>
            <li>✔ Symptom pair analysis</li>
            <li>✔ Body maps of children in different age groups</li>
          </ul>
        </div>

        <div className="card">
          <h2>Family members</h2>
          <ul>
            <li>✔ Third-person mode</li>
            <li>✔ Instructions and explanations</li>
          </ul>
          


        </div>
        
      </div>
      

      </div> 
   
  );
};

export default Home1;

      
    

