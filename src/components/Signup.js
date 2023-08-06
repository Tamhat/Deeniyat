import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import "./../css/Components.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const [referenceId, setReferenceId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const isPhoneNumberValid = () => {
    // Regular expression for phone numbers from all countries
    const phoneRegex = /^[+]?[0-9]{1,4}?[-\s./0-9]*$/;
    return phoneRegex.test(phoneNumber);
  };
  const isEmailValid = () => {
    // Simple email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!isPhoneNumberValid()) {
      setError("Please enter a valid phone number!");
      return;
    }

    if (!isEmailValid()) {
      setError("Please enter a valid email address!");
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "users"), {
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        referenceId: referenceId,
      });
      console.log("Document written with ID: ", docRef.id);

      await signUp(email, password, name);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  // ... Rest of the component code ...

  return (
    <div className="signup">
      <div className="signup-card">
      <div className="p-4 box">
        <h2 className="mb-3">Student SignUp</h2>
        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Control
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
            <Form.Control
              type="number"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          {/* Add form field for reference ID */}
          <Form.Group className="mb-3" controlId="formBasicReferenceId">
            <Form.Control
              type="text"
              placeholder="Reference ID"
              value={referenceId}
              onChange={(e) => setReferenceId(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="submit">
              Sign up
            </Button>
          </div>
        </Form>
      </div>
      <div className="p-4 box mt-3 text-center">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
      </div>
    </div>
  );
};

export default Signup;
