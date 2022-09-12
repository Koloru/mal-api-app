import { Route, Routes } from "react-router-dom";

// Tailwind Import
import "./App.css";

// Page Imports
import { About } from "./pages/About";
import { Home } from "./pages/Home";

// Component imports
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      {/* Routes */}
      <div className="py-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
