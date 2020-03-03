import React from "react"
import styled from "styled-components"

const Gmaps = styled.article`
    position: relative;
    text-align: right;
    height: 50vh;
    width: 100%;
    padding: 1.5rem 0 3.5rem 0;
    box-sizing: border-box;
  
  .gmap_canvas {
    height: 100%;
  }
  
  @media screen and (max-width: 1200px) {
      width: calc(100% - 15vw);
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
        <Gmaps className="wrapper pad-it">
            <div className="gmap_canvas">
                <iframe id="gmap_canvas" title="Google Maps Embed" src="https://maps.google.com/maps?q=nysa%20ul.Mariacka%2037%2F7&t=&z=17&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
            </div>
        </Gmaps>
    )
}