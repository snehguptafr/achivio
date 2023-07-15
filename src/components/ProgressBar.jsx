import React from "react";
import './css_files/ProgressBar.css';

export default function ProgressBar({ percent }) {
    return (
        <div className="progressparent">

            <div className="p-bar">
                <span className="filler" style={{width: `${percent}%`}} >
                </span>
            </div>

        </div>
    )
}