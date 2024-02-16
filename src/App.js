import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import Recipes from "./Components/Recipes";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import About from "./Components/About";
import { useState } from "react";
import Menu from "./Components/Menu";
function App() {


const [lightMode, setLightmode] = useState(true)

const toggleDarkmode = () =>{
  setLightmode(!lightMode);
}





  return (
    <>
    <BrowserRouter basename="/frontend-foodlle">
    
    <Navbar
    function = {toggleDarkmode}
    button =  {lightMode ? "FontAwesomeIcon-light" : "FontAwesomeIcon-dark" }
        divName = {lightMode ? "navbar-light" : "navbar-dark" }
        leftNav = {lightMode ? "left-nav-light" : "left-nav-dark"}
    />
   

    <Routes>
      <Route exact path="/frontend-foodlle" element={<Section
      mainDiv1 = {lightMode ? "main-div1-light" : "main-div1-dark"}
      mainDiv2 = {lightMode ? "main-div2-light" : "main-div2-dark"}
      mainDiv3 = {lightMode ? "main-div3-light" : "main-div3-dark"}
      mainDiv4 = {lightMode ? "main-div4-light" : "main-div4-dark"}
      />}/>
      <Route path="/recipes" element={<Recipes
      displayPort2 = {lightMode ? "display-port-2-light" : "display-port-2-dark"}
      h1Div = {lightMode ? "h1-div-light" : "h1-div-dark"}
      ingredientsContainer = {lightMode ? "ingredients-container-light" : "ingredients-container-dark"}
      />}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/about" element={<About
      divName = {lightMode ? "about-light" : "about-dark" }
      />}/>
      <Route path="/menu" element={<Menu/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
