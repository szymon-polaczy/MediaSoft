import React from "react"

export default (props) => (
    <div className="website-holder box-shadow">
        <a href="https://szymonpolaczy.pl" target="_blank" rel="noopener noreferrer">
            <img src={props.img_src} alt={props.img_alt} />
            <p>{props.title}</p>
        </a>        
    </div>
)