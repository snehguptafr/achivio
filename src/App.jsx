import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreateRoadmap from "./pages/CreateRoadmap";
import ViewRoadmap from "./pages/ViewRoadmap";
import ShowRoadmaps from "./pages/ShowRoadmaps";

export default function App(){

    return(
        <BrowserRouter>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateRoadmap />} />
            <Route path="/view/:id" element={<ViewRoadmap />} />
            <Route path="/show" element={<ShowRoadmaps />} />

        </Routes>
        </BrowserRouter>
    )
}