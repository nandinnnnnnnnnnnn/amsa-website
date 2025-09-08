// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import ProgramsPage from "./pages/ProgramsPage";
import BlogsPage from "./pages/BlogsPage";
import SignupMember from "./pages/SignupMember";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/blog" element={<BlogsPage />} />
        <Route path="/signup/member" element={<SignupMember />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
