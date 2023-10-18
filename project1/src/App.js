import About from "./components/About";
import {
  Route,Routes,BrowserRouter as Router
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Home from "./components/Home";

function App() {
  return (<div>
    <Router>
    
    <Routes>
  <Route path="/" element={<Navbar/>}></Route>
  <Route path="services" element={<Services />}></Route>
  <Route path="home" element={<Home />}></Route>

  <Route path="about" element={<About />}></Route>
</Routes>
</Router>
  </div>
  );
}

export default App;
