import React from 'react'
import styled from 'styled-components'

const Mapouter = styled.div`
    position:relative;
    text-align:right;
    height:300px;
    width: 100%;
    filter: grayscale(1000%);
`;

const Gmap = styled.div`
    overflow:hidden;
    background:none!important;
    height:100%;
    width: 100%;
`;

const GoogleMap = () => {
    return (
        <Mapouter>
            <Gmap>
                <iframe 
                    title="our-place-on-gmaps" 
                    width="100%" 
                    height="100%" 
                    id="gmap_canvas" 
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    src="https://maps.google.com/maps?q=nysa%20ul.%20Mariacka%2037%2F7&t=&z=17&ie=UTF8&iwloc=&output=embed"></iframe>
            </Gmap>
        </Mapouter>
    )
}

export default GoogleMap;