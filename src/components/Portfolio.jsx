import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Portfolio() {
  return (
    <div>
      <Navbar
        activeTab="portfolio"
        isSignUpSuccessful="isSignUpSuccessful"
        isLoggedIn="isLoggedIn"
        setIsLoggedIn="setIsLoggedIn"
        setIsSignUpSuccessful="setIsSignUpSuccessful"
      />
      <br />
      <br />
      <h1 style={{ color: "white" }}>Comming Soon!</h1>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}
