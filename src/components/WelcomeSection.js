import React from "react"
class WelcomeSection extends React.Component {
    render() {
        return (
            <section className="welcome-section flex">
                <img src={this.props.img} alt={this.props.alt}/>
                <div className="wrapper">
                    <h1>{this.props.message}</h1>
                </div>
            </section>
        );
    }
}

export default WelcomeSection;