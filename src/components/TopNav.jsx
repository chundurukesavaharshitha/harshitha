
import React from "react";
import "../styles.css";



const TopNav = () => {
  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">Carely</a>
          </div>
        <ul className="nav navbar-nav">
          <li className="active"><a href="#">Home</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Symptom checker</a></li>
          <li><a href="#">healthcare tips</a></li>
          <li><a href="#">Explore</a></li>
          <img className="logo-img" src="data:image/png;base64,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" alt="Logo" />
        </ul>
        <ul className="nav navbar-nav navbar-right">
        
          <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
          <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default TopNav;
