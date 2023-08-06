import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import PhoneSignUp from "./components/PhoneSignUp";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./components/Dashboard";
import { UserAuthContextProvider } from "./context/UserAuthContext";

function App() {
  return (
    <div>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route  path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
              <Route  path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
              <Route  path="/login" element={<Login />} />
              <Route  path="/signup" element={<Signup />} />
              <Route  path="/phonesignup" element={<PhoneSignUp />} />
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </div>
  );
}

export default App;