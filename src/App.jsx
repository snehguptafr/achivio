import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import CreateRoadmap from "./pages/CreateRoadmap";
import ViewRoadmap from "./pages/ViewRoadmap";
import ShowRoadmaps from "./pages/ShowRoadmaps";
import Certificate from "./pages/Certificate";

export default function App(){

    // function checkScreenSize() {
    //     if (window.innerWidth < 1200) {
    //       alert('Please try this web app on a laptop for the best experience.');
    //     }
    //   }
      
    //   window.addEventListener('load', checkScreenSize);
    //   window.addEventListener('resize', checkScreenSize);
      

    return(
        <BrowserRouter>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateRoadmap />} />
            <Route path="/view/:roadMap" element={<ViewRoadmap />} />
            <Route path="/show" element={<ShowRoadmaps />} />
            <Route path='/certificate/:roadMap' element={<Certificate />} />

        </Routes>
        </BrowserRouter>
    )
}