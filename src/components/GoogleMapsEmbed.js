import React from "react"
import styled from "styled-components"

const Gmaps = styled.article`
    position: relative;
    text-align: right;
    height: 37.5vh;
    width: 100%;
    padding-bottom:0;
    box-sizing: border-box;
  
  .gmap_canvas {
    height: 100%;
  }
  
  #gmap_canvas {
    overflow: hidden;
    background: none !important;
    height: 100%;
    width: 100%;
  }
`;

export default () => {
    return (
        <Gmaps>
            <div className="gmap_canvas">
                <iframe id="gmap_canvas" title="Google Maps Embed" src="https://maps.google.com/maps?q=nysa%20ul.Mariacka%2037%2F7&t=&z=17&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
            </div>
        </Gmaps>
    )
}