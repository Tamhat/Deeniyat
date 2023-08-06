import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import "./../css/Components.css";

const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleSignUp = async () => {
    try {
      await logOut();
      navigate("/signup");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="Home">
      <div className="home-card-container">
        <h1>
          দীনিয়াত একাডেমী অনলাইন <br /> মাদরাসা
        </h1>
        <div className="home-card">
          <Button variant="primary" onClick={handleLogin}>
            লগইন
          </Button>
          <Button variant="primary" onClick={handleSignUp}>
            নিবন্ধন করুন
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
