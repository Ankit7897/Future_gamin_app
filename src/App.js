import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer"
import Videos from "./components/Videos"
import Upload from './components/Upload';
import Sigup from './components/Sigup';
import Login from './components/Login';
function App() {
  return (

   <Router>
    <Header/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/videos" element={<Videos />} />
    <Route path="/upload" element={<Upload />} />
    <Route path="/login" element={<Login />} />
    <Route path="/singup" element={<Sigup/>} />
    </Routes>
    <Footer/>
   </Router>
  );
}

export default App;
