import React from "react";
import App from "../App";
import css from "./FeedbackOptions.module.css"

export default function FeedbackOptions (props){
    const {options,onClickFeedback}=props;

    return options.map((option,index)=>{
        return (
            <button key={index} type="button" 
                onClick={() => onClickFeedback(option)}
                className={css.button}
            >
                {option}
            </button>
        );
    });

}


