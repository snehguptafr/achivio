import React from "react";
import './css_files/Help.css'
import Header from "../components/Header";
import img1 from '../components/images/help-1.png';
import img2 from '../components/images/help-2.png';
import img3 from '../components/images/help-3.png';
import img4 from '../components/images/help-4.png';
import img5 from '../components/images/help-5.png';
import img6 from '../components/images/help-6.png';
import img7 from '../components/images/help-7.png';
import img8 from '../components/images/help-8.png';
import img9 from '../components/images/help-9.png';
import img10 from '../components/images/help-10.png';
import img11 from '../components/images/help-11.png';

export default function Help() {
    return (
        <div className="help-main">
            <Header />

            <div >

                <div className="help-points">

                    <h1>Follow these <span className="special-letters">simple steps</span>  and get started!</h1>


                    <div className="help-blocks">
                        <h1>step 1</h1>
                        <img src={img1} alt="" />
                    </div>

                    <div className="help-blocks">
                        <h1>step 2</h1>
                        <img src={img2} alt="" />
                    </div>

                    <div className="help-blocks">
                        <h1>step 3</h1>
                        <img src={img3} alt="" />
                        <img src={img4} alt="" />
                    </div>

                    <div className="help-blocks">
                        <h1>step 4</h1>
                        <img src={img5} alt="" />
                    </div>

                    <div className="help-blocks">
                        <h1>step 5</h1>
                        <img src={img6} alt="" />
                        <img src={img7} alt="" />
                        <img src={img8} alt="" />
                        <img src={img9} alt="" />
                    </div>

                    <div className="help-blocks">
                        <h1>step 6</h1>
                        <img src={img10} alt="" />
                        <img src={img11} alt="" />
                    </div>

                </div>

            </div>

        </div>
    )
}