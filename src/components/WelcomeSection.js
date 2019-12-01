import React from "react"
import Img from "gatsby-image"

export default(props) => (
    <section className="welcome-section">
        <Img fluid={props.img} alt={props.alt} />
        <h1>{props.message}</h1>
    </section>
)