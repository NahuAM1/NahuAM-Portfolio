import Home from "./pages/home/Home";
import AboutMe from "./pages/about-me/AboutMe";
import NavBar from "./components/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
