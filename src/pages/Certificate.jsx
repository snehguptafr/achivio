import React from "react";
import "./css_files/Certificate.css";
import Alogo from "../components/images/achivioLogo.png";
import { useParams } from "react-router-dom";
import html2canvas from "html2canvas";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import Header from "../components/Header";

export default function Certificate() {
  const { roadMap } = useParams();
  const roadmap = localStorage.getItem(roadMap)
    ? JSON.parse(localStorage.getItem(roadMap))
    : false;
  const completed = roadmap
    ? roadmap.filter((checkpoint) => checkpoint.isCompleted === true).length
    : false;

  const username = roadmap ? prompt("What should we call you?") : false;

  function getCertificate() {
    const component = document.getElementById("certificate");
    if (component) {
      html2canvas(component, { scale: 4 })
        .then((canvas) => {
          const dataURL = canvas.toDataURL("image/png");
          const link = document.createElement("a");
          link.href = dataURL;
          link.download = `${username}-${roadMap} certificate.png`;
          link.click();
        })
        .catch((error) => {
          console.error("Error capturing image:", error);
        });
    }
  }

  const { width, height } = useWindowSize();

  return roadmap ? (
    completed === roadmap.length ? (
      <div id="parent-certi">
        <Confetti width={width} height={height} />

        <section id="certificate" className="certi">
          <h1>Congratulations, {username}!</h1>
          <p>
            on completing your <span id="bold-it">{roadMap}</span> roadmap
          </p>
          <p>Good job sticking to your goals and achiving them!</p>
          <img src={Alogo} alt=" " />
        </section>
        <button className="load-but" onClick={getCertificate}>
          Download Certificate
        </button>
      </div>
    ) : (
      <div className="noteli">
        <h1>
          We're sorry, {username}, but you're not eligible for the certificate!
        </h1>
      </div>
    )
  ) : (
    <div className="app">
      <Header />
      <div className="error-message">
        <h1>{roadMap} roadmap not found</h1>
        <h2>Maybe there's a typo in the url</h2>
      </div>
    </div>
  );
}
