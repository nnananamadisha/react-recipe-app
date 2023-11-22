
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Recipes from "./pages/Recipe";
import Settings from "./pages/Settings";


function App() {
  return (
    <Router>
    <Navbar />
    <div className="container main">
      <Routes>
        {/* Home = default route for the parent route */}
        <Route path="/" element={<Home />} /> 
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
    <Footer />
  </Router>
    
   ) 
}

export default App;
