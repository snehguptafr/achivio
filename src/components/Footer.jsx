import React from "react";
import './css_files/Footer.css';
import shravs from './images/shravsIMG.JPG';
import sneh from './images/snehIMG.JPG';
import github from './images/github.png';
import linkd from './images/linkD.png';
import insta from './images/insta.png';
import mail from './images/mail.png';

export default function Footer() {
  return (
    <footer className='PAGE-END' id='CONTACTINFO'>

      <h2 className="s-phrase">
        "None of us is as smart as the two of us."
      </h2>


      <section className="us">

        <div id="shravya" className="people">
          <img src={shravs} alt=" " />

          <span className="group">
            <p>Shravya</p>
            <p className="socials">
              <a href="https://github.com/shraaavss"><img className="social-icon" src={github} alt="" /></a>
              <a href="https://www.linkedin.com/in/shravya-rao/"><img className="social-icon" src={linkd} alt="" /></a>
              <a href="https://www.instagram.com/shraaavss/"><img className="social-icon" src={insta} alt="" /></a>
              <a href="mailto:shravys2707@gmail.com"><img className="social-icon" src={mail} alt="" /></a>
            </p>
          </span>

        </div>


        <div id="sneh" className="people">
          <img src={sneh} alt=" " />

          <span className="group">
            <p>Sneh</p>
            <p className="socials">
              <a href="https://github.com/snehguptafr"><img className="social-icon" src={github} alt="" /></a>
              <a href="https://www.linkedin.com/in/sneh-gupta/"><img className="social-icon" src={linkd} alt="" /></a>
              <a href="https://www.instagram.com/snehguptafr/"><img className="social-icon" src={insta} alt="" /></a>
              <a href="mailto:guptasneh302004@gmail.com"><img className="social-icon" src={mail} alt="" /></a>
            </p>
          </span>

        </div>

      </section>



    </footer>
  )
}