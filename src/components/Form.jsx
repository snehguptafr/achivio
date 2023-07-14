import React from "react";

export default function Form({handleSubmit, placeholder, autofocus, btnText}){
    return(
        <form className="checkpoints-form" onSubmit={handleSubmit}>
            <input type="text" name="checkpoint" required placeholder={placeholder} id="checkpoint-input" autoFocus={autofocus}/>
            <button className="final-sub" type="submit">{btnText}</button>
        </form>
    )
}