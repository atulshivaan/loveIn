import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home"; // Assume we have a home page as well

const App = () => {
  const [showIntro, setShowIntro] = useState(true); // Control intro animation state

  // Hide intro after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2000); // Time for intro animation to show (adjust as needed)
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Navbar  /> {/* Pass showIntro to Navbar */}
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      
    </div>
  );
};

export default App;

