import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Overlay from "./components/Overlay";
import Home from "./pages/Home";
import CreateRoadmap from "./pages/CreateRoadmap";
import ViewRoadmap from "./pages/ViewRoadmap";
import ShowRoadmaps from "./pages/ShowRoadmaps";
import Certificate from "./pages/Certificate";
import Help from "./pages/Help";
import NotFound from "./pages/NotFound";

export default function App(){
    const [illegalSize, setIllegalSize] = React.useState(false)
    function checkScreenSize() {
        if (illegalSize === false && window.innerWidth < 1200) {
            setIllegalSize(true)
        }
        else if  (illegalSize === true && window.innerWidth >= 1200){
            setIllegalSize(false)
        }
      }
      
      window.addEventListener('load', checkScreenSize);
      window.addEventListener('resize', checkScreenSize);
      

    return(
        <BrowserRouter>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateRoadmap />} />
            <Route path="/view/:roadMap" element={<ViewRoadmap />} />
            <Route path="/show" element={<ShowRoadmaps />} />
            <Route path='/certificate/:roadMap' element={<Certificate />} />
            <Route path="/getstarted" element={<Help />} />
            <Route path="*" element={<NotFound />} />

        </Routes>
            {illegalSize && <Overlay message={"Whoa, the screen's too small for me to fit in. Please use a device with a big screen"}/>}
        </BrowserRouter>
    )
}