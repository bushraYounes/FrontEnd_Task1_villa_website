import React from 'react'
import GoogleMapReact from 'google-map-react';
import { googleMapAPIKey } from '../../tools/googleMapKey'
import { IoLocation } from "react-icons/io5";
import './GoogleMap.scss'


const GoogleMap = ({ lat, lon, zoom, width, height }) => {
    const defaultProps = {
        center: [parseFloat(lat), parseFloat(lon)], 
        zoom: parseInt(zoom)
    };

    return (

        <div className="googleMapComponent" style={{ height: height, width: width }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: googleMapAPIKey }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <div className='googleMapMarkerSection'>
                    <IoLocation/>
                </div>
                
            </GoogleMapReact>
        </div>
    );
}

export default GoogleMap
