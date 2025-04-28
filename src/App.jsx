import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Community from "./pages/Community";
import Mentorship from "./pages/Mentorship";
import Login from "./pages/Login";
import Register from "./pages/Register";




function App() {

  return (
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/community" element={<Community />}/>
          <Route path="/mentorship" element={<Mentorship />}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
