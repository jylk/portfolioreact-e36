import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ContactMe from "./pages/ContactMe";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contactme" element={<ContactMe />} />
      </Routes>
     <Footer/>
    </Router>


  );
}

export default App;
