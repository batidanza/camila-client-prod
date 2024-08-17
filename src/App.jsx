import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WorkHome from "./components/work/WorkHome";
import WorkSketchPixel2 from "./components/sketch/WorkSketchPixel2.jsx";
import { AuthProvider } from "./components/management/user/Login.jsx";
import Navbar from "./components/layout/Navbar.jsx";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Navbar/>
        <Routes>
          <Route path="/" element={<WorkSketchPixel2/>} />
          <Route path="/work" element={<WorkHome />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
