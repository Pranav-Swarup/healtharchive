import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from "react-router-dom";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
//import { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/ui/tabs";
import "./App.css";
import img1 from "./components/ui/homelight.jpg"
import img2 from "./components/ui/testdata.png"
import FamilyTracker  from "./family"

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, [navigate]);

  return(
    <div className="landing-container">
      <div className="image-section">
        <img src={img1} alt="Healthcare Illustration" className="landing-image" />
      </div>
      <div className="form-section">
        <Card className="login-card">
          <CardContent>
            <h2 className="text-xl font-bold text-blue-600 text-center">Login</h2>
            <Input placeholder="Enter your email" className="input-field" />
            <Input type="password" placeholder="Enter password" className="input-field" />
            <Button className="submit-button">Sign In / Sign Up</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const Home = () => (
  <Card className="shadow-lg p-6 rounded-xl bg-white">
    <CardContent>

      <h1 className="text-2xl font-bold text-center text-blue-600">Welcome to Health Archive</h1>
      <p className="text-gray-600 text-center">Monitor health records, {"\n"}book appointments, and purchase medicines easily.</p>
      <p>Login to get started!</p>
    </CardContent>
  </Card>
);

const Login = () => (
  <Card className="shadow-lg p-6 rounded-xl bg-white">
    <CardContent>
      <h2 className="text-xl font-bold text-blue-600 text-center">Login</h2>
      <Input placeholder="Enter your email" className="my-2 border p-2 rounded-md" />
      <Input type="password" placeholder="Enter password" className="my-2 border p-2 rounded-md" />
      <Button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</Button>
    </CardContent>
  </Card>
);

const Appointments = () => (
  <Card className="shadow-lg p-6 rounded-xl bg-white">
    <CardContent>
      <h2 className="text-xl font-bold text-blue-600">Book an Appointment</h2>
      <Button className="mt-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Book Now</Button>
    </CardContent>
  </Card>
);

const Records = () => (
  <Card className="shadow-lg p-6 rounded-xl bg-white">
    <CardContent>
      <h2 className="text-xl font-bold text-blue-600">Past Patient Records</h2>
      <img src={img2} alt="Example Records" className="records-image" />
      <p className="text-gray-600">View your past medical records here.</p>
    </CardContent>
  </Card>
);



const Pharmacy = () => (
  <Card className="shadow-lg p-6 rounded-xl bg-white">
    <CardContent>
      <h2 className="text-xl font-bold text-blue-600">Buy Medicines</h2>
      <Button className="mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Go to Pharmacy</Button>
    </CardContent>
  </Card>
);

const App = () => (
  <Router>
    <div className="p-6 bg-gray-100 min-h-screen">
    <nav className="navbar">
    <button className="theme-toggle">🌙|☀️</button>
      <div className="nav-links">
        <Link to="/home" className="text-blue-500 hover:text-blue-700 font-bold">Home</Link>
        <Link to="/appointments" className="text-blue-500 hover:text-blue-700 font-bold">Appointments</Link>
        <Link to="/records" className="text-blue-500 hover:text-blue-700 font-bold">Records</Link>
        <Link to="/family" className="text-blue-500 hover:text-blue-700 font-bold">Family Tracker</Link>
        <Link to="/pharmacy" className="text-blue-500 hover:text-blue-700 font-bold">Pharmacy</Link>
      </div>
      <Link to="/" className="text-blue-500 hover:text-blue-700 font-bold login-link">Login</Link>
    </nav>

      <div className="flex">

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/records" element={<Records />} />
          <Route path="/family" element={<FamilyTracker />} />
          <Route path="/pharmacy" element={<Pharmacy />} />
        </Routes>
      </div>
    </div>
  </Router>
);

export default App;
