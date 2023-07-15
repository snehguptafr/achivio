import React, { useState } from "react";
import Header from "../components/Header";
import './css_files/ShowRoadmaps.css';
import { useNavigate } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";

export default function ShowRoadmaps() {

  const navigate = useNavigate();

  const [delCount, setDelCount] = useState(0);

  const roadmaps = Object.keys(localStorage).map((roadmap) => {
    const rmap = JSON.parse(localStorage.getItem(roadmap));
    const completed = rmap.filter(checkpt => checkpt.isCompleted === true).length;
    const completePercent = (completed/rmap.length)*100;
    return (
      <div key={Object.keys(localStorage).indexOf(roadmap)} className="roadmap-card">

        <button className="cross-but" id='del-rm' onClick={()=> 
        {localStorage.removeItem(roadmap);
          setDelCount(delCount+1)
        }}> 
          X
        </button>

        <h1 onClick={() => navigate(`/view/${roadmap}`)}>{roadmap}</h1>
        <ProgressBar percent={completePercent}  />
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
