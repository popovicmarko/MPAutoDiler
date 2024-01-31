import React, { useState, useEffect } from "react";
import Preloader from "../src/components/preloader/Preloader";
import Navbar from "./components/navBar/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/ResumeNew";
import { ThemeContext } from "./Context/theme";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from 'react-helmet';
import Marko from "./Assets/me.png";


function App() {
  const [load, upadateLoad] = useState(true);
  const [{ themename }] = React.useContext(ThemeContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${themename} app`}>
      <Helmet>
        <title>Marko Popovic</title>
        <meta name="description" content="Dobrodošli na moj portfolio sajt! Ja sam softverski inženjer i student treće godine softverskog inženjerstva. Ovde možete pronaći informacije o meni, moje veštine, projekte na kojima sam radio i iskustvo koje sam stekao. Pogledajte moj portfolio i saznajte više o mojim dostignućima i radovima u oblasti softverskog razvoja." />
        <meta name="keywords" content="Marko Popovic, programer, Tutin, Marko Popovic Tutin, Novi Pazar, Novi Pazar Marko, DUNP, Drzavni Univerzitet u Novom Pazaru, NIT, Centar Nit, Marko Popović, Softverski inženjer, Student softverskog inženjerstva, Portfolio sajt, Programer, Web development, Frontend development, Backend development" />
        <meta property="og:title" content="Marko Popovic" />
        <meta property="og:description" content="Dobrodošli na moj portfolio sajt! Ja sam softverski inženjer i student treće godine softverskog inženjerstva. Ovde možete pronaći informacije o meni, moje veštine, projekte na kojima sam radio i iskustvo koje sam stekao. Pogledajte moj portfolio i saznajte više o mojim dostignućima i radovima u oblasti softverskog razvoja." />
        <meta property="og:image" content= {Marko} />
      </Helmet>
      <Router>
        <Preloader load={load} />
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
