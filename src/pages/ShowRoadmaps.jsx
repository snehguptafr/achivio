import React, { useState } from "react";
import Header from "../components/Header";
import './css_files/ShowRoadmaps.css';
import { useNavigate } from "react-router-dom";

export default function ShowRoadmaps() {

  const navigate = useNavigate();

  const [delCount, setDelCount] = useState(0);

  const roadmaps = Object.keys(localStorage).map((roadmap) => {
    return (
      <div key={Object.keys(localStorage).indexOf(roadmap)} className="roadmap-card">

        <button className="cross-but" id='del-rm' onClick={()=> 
        {localStorage.removeItem(roadmap);
          setDelCount(delCount+1)
        }}> 
          X
        </button>

        <h1 onClick={() => navigate(`/view/${roadmap}`)}>{roadmap}</h1>
      </div>
    )
  })

  return (
    <div className="show-rms-page app">
      <Header />

      <div className="cards-edit">

        <div onClick={() => navigate(`/create`)} className="roadmap-card">
          <h1><span className="material-symbols-outlined">
            add
          </span></h1>
        </div>
        {roadmaps}

      </div>

    </div>
  );
}
