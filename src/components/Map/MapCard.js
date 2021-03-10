import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import icon from '../../img/logo512.png';
import styles from './Map.module.css';


const MapCard = ({ google }) => {

    return <div className={styles.mapWrapper}>
        <Map
            google={google}
            zoom={14}            
            initialCenter={
                {
                    lat: 51.507359,
                    lng: -0.136439
                }
            }
        >

            <Marker
                icon={icon}
                // onClick={}
                position={
                    {lat: 51.503399,
                    lng: -0.119519}
                }
            />

            <Marker
                icon={icon}
                // onClick={}
                position={
                    {lat: 51.505554,
                    lng: -0.075278}
                }
            />
            
        </Map>
        </div>
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(MapCard);