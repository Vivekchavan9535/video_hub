import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Button } from "@chakra-ui/react";
import Header from "./Components/Header";
import Home from "./Components/Home"
import Footer from "./Components/Footer";
import Videos from "./Components/Videos";
import Upload from "./Components/Upload";
import Signup from "./Components/Signup";
import Login from "./Components/Login";



function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/videos' element={<Videos />} />
        <Route path='/upload' element={<Upload />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />




      </Routes>
      <Footer />
    </Router>
  )


}

export default App;
