import React from "react"

export default(props) => (
    <div className="flex flex-column sell-card">
        <h2>{props.title_type} <span>{props.title_name}</span></h2>
        <div className="price-holder">{props.price}</div>
        <button>Szczegóły</button>
    </div>
)