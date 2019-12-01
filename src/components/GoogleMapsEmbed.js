import React from "react"

class GoogleMapsEmbed extends React.Component {
    render() {
        return (
            <div className="mapouter wrapper pad-it">
                <div className="gmap_canvas">
                    <iframe id="gmap_canvas" title="Google Maps Embed" src="https://maps.google.com/maps?q=nysa%20ul.Mariacka%2037%2F7&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                </div>
            </div>
        );
    }
}

export default GoogleMapsEmbed;