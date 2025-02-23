import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from "react-router-dom";
import { Card, CardContent } from "./components/Card/card";
import { Button } from "./components/Button/button";
import { Input } from "./components/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/tabs";
import "./App.css";
import img1 from "./assets/homelight.jpg"
import { FamilyTracker, HomePage, Pharmacy, Appointments, Records} from "./pages"

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
          <Route path="/home" element={<HomePage />} />
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
