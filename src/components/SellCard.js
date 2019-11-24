import React from "react"
import { Link } from "gatsby"

export default(props) => (
    <div className="flex flex-column sell-card">
        <h2>{props.title_type} <span>{props.title_name}</span></h2>
        <div className="price-holder">{props.price}</div>
        <Link to={props.link}><button>Szczegóły</button></Link>
    </div>
)