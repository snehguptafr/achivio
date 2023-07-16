import React from "react";
import Header from "../components/Header";
import "./css_files/NotFound.css"

export default function NotFound(){
    document.title = "Achivio | Page not found"
    return(
        <div className="app">
            <Header />

            <div className="error-message">
                <h1>Oops! Can't find the page you're looking for :(</h1>
                <h2>Please recheck the URL</h2>
            </div>
        </div>
        
    )
}