import React from "react";

export default function Form({handleSubmit, placeholder, autofocus, value, btnText}){
    return(
        <form className="checkpoints-form" onSubmit={handleSubmit}>
            <input type="text" name="checkpoint" required defaultValue={value} placeholder={placeholder} id="checkpoint-input" autoFocus={autofocus}/>
            <button className="final-sub" type="submit">{btnText}</button>
        </form>
    )
}