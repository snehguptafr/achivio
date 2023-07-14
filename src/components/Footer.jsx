import React from "react";
import shravs from './images/shravsIMG.JPG';
import sneh from './images/snehIMG.JPG';
import github from './images/github.png';
import linkd from './images/linkD.png';
import insta from './images/insta.png';
import mail from './images/mail.png';

export default function footpiece() {
  return (
    <footer className='PAGE-END' id='CONTACTINFO'>

      <h2 className="s-phrase">
        "None of us is as smart as the two of us."
      </h2>


      <section className="us">

        <div id="shravya">

          <span className="group">
            <img src={shravs} alt=" " />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum laborum suscipit dolorum dolor,
              animi autem aliquam. Fuga, rem? Animi assumenda deleniti inventore nostrum quibusdam nam illo architecto?
              Aspernatur, quibusdam ut.</p>
          </span>

          <p className="socials">
            <a href="https://github.com/shraaavss"><img className="social-icon" src={github} alt="" /></a>
            <a href="https://www.linkedin.com/in/shravya-rao/"><img className="social-icon" src={linkd} alt="" /></a>
            <a href="https://www.instagram.com/shraaavss/"><img className="social-icon" src={insta} alt="" /></a>
            <a href="mailto:shravys2707@gmail.com"><img className="social-icon" src={mail} alt="" /></a>
          </p>

        </div>


        <div id="sneh">

          <span className="group">
            <img src={sneh} alt=" " />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum laborum suscipit dolorum dolor,
              animi autem aliquam. Fuga, rem? Animi assumenda deleniti inventore nostrum quibusdam nam illo architecto?
              Aspernatur, quibusdam ut.</p>
          </span>

          <p className="socials">
            <a href="https://github.com/snehguptafr"><img className="social-icon" src={github} alt="" /></a>
            <a href="https://www.linkedin.com/in/sneh-gupta/"><img className="social-icon" src={linkd} alt="" /></a>
            <a href="https://www.instagram.com/snehguptafr/"><img className="social-icon" src={insta} alt="" /></a>
            <a href="mailto:guptasneh302004@gmail.com"><img className="social-icon" src={mail} alt="" /></a>
          </p>

        </div>

      </section>



    </footer>
  )
}