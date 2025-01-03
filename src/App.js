import "./assets/css/main.css";
import "./assets/css/offcanvas.css";

import "./assets/css/gallery.css";
import "./assets/css/style.css";

import { HashRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';

import Home from "./components/Home";
import Mission from "./components/Mission";
import CowProtection from "./components/CowProtection";
import Projects from "./components/Projects";
import Events from "./components/Events";
import Objectives from "./components/Objectives";
import Governance from "./components/Governance";
import Leadership from "./components/Leadership";
import FoodDistribution from "./components/FoodDistribution";
import DailyDarshan from "./components/DailyDarshan";
import Costume from "./components/Costume";
import DignitariesVisit from "./components/DignitariesVisit";
import DeityDarshan from "./components/DeityDarshan";
import GoSeva from "./components/GoSeva";
import AnnadanaSeva from "./components/AnnadanaSeva";
import DeityDarshanOne from "./components/DeityDarshanOne";
import DeityDarshanTwo from "./components/DeityDarshanTwo";
import DeityDarshanThree from "./components/DeityDarshanThree";




function App() {
  return (
    <>
      <HashRouter>
      <HelmetProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/objective" element={<Objectives />} />
          <Route path="/governance" element={<Governance />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/fooddistribution" element={<FoodDistribution />} />
          <Route path="/cowprotection" element={<CowProtection />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/events" element={<Events />} />
          <Route path="/dailydarshan" element={<DailyDarshan />} />
          <Route path="/costume" element={<Costume />} />
          <Route path="/dignitariesvisit" element={<DignitariesVisit />} />
          <Route path="/deity-darshan-1" element={<DeityDarshanOne />} />
          <Route path="/deity-darshan-2" element={<DeityDarshanTwo />} />
          <Route path="/deity-darshan-3" element={<DeityDarshanThree />} />

          <Route path="/deity" element={<DeityDarshan />} />
          <Route path="/goseva" element={<GoSeva />} />
          <Route path="/annadanaseva" element={<AnnadanaSeva />} />
        </Routes>
        </HelmetProvider>
      </HashRouter>
    </>
  );
}

export default App;
